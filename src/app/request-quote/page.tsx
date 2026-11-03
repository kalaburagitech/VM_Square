"use client";

import { useState, useRef, type ChangeEvent, type FormEvent } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Mail,
  Building2,
  MapPin,
  Users,
  FileText,
  User,
  MessageSquare,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/company-info";
import {
  ENQUIRY_LIMITS as L,
  PHONE_ERROR,
  PHONE_INPUT_PATTERN,
  buildWhatsAppUrl,
  checkFormFields,
  isValidPhone,
} from "@/lib/enquiry-validation";

const labelClass = "text-sm font-bold text-[#0B1E33] flex items-center gap-1.5";
const inputClass =
  "w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-[#0B1E33] placeholder:text-slate-400 focus:border-vmgold focus:ring-2 focus:ring-vmgold/30 outline-none text-sm transition-all min-h-[48px]";

export default function RequestQuotePage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<{
    messageId?: string;
    recipient?: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [whatsappNotice, setWhatsappNotice] = useState<string | null>(null);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    location: "",
    personnelCount: "",
    message: "",
    honeypot: "",
  });

  function handleInputChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    e.target.setCustomValidity("");
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  }

  // Shared validation for both the Email and WhatsApp buttons
  function validateForm(): boolean {
    if (!formRef.current) return false;
    return checkFormFields(formRef.current, {
      name: formData.name.trim().length < L.name.min ? "Please enter your name (at least 2 characters)." : null,
      phone: isValidPhone(formData.phone) ? null : PHONE_ERROR,
      location: formData.location.trim().length < L.location.min ? "Please enter the facility location." : null,
    });
  }

  // Format WhatsApp message (encodeURIComponent keeps line breaks and symbols intact)
  function generateWhatsAppUrl(): string {
    const company = formData.company.trim();
    const details = formData.message.trim();

    return buildWhatsAppUrl(COMPANY_INFO.whatsapp.number, [
      "*VM SQUARE SECURITY - QUOTE REQUEST*",
      "",
      `*Name:* ${formData.name.trim()}`,
      ...(company ? [`*Company:* ${company}`] : []),
      `*Phone:* ${formData.phone.trim()}`,
      `*Email:* ${formData.email.trim()}`,
      `*Service Required:* ${formData.service}`,
      `*Facility Location:* ${formData.location.trim()}`,
      `*Guards Required:* ${formData.personnelCount}`,
      ...(details ? ["", "*Project Details:*", details] : []),
      "",
      "_Sent from vmsquaresecurity.com_",
    ]);
  }

  function handleSendWhatsApp() {
    if (!validateForm()) {
      return;
    }

    // Clear any earlier email error so it doesn't look like WhatsApp failed
    setErrorMessage(null);
    const url = generateWhatsAppUrl();
    setWhatsappUrl(url);

    window.open(url, "_blank", "noopener,noreferrer");

    setWhatsappNotice(
      "WhatsApp opened in a new tab with your prefilled quote request. Please tap Send inside WhatsApp to complete message delivery."
    );
  }

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
          type: "quote",
          name: formData.name.trim(),
          company: formData.company.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          service: formData.service,
          location: formData.location.trim(),
          personnelCount: formData.personnelCount,
          message: formData.message.trim(),
          honeypot: formData.honeypot,
        }),
      });

      const result = await res.json().catch(() => null);

      if (!res.ok || !result?.success) {
        // Honest error handling: Never claim success on failure
        // Preserve all form values so the user does not need to refill
        const errorText = result?.error || "We could not submit your quote request by email. Please try again or use WhatsApp.";
        setErrorMessage(errorText);
        return;
      }

      // Success confirmed by server
      setSubmitSuccess({
        messageId: result.messageId,
        recipient: result.recipient || COMPANY_INFO.email.address,
      });

      // Clear the form ONLY after verified success
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        service: "",
        location: "",
        personnelCount: "",
        message: "",
        honeypot: "",
      });
    } catch {
      setErrorMessage("Network connection error. Your entered details are preserved below. Please retry or contact us on WhatsApp.");
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
    <div className="min-h-screen bg-[#F6F8FB] pb-10">
      {/* Header Banner */}
      <section className="relative bg-gradient-to-b from-white to-[#F6F8FB] text-[#0B1E33] pt-28 pb-8 md:pt-32 md:pb-10 mb-8 overflow-hidden border-b border-slate-200">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-vmgold to-transparent" />
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vmgold/15 text-[#B88219] border border-vmgold/40 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="h-4 w-4" />
            <span>CUSTOMIZED SECURITY ESTIMATE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1E33]">
            REQUEST A FREE QUOTE
          </h1>
          <span className="mx-auto block h-1 w-16 rounded-full bg-vmgold" />
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Tell us about your facility and security requirements. Our operations team will provide a tailored quote within 24 hours.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="relative overflow-hidden bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-900/5 p-6 sm:p-8 md:p-10">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-vmgold to-transparent" />

          {/* Success Screen: Shown ONLY when server confirms message acceptance */}
          {submitSuccess ? (
            <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-8 text-center space-y-4 my-4">
              <CheckCircle2 className="h-14 w-14 text-emerald-600 mx-auto" />
              <h2 className="text-2xl font-extrabold text-emerald-950">
                Quote Request Dispatched Successfully!
              </h2>

              <div className="bg-white rounded-xl p-4 text-xs text-slate-700 max-w-md mx-auto space-y-1.5 border border-emerald-200 text-left">
                <p><strong>Official Recipient:</strong> {submitSuccess.recipient || COMPANY_INFO.email.address}</p>
                <p><strong>Status:</strong> Accepted by Google Workspace Mail Server</p>
                {submitSuccess.messageId && (
                  <p className="text-slate-500 break-all"><strong>Server Message ID:</strong> {submitSuccess.messageId}</p>
                )}
              </div>

              <p className="text-emerald-800 text-sm max-w-md mx-auto leading-relaxed">
                Thank you! Your quotation request was accepted by our Google Workspace mail server and routed to <strong>{COMPANY_INFO.email.address}</strong>. Our Regional Operations Manager will reach out to you within 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-3">
                <Button
                  onClick={handleReset}
                  className="bg-[#0B1E33] text-vmgold font-bold px-6 py-2.5 rounded-xl hover:bg-[#12314D] hover:text-vmgold border-0 shadow-md"
                >
                  Submit Another Request
                </Button>
              </div>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSendEmail} className="space-y-5">
              {/* Honeypot Spam Trap */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleInputChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Error Banner */}
              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 flex items-start gap-3 text-sm">
                  <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-bold">Email Quote Submission Failed</p>
                    <p className="text-xs text-red-700 leading-relaxed">{errorMessage}</p>
                    <p className="text-xs text-slate-700 font-medium pt-1">
                      Your entered details are preserved below. You can retry or choose the WhatsApp option to send your quotation request directly.
                    </p>
                  </div>
                </div>
              )}

              {/* WhatsApp Notice */}
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
                    <strong>Please Note:</strong> Clicking the button pre-fills the quote details on your screen. You must press the <strong>Send</strong> button inside WhatsApp to deliver it. On desktop, you may need to scan a QR code if not logged in; on mobile, WhatsApp opens in your app.
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

              <div className="pb-4 border-b border-slate-100">
                <h2 className="text-2xl font-extrabold text-[#0B1E33]">Facility &amp; Security Requirements</h2>
                <span className="mt-2 block h-[3px] w-10 rounded-full bg-vmgold" />
                <p className="text-slate-500 text-xs sm:text-sm mt-3">
                  Fields marked with <span className="text-red-500">*</span> are required.
                </p>
              </div>

              {/* 2 Column Grid Desktop, 1 Column Mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div className="space-y-2">
                  <label htmlFor="name" className={labelClass}>
                    <User className="h-4 w-4 text-vmgold" />
                    Full Name / Contact Person <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    minLength={L.name.min}
                    maxLength={L.name.max}
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className={inputClass}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className={labelClass}>
                    <Building2 className="h-4 w-4 text-vmgold" />
                    Company / Organization Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    maxLength={L.company.max}
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="e.g. Apex Tech Park Ltd"
                    className={inputClass}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className={labelClass}>
                    <PhoneCall className="h-4 w-4 text-vmgold" />
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    pattern={PHONE_INPUT_PATTERN}
                    maxLength={L.phone.max}
                    title={PHONE_ERROR}
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="10-digit mobile number"
                    className={inputClass}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className={labelClass}>
                    <Mail className="h-4 w-4 text-vmgold" />
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={L.email.max}
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    className={inputClass}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className={labelClass}>
                    <ShieldCheck className="h-4 w-4 text-vmgold" />
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className={inputClass}
                  >
                    <option value="">Select Service Required</option>
                    <option value="Manned Guarding">Manned Guarding</option>
                    <option value="Corporate Security">Corporate Security</option>
                    <option value="Industrial Security">Industrial Security</option>
                    <option value="Residential Security">Residential Township Security</option>
                    <option value="Event Security">Event &amp; Crowd Security</option>
                    <option value="Facility Management">Facility Management &amp; Housekeeping</option>
                    <option value="Electronic Security">Electronic CCTV &amp; Access Control</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="location" className={labelClass}>
                    <MapPin className="h-4 w-4 text-vmgold" />
                    Facility Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    required
                    minLength={L.location.min}
                    maxLength={L.location.max}
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="e.g. Whitefield, Bengaluru"
                    className={inputClass}
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="personnelCount" className={labelClass}>
                    <Users className="h-4 w-4 text-vmgold" />
                    Estimated Security Guards / Personnel Count <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="personnelCount"
                    name="personnelCount"
                    required
                    value={formData.personnelCount}
                    onChange={handleInputChange}
                    className={inputClass}
                  >
                    <option value="">Select Number of Personnel</option>
                    <option value="1-5 Guards">1 - 5 Guards</option>
                    <option value="6-15 Guards">6 - 15 Guards</option>
                    <option value="16-30 Guards">16 - 30 Guards</option>
                    <option value="30+ Guards / Full Battalion">30+ Guards / Integrated Battalion</option>
                  </select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="message" className={labelClass}>
                    <FileText className="h-4 w-4 text-vmgold" />
                    Additional Project Details / Site Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={L.quoteMessage.max}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Provide information regarding property size, shift timings, specific risk factors..."
                    className={inputClass}
                  />
                </div>

              </div>

              {/* Dual Action Buttons */}
              <div className="pt-2 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Select Submission Channel:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={handleSendEmail}
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 bg-[#0B1E33] hover:bg-[#12314D] text-vmgold font-extrabold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 min-h-[52px] cursor-pointer disabled:opacity-60 text-sm"
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

                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 min-h-[52px] cursor-pointer disabled:opacity-60 text-sm hover:scale-[1.01]"
                  >
                    <MessageSquare className="h-5 w-5 fill-white" />
                    <span>SEND VIA WHATSAPP</span>
                  </button>
                </div>

                <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-500 pt-1 gap-2">
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
  );
}