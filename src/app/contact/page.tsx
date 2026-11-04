"use client";

import { useState, useRef, type ChangeEvent, type FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/company-info";
import { LazyMapEmbed } from "@/components/contact/LazyMapEmbed";
import {
  ENQUIRY_LIMITS as L,
  PHONE_ERROR,
  PHONE_INPUT_PATTERN,
  buildWhatsAppUrl,
  checkFormFields,
  isValidPhone,
} from "@/lib/enquiry-validation";

const labelClass = "text-xs font-bold uppercase tracking-wider text-[#0B1E33]";
const inputClass =
  "w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-[#0B1E33] placeholder:text-slate-400 focus:border-vmgold focus:ring-2 focus:ring-vmgold/30 outline-none text-sm transition-all min-h-[44px]";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    contactPhone: "",
    contactEmail: "",
    contactSubject: "Request a Quote",
    contactMsg: "",
    honeypot: "", // Hidden anti-spam trap
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<{
    messageId?: string;
    recipient?: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [whatsappNotice, setWhatsappNotice] = useState<string | null>(null);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  function handleInputChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { id, value } = e.target;
    e.target.setCustomValidity("");
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errorMessage) setErrorMessage(null);
  }

  // Shared validation for both the Email and WhatsApp buttons
  function validateForm(): boolean {
    if (!formRef.current) return false;
    return checkFormFields(formRef.current, {
      fullName: formData.fullName.trim().length < L.name.min ? "Please enter your full name (at least 2 characters)." : null,
      contactPhone: isValidPhone(formData.contactPhone) ? null : PHONE_ERROR,
      contactMsg: formData.contactMsg.trim().length < L.contactMessage.min ? "Please enter your message (at least 5 characters)." : null,
    });
  }

  // Generate WhatsApp message URL (encodeURIComponent keeps line breaks and symbols intact)
  function generateWhatsAppUrl(): string {
    return buildWhatsAppUrl(COMPANY_INFO.whatsapp.number, [
      "*VM SQUARE SECURITY - WEBSITE ENQUIRY*",
      "",
      `*Name:* ${formData.fullName.trim()}`,
      `*Phone:* ${formData.contactPhone.trim()}`,
      `*Email:* ${formData.contactEmail.trim()}`,
      `*Service / Topic:* ${formData.contactSubject}`,
      "",
      "*Message:*",
      formData.contactMsg.trim(),
      "",
      "_Sent from vmsquaresecurity.com_",
    ]);
  }

  // Handle WhatsApp submission with validation and clear expectation
  function handleSendWhatsApp() {
    if (!validateForm()) {
      return;
    }

    // Clear any earlier email error so it doesn't look like WhatsApp failed
    setErrorMessage(null);
    const url = generateWhatsAppUrl();
    setWhatsappUrl(url);

    // Open WhatsApp in a new tab with security attributes
    window.open(url, "_blank", "noopener,noreferrer");

    // Explain that opening WhatsApp does NOT automatically send; visitor must press Send
    setWhatsappNotice(
      "WhatsApp opened in a new tab with your prefilled inquiry. Please press Send inside WhatsApp to complete message delivery."
    );
  }

  // Handle Email submission via Google Workspace SMTP API
  async function handleSendEmail(e?: FormEvent) {
    if (e) e.preventDefault();
    if (!validateForm()) {
      return;
    }

    // Prevent concurrent duplicate submissions
    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage(null);
    setWhatsappNotice(null);

    try {
      const res = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          name: formData.fullName.trim(),
          phone: formData.contactPhone.trim(),
          email: formData.contactEmail.trim(),
          subject: formData.contactSubject,
          message: formData.contactMsg.trim(),
          honeypot: formData.honeypot,
        }),
      });

      const result = await res.json().catch(() => null);

      if (!res.ok || !result?.success) {
        // Honest error handling: Never claim success on failure
        // Preserve form values so user can retry or switch to WhatsApp
        const errorText = result?.error || "We were unable to deliver your message at this time. Please try again or use WhatsApp.";
        setErrorMessage(errorText);
        return;
      }

      // Success verified by Google Workspace SMTP
      setSubmitSuccess({
        messageId: result.messageId,
        recipient: result.recipient || COMPANY_INFO.email.address,
      });

      // Clear the form ONLY after successful delivery confirmation
      setFormData({
        fullName: "",
        contactPhone: "",
        contactEmail: "",
        contactSubject: "Request a Quote",
        contactMsg: "",
        honeypot: "",
      });
    } catch {
      // Preserve form values on network error
      setErrorMessage("Network error occurred while connecting to the mail server. Your entered details are preserved below. Please retry or contact us on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleReset() {
    setSubmitSuccess(null);
    setErrorMessage(null);
    setWhatsappNotice(null);
    setWhatsappUrl(null);
  }

  return (
    <div className="min-h-screen bg-[#F6F8FB] pb-8">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-b from-white to-[#F6F8FB] text-[#0B1E33] py-6 md:py-8 mb-6 overflow-hidden border-b border-slate-200">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-vmgold to-transparent" />
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl space-y-2.5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vmgold/15 text-[#B88219] border border-vmgold/40 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="h-4 w-4" />
            <span>24/7 HELPLINE &amp; OPERATIONS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-[#0B1E33]">
            CONTACT VM SQUARE SECURITY
          </h1>
          <span className="mx-auto block h-1 w-16 rounded-full bg-vmgold" />
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Get in touch with our Bengaluru operations desk, request emergency response teams, or discuss security guard and manpower deployment across Karnataka.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">

          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden bg-white rounded-2xl border border-slate-200 p-6 shadow-xl shadow-slate-900/5 space-y-5">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-vmgold to-transparent" />

              <div>
                <h2 className="text-xl font-extrabold text-[#0B1E33]">Get In Touch</h2>
                <span className="mt-2 block h-[3px] w-10 rounded-full bg-vmgold" />
                <p className="text-slate-600 text-sm leading-relaxed mt-3">
                  Reach out directly to our 24/7 control room or head office for inquiries, guard deployments, and operational support.
                </p>
              </div>

              <div className="divide-y divide-slate-100">
                {/* Clickable Phone */}
                <div className="group flex items-start gap-4 py-4 first:pt-0">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B1E33] text-vmgold transition-transform duration-300 group-hover:scale-110">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#B88219]">Phone &amp; 24/7 Helpline</h3>
                    <a
                      href={COMPANY_INFO.phone.tel}
                      className="text-[#0B1E33] hover:text-[#B88219] font-extrabold text-base block py-1 transition-colors"
                      title="Click to call"
                    >
                      {COMPANY_INFO.phone.display}
                    </a>
                    <span className="text-xs text-slate-500 block mt-0.5">24/7 Command Control Desk</span>
                  </div>
                </div>

                {/* Clickable Email */}
                <div className="group flex items-start gap-4 py-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B1E33] text-vmgold transition-transform duration-300 group-hover:scale-110">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#B88219]">Official Email Address</h3>
                    <a
                      href={COMPANY_INFO.email.mailto}
                      className="text-[#0B1E33] hover:text-[#B88219] font-bold text-sm sm:text-base block break-all py-1 transition-colors"
                    >
                      {COMPANY_INFO.email.address}
                    </a>
                    <span className="text-xs text-slate-500">Official inquiries &amp; proposals</span>
                  </div>
                </div>

                {/* Head Office Location */}
                <div className="group flex items-start gap-4 py-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B1E33] text-vmgold transition-transform duration-300 group-hover:scale-110">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#B88219]">Head Office Location</h3>
                    <div className="text-sm text-slate-600 leading-relaxed">
                      <p className="font-bold text-[#0B1E33]">{COMPANY_INFO.name}</p>
                      <p className="mt-0.5">{COMPANY_INFO.address.building},</p>
                      <p>{COMPANY_INFO.address.street},</p>
                      <p>{COMPANY_INFO.address.area}</p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="group flex items-start gap-4 pt-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B1E33] text-vmgold transition-transform duration-300 group-hover:scale-110">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#B88219]">Operating Hours</h3>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      <strong className="text-[#0B1E33]">Security Command:</strong> 24 Hours / 7 Days a Week<br />
                      <strong className="text-[#0B1E33]">Administrative Office:</strong> Mon - Sat (10:00 AM - 5:00 PM)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xl shadow-slate-900/5">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-vmgold to-transparent" />

              <h2 className="text-xl font-extrabold text-[#0B1E33]">Send Us A Message</h2>
              <span className="mt-2 block h-[3px] w-10 rounded-full bg-vmgold" />
              <p className="text-slate-600 text-sm mt-3 mb-5">
                Fill out the form below. You can send your inquiry directly to our official Google Workspace email or via WhatsApp.
              </p>

              {/* Verified Success State: Shown ONLY if Google Workspace SMTP accepted the message */}
              {submitSuccess ? (
                <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-8 text-center space-y-4">
                  <CheckCircle2 className="h-14 w-14 text-emerald-600 mx-auto" />
                  <h3 className="text-2xl font-extrabold text-emerald-950">
                    Enquiry Dispatched Successfully!
                  </h3>

                  <div className="bg-white rounded-xl p-4 text-xs text-slate-700 max-w-md mx-auto space-y-1.5 border border-emerald-200 text-left">
                    <p><strong>Official Recipient:</strong> {submitSuccess.recipient || COMPANY_INFO.email.address}</p>
                    <p><strong>Status:</strong> Accepted by Google Workspace Mail Server</p>
                    {submitSuccess.messageId && (
                      <p className="text-slate-500 break-all"><strong>Server Message ID:</strong> {submitSuccess.messageId}</p>
                    )}
                  </div>

                  <p className="text-emerald-800 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you! Your inquiry was accepted by our mail server and routed to <strong>{COMPANY_INFO.email.address}</strong>. Our operations team will respond promptly.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <Button
                      onClick={handleReset}
                      className="bg-[#0B1E33] text-vmgold font-bold px-6 py-2.5 rounded-xl hover:bg-[#12314D] hover:text-vmgold border-0 shadow-md"
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSendEmail} className="space-y-4">
                  {/* Honeypot Spam Trap (Hidden from genuine visitors) */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      id="honeypot"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleInputChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Honest Error Banner: Shown if sending fails */}
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 flex items-start gap-3 text-sm">
                      <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="font-bold">Email Submission Failed</p>
                        <p className="text-xs text-red-700 leading-relaxed">{errorMessage}</p>
                        <p className="text-xs text-slate-700 font-medium pt-1">
                          Don&apos;t worry &mdash; your entered details are preserved below. You can retry or use the WhatsApp option to send your inquiry immediately.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* WhatsApp Status Notice */}
                  {whatsappNotice && (
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs space-y-2">
                      <div className="flex items-start gap-2.5">
                        <MessageSquare className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5 fill-emerald-600" />
                        <div>
                          <p className="font-bold text-emerald-950">WhatsApp chat opened</p>
                          <p className="text-emerald-800 mt-0.5 leading-relaxed">{whatsappNotice}</p>
                        </div>
                      </div>

                      <div className="p-2.5 bg-white rounded-lg text-[11px] text-slate-600 border border-emerald-200/50 leading-relaxed">
                        <strong>Please Note:</strong> Clicking the button pre-fills the message on your screen. You must press the <strong>Send</strong> button inside WhatsApp to deliver it. On desktop, you may need to scan a QR code if not logged in; on mobile, WhatsApp opens in your app.
                      </div>

                      {whatsappUrl && (
                        <div className="pt-1">
                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-emerald-700 hover:text-emerald-800 underline inline-flex items-center gap-1"
                          >
                            <span>WhatsApp didn&apos;t open? Click here to launch chat &rarr;</span>
                          </a>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="fullName" className={labelClass}>
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        minLength={L.name.min}
                        maxLength={L.name.max}
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className={inputClass}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contactPhone" className={labelClass}>
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contactPhone"
                        type="tel"
                        required
                        pattern={PHONE_INPUT_PATTERN}
                        maxLength={L.phone.max}
                        title={PHONE_ERROR}
                        value={formData.contactPhone}
                        onChange={handleInputChange}
                        placeholder="10-digit mobile number"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contactEmail" className={labelClass}>
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contactEmail"
                      type="email"
                      required
                      maxLength={L.email.max}
                      value={formData.contactEmail}
                      onChange={handleInputChange}
                      placeholder="name@example.com"
                      className={inputClass}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contactSubject" className={labelClass}>
                      Subject / Topic
                    </label>
                    <select
                      id="contactSubject"
                      value={formData.contactSubject}
                      onChange={handleInputChange}
                      className={inputClass}
                    >
                      <option value="Request a Quote">Request a Security Quote</option>
                      <option value="General Inquiry">General Security Inquiry</option>
                      <option value="Guard Deployment">Security Guard Deployment</option>
                      <option value="Facility Management">Facility Management Inquiry</option>
                      <option value="Billing & Invoicing">Billing &amp; Compliance</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contactMsg" className={labelClass}>
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contactMsg"
                      rows={4}
                      required
                      minLength={L.contactMessage.min}
                      maxLength={L.contactMessage.max}
                      value={formData.contactMsg}
                      onChange={handleInputChange}
                      placeholder="Describe your inquiry, required guard strength, or facility location..."
                      className={inputClass}
                    />
                  </div>

                  {/* Action Buttons: Email and WhatsApp Options */}
                  <div className="pt-1 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Choose How To Send Your Enquiry:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Send via Email Button */}
                      <button
                        type="button"
                        onClick={handleSendEmail}
                        disabled={isSubmitting}
                        className="w-full py-3 px-4 bg-[#0B1E33] hover:bg-[#12314D] text-vmgold font-extrabold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 min-h-[48px] cursor-pointer disabled:opacity-60 text-sm"
                      >
                        {isSubmitting ? (
                          <>
                            <RefreshCw className="h-5 w-5 text-vmgold animate-spin" />
                            <span>Sending via Google Workspace...</span>
                          </>
                        ) : (
                          <>
                            <Mail className="h-5 w-5 text-vmgold" />
                            <span>SEND TO EMAIL INBOX</span>
                          </>
                        )}
                      </button>

                      {/* Send via WhatsApp Button */}
                      <button
                        type="button"
                        onClick={handleSendWhatsApp}
                        disabled={isSubmitting}
                        className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 min-h-[48px] cursor-pointer disabled:opacity-60 text-sm"
                      >
                        <MessageSquare className="h-5 w-5 fill-white" />
                        <span>SEND VIA WHATSAPP</span>
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-500 gap-2">
                      <span>
                        ✉️ Official recipient: <strong className="text-[#0B1E33]">{COMPANY_INFO.email.address}</strong>
                      </span>
                      <span>
                        💬 Official WhatsApp: <strong className="text-[#0B1E33]">{COMPANY_INFO.whatsapp.display}</strong>
                      </span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Location Map Section */}
        <div className="relative overflow-hidden mt-5 lg:mt-6 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xl shadow-slate-900/5 space-y-4">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-vmgold to-transparent" />

          <div className="pb-3 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B1E33] text-vmgold">
                <MapPin className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-extrabold text-[#0B1E33]">Head Office Location Map</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              {COMPANY_INFO.address.full}
            </p>
          </div>

          {/* Interactive Google Map */}
          <LazyMapEmbed
            title={`VM SQUARE head office location map - ${COMPANY_INFO.address.full}`}
            src={COMPANY_INFO.address.embedUrl}
            directionsUrl={COMPANY_INFO.address.googleMapsUrl}
          />
        </div>
      </div>
    </div>
  );
}