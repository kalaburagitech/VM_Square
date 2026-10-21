import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { COMPANY_INFO } from "@/lib/company-info";

// In-memory rate limiting map for basic abuse prevention (IP-based, max 5 requests per 10 minutes)
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  // Clean expired
  if (record && now > record.expiresAt) {
    rateLimitMap.delete(ip);
  }

  const current = rateLimitMap.get(ip);
  if (!current) {
    rateLimitMap.set(ip, { count: 1, expiresAt: now + 10 * 60 * 1000 });
    return false;
  }

  if (current.count >= 5) {
    return true;
  }

  current.count += 1;
  return false;
}

// Strict Zod validation schemas
const contactSchema = z.object({
  type: z.literal("contact"),
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name cannot exceed 100 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(20, "Phone number cannot exceed 20 characters"),
  email: z.string().trim().email("Please provide a valid email address").max(100, "Email cannot exceed 100 characters"),
  subject: z.string().trim().max(150, "Subject is too long").default("General Security Inquiry"),
  message: z.string().trim().min(5, "Message must be at least 5 characters").max(3000, "Message cannot exceed 3000 characters"),
  honeypot: z.string().optional(), // Invisible spam trap
});

const quoteSchema = z.object({
  type: z.literal("quote"),
  name: z.string().trim().min(2, "Contact name must be at least 2 characters").max(100, "Name cannot exceed 100 characters"),
  company: z.string().trim().max(150, "Company name is too long").optional().default(""),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(20, "Phone number cannot exceed 20 characters"),
  email: z.string().trim().email("Please provide a valid email address").max(100, "Email cannot exceed 100 characters"),
  service: z.string().trim().min(2, "Service selection is required").max(100),
  location: z.string().trim().min(2, "Facility location is required").max(150),
  personnelCount: z.string().trim().min(1, "Personnel count is required").max(100),
  message: z.string().trim().max(3000, "Message cannot exceed 3000 characters").optional().default(""),
  honeypot: z.string().optional(), // Invisible spam trap
});

const enquirySchema = z.discriminatedUnion("type", [contactSchema, quoteSchema]);

