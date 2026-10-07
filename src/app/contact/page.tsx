"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
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
                      href="tel:+919880012345"
                      className="text-amber-600 font-bold text-base hover:underline block min-h-[38px] flex items-center"
                    >
                      +91 98800 12345
                    </a>
                    <span className="text-xs text-slate-500">24/7 Command Control Desk</span>
                  </div>
                </div>

                {/* Clickable Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-400/10 text-amber-600 rounded-xl shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#0B132B]">Email Address</h3>
                    <a
                      href="mailto:contact@vmsquare.in"
                      className="text-amber-600 font-bold text-base hover:underline block min-h-[38px] flex items-center"
                    >
                      contact@vmsquare.in
                    </a>
                    <span className="text-xs text-slate-500">For proposals & official correspondence</span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-400/10 text-amber-600 rounded-xl shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#0B132B]">Head Office Location</h3>
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      VM SQUARE Security & Manpower Services Pvt. Ltd.<br />
                      #45, Commercial Complex, MG Road,<br />
                      Bengaluru, Karnataka - 560001
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-400/10 text-amber-600 rounded-xl shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#0B132B]">Operating Hours</h3>
                    <p className="text-xs text-slate-600">
                      <strong className="text-slate-800">Security Command:</strong> 24 Hours / 7 Days a Week<br />
                      <strong className="text-slate-800">Administrative Office:</strong> Mon - Sat (9:00 AM - 7:00 PM)
                    </p>
                  </div>
                </div>
              </div>

              {/* Touch-Friendly WhatsApp CTA */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href="https://wa.me/919880012345?text=Hello%20VM%20SQUARE,%20I%20would%20like%20to%20inquire%20about%20security%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2.5 min-h-[48px] text-sm"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Chat With Us On WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 md:p-10 shadow-lg">
              <h2 className="text-2xl font-extrabold text-[#0B132B] mb-2">Send Us A Message</h2>
              <p className="text-slate-500 text-sm mb-6">Have a question or operational request? Fill out the form below.</p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-3">
                  <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto" />
                  <h3 className="text-xl font-bold text-emerald-950">Message Sent Successfully!</h3>
                  <p className="text-emerald-800 text-sm">
                    Thank you for contacting VM SQUARE. Our representative will respond within 2 hours.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 bg-[#0B132B] text-amber-400 font-bold px-6 py-2 rounded-xl"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
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
                        placeholder="10-digit mobile"
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
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0B132B] outline-none text-sm bg-white transition-all min-h-[48px]"
                    >
                      <option value="General Inquiry">General Security Inquiry</option>
                      <option value="Guard Replacement">Guard Replacement & Audits</option>
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
                      placeholder="Describe your inquiry or requirement..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0B132B] outline-none text-sm transition-all"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-base font-extrabold bg-[#0B132B] hover:bg-slate-800 text-amber-400 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 min-h-[50px]"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>SEND MESSAGE</span>
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Location Map Section */}
        <div className="mt-14 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="h-6 w-6 text-amber-500" />
            <h2 className="text-xl font-bold text-[#0B132B]">Regional Office Location Map</h2>
          </div>
          <div className="relative w-full h-[320px] rounded-xl overflow-hidden border bg-slate-100">
            <iframe
              title="VM SQUARE Office Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.986877843485!2d77.6015!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9010347%3A0x8920150965e638d2!2sMG%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
