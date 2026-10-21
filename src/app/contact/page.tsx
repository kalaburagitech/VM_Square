"use client";

import React, { useState, useRef } from "react";
import { Mail, Phone, MapPin, Clock, MessageSquare, CheckCircle2, ShieldCheck, Copy, Check, ExternalLink, Navigation, AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/company-info";

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
    timestamp?: string;
    recipient?: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [whatsappNotice, setWhatsappNotice] = useState<string | null>(null);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);
  const [copiedAddress, setCopiedAddress] = useState(false);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errorMessage) setErrorMessage(null);
  }

  function handleCopyAddress(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(COMPANY_INFO.address.full);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  }

  // Generate WhatsApp message URL using URLSearchParams for robust encoding
  function generateWhatsAppUrl(): string {
    const messageLines = [
      "VM SQUARE SECURITY - WEBSITE INQUIRY",
      `Client name: ${formData.fullName.trim()}`,
      `Phone number: ${formData.contactPhone.trim()}`,
      `Email address: ${formData.contactEmail.trim()}`,
      `Subject: ${formData.contactSubject}`,
      `Message / Requirement: ${formData.contactMsg.trim()}`,
      "Website source: vmsquaresecurity.com",
    ];

    const messageText = messageLines.join("\n");
    const params = new URLSearchParams();
    params.set("text", messageText);

    return `https://wa.me/${COMPANY_INFO.whatsapp.number}?${params.toString()}`;
  }

  // Handle WhatsApp submission with validation and clear expectation
  function handleSendWhatsApp() {
    if (!formRef.current?.reportValidity()) {
      return;
    }

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
  async function handleSendEmail(e?: React.FormEvent) {
    if (e) e.preventDefault();
    if (!formRef.current?.reportValidity()) {
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
        timestamp: result.timestamp,
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
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      {/* Hero Banner */}
      <section className="bg-[#0B132B] text-white py-16 mb-12 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-400 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="h-4 w-4" />
            <span>24/7 HELPLINE & OPERATIONS</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">CONTACT VM SQUARE</h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
            Get in touch with our operations desk, request emergency response teams, or discuss site security deployment across Karnataka.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & WhatsApp CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="text-2xl font-extrabold text-[#0B132B]">Get In Touch</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Reach out directly to our 24/7 control room or regional office for inquiries, guard deployments, and operational support.
              </p>

              <div className="space-y-5 pt-2">
                {/* Clickable Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-400/10 text-amber-600 rounded-xl shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#0B132B]">Phone & 24/7 Helpline</h3>
                    <a
                      href={COMPANY_INFO.phone.tel}
                      className="text-amber-600 hover:text-amber-700 font-extrabold text-base sm:text-lg block hover:underline"
                      title="Click to call"
                    >
                      {COMPANY_INFO.phone.display}
                    </a>
                    <span className="text-xs text-slate-500 block mt-0.5">24/7 Command Control Desk</span>
                  </div>
                </div>

                {/* Clickable Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-400/10 text-amber-600 rounded-xl shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#0B132B]">Official Email Address</h3>
                    <a
                      href={COMPANY_INFO.email.mailto}
                      className="text-amber-600 font-bold text-base hover:underline block min-h-[38px] flex items-center break-all"
                    >
                      {COMPANY_INFO.email.address}
                    </a>
                    <span className="text-xs text-slate-500">Official inquiries &amp; proposals</span>
                  </div>
                </div>

                {/* Clickable Address to Google Maps */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-400/10 text-amber-600 rounded-xl shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <h3 className="font-bold text-sm text-[#0B132B]">Head Office Location</h3>
                    <a
                      href={COMPANY_INFO.address.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block text-sm text-slate-700 hover:text-amber-600 transition-colors leading-relaxed font-medium"
                      title="Click to open in Google Maps"
                    >
                      <p className="font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                        {COMPANY_INFO.name}
                      </p>
                      <p className="mt-0.5">{COMPANY_INFO.address.building},</p>
                      <p>{COMPANY_INFO.address.street},</p>
                      <p>{COMPANY_INFO.address.area}</p>
                    </a>
                    <a
                      href={COMPANY_INFO.address.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-amber-600 hover:text-amber-700 font-bold hover:underline pt-1"
                    >
                      <Navigation className="h-3.5 w-3.5" />
                      <span>View on Google Maps &rarr;</span>
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-400/10 text-amber-600 rounded-xl shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#0B132B]">Operating Hours</h3>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      <strong className="text-slate-800">Security Command:</strong> 24 Hours / 7 Days a Week<br />
                      <strong className="text-slate-800">Administrative Office:</strong> Mon - Sat (9:00 AM - 7:00 PM)
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp.number}?text=${encodeURIComponent("Hello VM SQUARE, I would like to inquire about security services.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold py-3.5 px-5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2.5 min-h-[48px] text-sm"
                >
                  <MessageSquare className="h-5 w-5 fill-white" />
                  <span>Chat With Us On WhatsApp (+91 80732 46094)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 md:p-10 shadow-lg">
              <h2 className="text-2xl font-extrabold text-[#0B132B] mb-2">Send Us A Message</h2>
              <p className="text-slate-500 text-sm mb-6">
                Fill out the form below. You can send your inquiry directly to our official Google Workspace email or via WhatsApp.
              </p>

              {/* Verified Success State: Shown ONLY if Google Workspace SMTP accepted the message */}
              {submitSuccess ? (
                <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-8 text-center space-y-4">
                  <CheckCircle2 className="h-14 w-14 text-emerald-600 mx-auto" />
                  <h3 className="text-2xl font-extrabold text-emerald-950">
                    Enquiry Dispatched Successfully!
                  </h3>
                  
                  <div className="bg-white/90 rounded-xl p-4 text-xs text-slate-700 max-w-md mx-auto space-y-1.5 border border-emerald-200 text-left">
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
                      className="bg-[#0B132B] text-amber-400 font-bold px-6 py-2.5 rounded-xl hover:bg-slate-800"
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSendEmail} className="space-y-5">
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

                  {/* WhatsApp Status Notice: Explains the WhatsApp Web / App action */}
                  {whatsappNotice && (
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs space-y-2">
                      <div className="flex items-start gap-2.5">
                        <MessageSquare className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5 fill-emerald-600" />
                        <div>
                          <p className="font-bold text-emerald-950">WhatsApp chat opened</p>
                          <p className="text-emerald-800 mt-0.5 leading-relaxed">{whatsappNotice}</p>
                        </div>
                      </div>

                      <div className="p-2.5 bg-white/70 rounded-lg text-[11px] text-slate-600 border border-emerald-200/50 leading-relaxed">
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0B132B] outline-none text-sm transition-all min-h-[48px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="contactPhone" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contactPhone"
                        type="tel"
                        required
                        value={formData.contactPhone}
                        onChange={handleInputChange}
                        placeholder="10-digit mobile number"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0B132B] outline-none text-sm transition-all min-h-[48px]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contactEmail" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contactEmail"
                      type="email"
                      required
                      value={formData.contactEmail}
                      onChange={handleInputChange}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0B132B] outline-none text-sm transition-all min-h-[48px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contactSubject" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Subject / Topic
                    </label>
                    <select
                      id="contactSubject"
                      value={formData.contactSubject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0B132B] outline-none text-sm bg-white transition-all min-h-[48px]"
                    >
                      <option value="Request a Quote">Request a Security Quote</option>
                      <option value="General Inquiry">General Security Inquiry</option>
                      <option value="Guard Deployment">Security Guard Deployment</option>
                      <option value="Facility Management">Facility Management Inquiry</option>
                      <option value="Billing & Invoicing">Billing & Compliance</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contactMsg" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contactMsg"
                      rows={4}
                      required
                      value={formData.contactMsg}
                      onChange={handleInputChange}
                      placeholder="Describe your inquiry, required guard strength, or facility location..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0B132B] outline-none text-sm transition-all"
                    />
                  </div>

                  {/* Action Buttons: Email and WhatsApp Options */}
                  <div className="pt-3 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Choose How To Send Your Enquiry:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {/* Send via Email Button */}
                      <button
                        type="button"
                        onClick={handleSendEmail}
                        disabled={isSubmitting}
                        className="w-full py-4 px-4 bg-[#0B132B] hover:bg-slate-800 text-amber-400 font-extrabold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 min-h-[52px] border border-amber-400/30 hover:border-amber-400 cursor-pointer disabled:opacity-60 text-sm"
                      >
                        {isSubmitting ? (
                          <>
                            <RefreshCw className="h-5 w-5 text-amber-400 animate-spin" />
                            <span>Sending via Google Workspace...</span>
                          </>
                        ) : (
                          <>
                            <Mail className="h-5 w-5 text-amber-400" />
                            <span>SEND TO EMAIL INBOX</span>
                          </>
                        )}
                      </button>

                      {/* Send via WhatsApp Button */}
                      <button
                        type="button"
                        onClick={handleSendWhatsApp}
                        disabled={isSubmitting}
                        className="w-full py-4 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 min-h-[52px] cursor-pointer disabled:opacity-60 text-sm hover:scale-[1.01]"
                      >
                        <MessageSquare className="h-5 w-5 fill-white" />
                        <span>SEND VIA WHATSAPP</span>
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-500 pt-1 gap-2">
                      <span>
                        ✉️ Official recipient: <strong className="text-slate-800">{COMPANY_INFO.email.address}</strong>
                      </span>
                      <span>
                        💬 Official WhatsApp: <strong className="text-slate-800">{COMPANY_INFO.whatsapp.display}</strong>
                      </span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Location Map Section */}
        <div className="mt-14 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-md space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-400/20 text-amber-600 rounded-lg">
                  <MapPin className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-bold text-[#0B132B]">Regional Office Location Map</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed font-medium">
                {COMPANY_INFO.address.full}
              </p>
            </div>

            {/* Map Actions: Copy & Direct Redirection */}
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={handleCopyAddress}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                  copiedAddress
                    ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300 shadow-xs"
                }`}
                title="Copy full address"
              >
                {copiedAddress ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span>Address Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a
                href={COMPANY_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-extrabold bg-[#0B132B] hover:bg-slate-800 text-amber-400 border border-amber-400/30 shadow-md transition-all hover:scale-[1.02]"
                title="Open location directly in Google Maps"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Map with Direct Click Overlay */}
          <div className="relative w-full h-[380px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner group">
            <iframe
              title="VM SQUARE Office Location Map - Yashognana, Maragondanahalli, Bengaluru"
              src={COMPANY_INFO.address.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Top-Right Direct Google Maps Badge Link */}
            <div className="absolute top-3 right-3 pointer-events-auto">
              <a
                href={COMPANY_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md shadow-md text-xs font-extrabold text-[#0B132B] hover:text-amber-600 border border-slate-200 transition-all hover:scale-105"
                title="Redirect to Google Maps navigation"
              >
                <Navigation className="h-3.5 w-3.5 text-amber-500" />
                <span>Navigate on Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