export async function POST(req: Request) {
  try {
    // 1. IP extraction & rate limiting check
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          code: "RATE_LIMITED",
          error: "Too many submission attempts. Please wait 10 minutes before submitting another enquiry, or contact us directly on WhatsApp.",
        },
        { status: 429 }
      );
    }

    // 2. Parse and validate JSON payload
    let rawBody: unknown;
    try {
      rawBody = await req.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          code: "INVALID_JSON",
          error: "Malformed request payload. Please verify your form data.",
        },
        { status: 400 }
      );
    }

    const parseResult = enquirySchema.safeParse(rawBody);
    if (!parseResult.success) {
      const firstError = parseResult.error.issues[0]?.message || "Invalid input data";
      return NextResponse.json(
        {
          success: false,
          code: "VALIDATION_FAILED",
          error: firstError,
          details: parseResult.error.flatten().fieldErrors,
        },
        { status: 422 }
      );
    }

    const data = parseResult.data;

    // 3. Honeypot check: silently discard bots if honeypot is filled
    if (data.honeypot && data.honeypot.trim().length > 0) {
      return NextResponse.json({
        success: true,
        message: "Submission received.",
        messageId: "mock_honeypot_discarded",
      });
    }

    // 4. Server-controlled Google Workspace SMTP configuration
    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = Number(process.env.SMTP_PORT) || 465;
    const secure = process.env.SMTP_SECURE === "true" || port === 465;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    const targetEmail = process.env.CONTACT_TO_EMAIL || COMPANY_INFO.email.address; // drakshayani@vmsquaresecurity.com
    const fromEmail = process.env.CONTACT_FROM_EMAIL || `"VM SQUARE Website" <${user || targetEmail}>`;

    // If SMTP credentials are missing, do NOT fake success. Report honest error.
    if (!user || !pass || pass.trim() === "") {
      return NextResponse.json(
        {
          success: false,
          code: "SMTP_NOT_CONFIGURED",
          error: "Google Workspace SMTP credentials (SMTP_USER / SMTP_PASS) are not configured on the server. Please contact us directly via WhatsApp (+91 80732 46094) or phone.",
          targetEmail,
        },
        { status: 503 }
      );
    }

    // 5. Initialize Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
      connectionTimeout: 10000, // 10 seconds timeout
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });

    // 6. Format Submission Time (IST)
    const submissionTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const isQuote = data.type === "quote";
    const emailSubject = isQuote
      ? `[VM SQUARE Quote Request] ${data.name}${data.company ? ` (${data.company})` : ""} - ${data.service}`
      : `[VM SQUARE Website Inquiry] ${data.name} - ${data.subject}`;

    // Plaintext content fallback
    const plainText = isQuote
      ? `VM SQUARE SECURITY - NEW QUOTE REQUEST
========================================
Submission Time: ${submissionTime} IST
Website Source: vmsquaresecurity.com

CLIENT DETAILS:
- Contact Person: ${data.name}
- Company: ${data.company || "Not Specified / Individual"}
- Phone: ${data.phone}
- Email: ${data.email}
- Service Required: ${data.service}
- Facility Location: ${data.location}
- Guards / Personnel Count: ${data.personnelCount}

PROJECT DETAILS / REQUIREMENTS:
${data.message || "(No additional details entered)"}

========================================
Official Recipient: ${targetEmail}
Reply-To: ${data.email}`
      : `VM SQUARE SECURITY - NEW WEBSITE INQUIRY
=========================================
Submission Time: ${submissionTime} IST
Website Source: vmsquaresecurity.com

CLIENT DETAILS:
- Full Name: ${data.name}
- Phone: ${data.phone}
- Email: ${data.email}
- Subject: ${data.subject}

MESSAGE / REQUIREMENT:
${data.message}

=========================================
Official Recipient: ${targetEmail}
Reply-To: ${data.email}`;

    // Clean HTML content
    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
        <div style="background-color: #0B132B; color: #ffffff; padding: 26px 22px; text-align: center;">
          <h2 style="color: #F59E0B; margin: 0 0 6px 0; font-size: 22px; font-weight: 800; letter-spacing: 0.5px;">VM SQUARE SECURITY & MANPOWER SERVICES</h2>
          <p style="margin: 0; font-size: 13px; color: #cbd5e1; text-transform: uppercase; letter-spacing: 1px;">
            ${isQuote ? "Official Security Quote Request" : "Official Website Contact Inquiry"}
          </p>
        </div>
        
        <div style="padding: 26px 22px; color: #1e293b; font-size: 14px; line-height: 1.6;">
          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 16px; margin-bottom: 20px;">
            <p style="margin: 0; font-size: 12px; color: #64748b;">
              <strong>Received at:</strong> ${submissionTime} (IST) &bull; <strong>Origin:</strong> vmsquaresecurity.com
            </p>
          </div>

          <h3 style="border-bottom: 2px solid #F59E0B; padding-bottom: 8px; margin: 0 0 14px 0; font-size: 15px; color: #0B132B; text-transform: uppercase;">
            Client & Requirement Details
          </h3>
          
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 18px;">
            <tbody>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 8px 0; font-weight: bold; width: 160px; color: #475569;">Full Name / Contact:</td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${data.name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone Number:</td>
                <td style="padding: 8px 0;"><a href="tel:${data.phone}" style="color: #d97706; text-decoration: none; font-weight: 700;">${data.phone}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email Address:</td>
                <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #2563eb; text-decoration: none;">${data.email}</a></td>
              </tr>
              ${isQuote && data.company ? `
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Company Name:</td>
                <td style="padding: 8px 0; color: #0f172a;">${data.company}</td>
              </tr>` : ""}
              ${isQuote && data.service ? `
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Service Required:</td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: 700;">${data.service}</td>
              </tr>` : ""}
              ${!isQuote && data.subject ? `
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Subject / Topic:</td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${data.subject}</td>
              </tr>` : ""}
              ${isQuote && data.location ? `
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Facility Location:</td>
                <td style="padding: 8px 0; color: #0f172a;">${data.location}</td>
              </tr>` : ""}
              ${isQuote && data.personnelCount ? `
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Guards Count:</td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${data.personnelCount}</td>
              </tr>` : ""}
            </tbody>
          </table>

          <div style="background-color: #f8fafc; border-left: 4px solid #0B132B; border-radius: 6px; padding: 16px; margin-top: 14px;">
            <strong style="color: #0B132B; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 8px;">
              ${isQuote ? "Project Details & Site Requirements:" : "Client Inquiry / Message:"}
            </strong>
            <p style="white-space: pre-wrap; margin: 0; color: #334155; line-height: 1.6; font-size: 14px;">
              ${data.message || "(No additional details entered)"}
            </p>
          </div>
        </div>

        <div style="background-color: #f1f5f9; padding: 14px 22px; font-size: 12px; text-align: center; color: #64748b; border-top: 1px solid #e2e8f0;">
          Recipient: <strong>${targetEmail}</strong> &bull; Replying to this email goes directly to: <strong>${data.email}</strong><br />
          VM SQUARE SECURITY & MANPOWER SERVICES PVT. LTD. &bull; Bengaluru, Karnataka
        </div>
      </div>
    `;

    // 7. Dispatch via Google Workspace SMTP
    const info = await transporter.sendMail({
      from: fromEmail,
      to: targetEmail,
      replyTo: data.email,
      subject: emailSubject,
      text: plainText,
      html: htmlContent,
    });

    if (!info.messageId) {
      return NextResponse.json(
        {
          success: false,
          code: "NO_MESSAGE_ID",
          error: "Google Workspace mail server did not return a confirmation ID.",
          targetEmail,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      messageId: info.messageId,
      message: "Enquiry accepted by Google Workspace mail server.",
      recipient: targetEmail,
      timestamp: submissionTime,
    });
  } catch (err: any) {
    console.error("Google Workspace SMTP error in /api/send-enquiry:", err);

    // Specific error classification
    if (err?.code === "EAUTH" || err?.responseCode === 535) {
      return NextResponse.json(
        {
          success: false,
          code: "AUTH_FAILED",
          error: "Google Workspace SMTP authentication failed. Please verify that 2-Step Verification is active and an App Password has been generated for drakshayani@vmsquaresecurity.com.",
        },
        { status: 502 }
      );
    }

    if (err?.code === "ETIMEDOUT" || err?.code === "ESOCKETTIMEDOUT") {
      return NextResponse.json(
        {
          success: false,
          code: "TIMEOUT",
          error: "Connection to Google Workspace SMTP server timed out. Please retry or contact us directly on WhatsApp.",
        },
        { status: 504 }
      );
    }

    const errorMessage = err instanceof Error ? err.message : "Internal mail server error";
    return NextResponse.json(
      {
        success: false,
        code: "SMTP_ERROR",
        error: `Mail delivery failed: ${errorMessage}`,
      },
      { status: 502 }
    );
  }
}
