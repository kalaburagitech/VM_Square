"use client";

import React, { useState } from "react";
import { ShieldCheck, CheckCircle2, Send, PhoneCall, Mail, Building2, MapPin, Users, FileText, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RequestQuotePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      {/* Header Banner */}
      <section className="bg-[#0B132B] text-white py-16 mb-12 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-400 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="h-4 w-4" />
            <span>CUSTOMIZED SECURITY ESTIMATE</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">REQUEST A FREE QUOTE</h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
            Tell us about your facility and security requirements. Our operations team will provide a tailored quote within 24 hours.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-10 md:p-12">
          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4 my-8">
              <CheckCircle2 className="h-14 w-14 text-emerald-600 mx-auto" />
              <h2 className="text-2xl font-extrabold text-emerald-950">Quote Request Received!</h2>
              <p className="text-emerald-800 text-sm max-w-md mx-auto">
                Thank you for reaching out to VM SQUARE. Our Regional Operations Manager will contact you shortly with your customized proposal.
              </p>
              <Button
                onClick={() => setSubmitted(false)}
                className="mt-4 bg-[#0B132B] text-amber-400 font-bold px-6 py-2.5 rounded-xl hover:bg-slate-800"
              >
                Submit Another Request
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-slate-100 pb-4 mb-6">
                <h2 className="text-2xl font-extrabold text-[#0B132B]">Facility & Security Requirements</h2>
                <p className="text-slate-500 text-xs sm:text-sm">Fields marked with <span className="text-red-500">*</span> are required.</p>
              </div>

              {/* 2 Column Grid Desktop, 1 Column Mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* 1. Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                    <User className="h-4 w-4 text-amber-500" />
                    Full Name / Contact Person <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0B132B] focus:border-[#0B132B] outline-none text-sm transition-all min-h-[48px]"
                  />
                </div>

                {/* 2. Company */}
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                    <Building2 className="h-4 w-4 text-amber-500" />
                    Company / Organization Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    placeholder="e.g. Apex Tech Park Ltd"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0B132B] focus:border-[#0B132B] outline-none text-sm transition-all min-h-[48px]"
                  />
                </div>

                {/* 3. Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                    <PhoneCall className="h-4 w-4 text-amber-500" />
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0B132B] focus:border-[#0B132B] outline-none text-sm transition-all min-h-[48px]"
                  />
                </div>

                {/* 4. Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                    <Mail className="h-4 w-4 text-amber-500" />
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0B132B] focus:border-[#0B132B] outline-none text-sm transition-all min-h-[48px]"
                  />
                </div>

                {/* 5. Service */}
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-amber-500" />
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0B132B] focus:border-[#0B132B] outline-none text-sm bg-white transition-all min-h-[48px]"
                  >
                    <option value="">Select Service Required</option>
                    <option value="Manned Guarding">Manned Guarding</option>
                    <option value="Corporate Security">Corporate Security</option>
                    <option value="Industrial Security">Industrial Security</option>
                    <option value="Residential Security">Residential Township Security</option>
                    <option value="Event Security">Event & Crowd Security</option>
                    <option value="Facility Management">Facility Management & Housekeeping</option>
                    <option value="Electronic Security">Electronic CCTV & Access Control</option>
                  </select>
                </div>

                {/* 6. Location */}
                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-amber-500" />
                    Facility Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    required
                    placeholder="e.g. Whitefield, Bengaluru"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0B132B] focus:border-[#0B132B] outline-none text-sm transition-all min-h-[48px]"
                  />
                </div>

                {/* 7. Number of Security Personnel */}
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="personnelCount" className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-amber-500" />
                    Estimated Security Guards / Personnel Count <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="personnelCount"
                    name="personnelCount"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0B132B] focus:border-[#0B132B] outline-none text-sm bg-white transition-all min-h-[48px]"
                  >
                    <option value="">Select Number of Personnel</option>
                    <option value="1-5 Guards">1 - 5 Guards</option>
                    <option value="6-15 Guards">6 - 15 Guards</option>
                    <option value="16-30 Guards">16 - 30 Guards</option>
                    <option value="30+ Guards / Full Battalion">30+ Guards / Integrated Battalion</option>
                  </select>
                </div>

                {/* 8. Message */}
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="message" className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                    <FileText className="h-4 w-4 text-amber-500" />
                    Additional Project Details / Site Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Provide information regarding property size, shift timings, specific risk factors..."
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0B132B] focus:border-[#0B132B] outline-none text-sm transition-all"
                  />
                </div>

              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-base font-extrabold bg-[#0B132B] hover:bg-slate-800 text-amber-400 rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 min-h-[52px]"
                >
                  {isSubmitting ? (
                    <span>Calculating Security Estimate...</span>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>SUBMIT QUOTE REQUEST</span>
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
