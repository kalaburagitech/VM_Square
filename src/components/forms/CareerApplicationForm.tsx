"use client";

import { useState } from "react";
import { submitCareerApplication } from "@/app/actions/forms";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle, Upload, User, Phone, Mail, MapPin, Briefcase, GraduationCap, Clock, FileText, Image as ImageIcon, Send } from "lucide-react";

interface CareerApplicationFormProps {
  initialPosition?: string;
  positions: string[];
}

export function CareerApplicationForm({ initialPosition = "", positions }: CareerApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState<{
    success?: boolean;
    message?: string;
    errors?: Record<string, string[]>;
  }>({});
  const [selectedPosition, setSelectedPosition] = useState(initialPosition);
  const [resumeName, setResumeName] = useState("");
  const [photoName, setPhotoName] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setFormState({});

    const formData = new FormData(event.currentTarget);
    const result = await submitCareerApplication(null, formData);
    setIsSubmitting(false);

    if (result) {
      setFormState(result);
      if (result.success) {
        (event.target as HTMLFormElement).reset();
        setResumeName("");
        setPhotoName("");
      }
    }
  }

  return (
    <div id="apply-form" className="bg-white rounded-2xl shadow-xl border p-6 md:p-10">
      <div className="mb-8 text-center max-w-xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-vmdark">Apply Now</h3>
        <p className="text-muted-foreground mt-2 text-sm md:text-base">
          Fill in your details below and upload your resume to join the VM SQUARE team.
        </p>
      </div>

      {formState.success ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-3">
          <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto" />
          <h4 className="text-xl font-bold text-emerald-900">Application Submitted!</h4>
          <p className="text-emerald-700 text-sm">{formState.message}</p>
          <Button
            type="button"
            onClick={() => setFormState({})}
            variant="outline"
            className="mt-4 border-emerald-600 text-emerald-700 hover:bg-emerald-100"
          >
            Submit Another Application
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {formState.message && !formState.success && (
            <div className="bg-destructive/10 border border-destructive/20 text-destructive rounded-lg p-4 flex items-center gap-3 text-sm">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <span>{formState.message}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
                <User className="h-4 w-4 text-primary" />
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm transition-all"
              />
              {formState.errors?.name && (
                <p className="text-xs text-red-500">{formState.errors.name[0]}</p>
              )}
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <label htmlFor="mobile" className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
                <Phone className="h-4 w-4 text-primary" />
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                required
                placeholder="Enter 10-digit mobile number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm transition-all"
              />
              {formState.errors?.mobile && (
                <p className="text-xs text-red-500">{formState.errors.mobile[0]}</p>
              )}
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
                <Mail className="h-4 w-4 text-primary" />
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm transition-all"
              />
              {formState.errors?.email && (
                <p className="text-xs text-red-500">{formState.errors.email[0]}</p>
              )}
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label htmlFor="location" className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-primary" />
                Current Location <span className="text-red-500">*</span>
              </label>
              <input
                id="location"
                name="location"
                type="text"
                required
                placeholder="e.g. Bengaluru, Karnataka"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm transition-all"
              />
              {formState.errors?.location && (
                <p className="text-xs text-red-500">{formState.errors.location[0]}</p>
              )}
            </div>

            {/* Position */}
            <div className="space-y-2">
              <label htmlFor="position" className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
                <Briefcase className="h-4 w-4 text-primary" />
                Position Applied For <span className="text-red-500">*</span>
              </label>
              <select
                id="position"
                name="position"
                required
                value={selectedPosition}
                onChange={(e) => setSelectedPosition(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm bg-white transition-all"
              >
                <option value="">Select a Position</option>
                {positions.map((pos) => (
                  <option key={pos} value={pos}>
                    {pos}
                  </option>
                ))}
              </select>
              {formState.errors?.position && (
                <p className="text-xs text-red-500">{formState.errors.position[0]}</p>
              )}
            </div>

            {/* Qualification */}
            <div className="space-y-2">
              <label htmlFor="qualification" className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
                <GraduationCap className="h-4 w-4 text-primary" />
                Qualification <span className="text-red-500">*</span>
              </label>
              <input
                id="qualification"
                name="qualification"
                type="text"
                required
                placeholder="e.g. 10th Pass / 12th Pass / Graduate"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm transition-all"
              />
              {formState.errors?.qualification && (
                <p className="text-xs text-red-500">{formState.errors.qualification[0]}</p>
              )}
            </div>

            {/* Experience */}
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="experience" className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-primary" />
                Total Experience <span className="text-red-500">*</span>
              </label>
              <select
                id="experience"
                name="experience"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm bg-white transition-all"
              >
                <option value="">Select Experience Level</option>
                <option value="Fresher">Fresher (0 Years)</option>
                <option value="1-2 Years">1 - 2 Years</option>
                <option value="3-5 Years">3 - 5 Years</option>
                <option value="5+ Years">5+ Years</option>
              </select>
              {formState.errors?.experience && (
                <p className="text-xs text-red-500">{formState.errors.experience[0]}</p>
              )}
            </div>

            {/* Resume Upload */}
            <div className="space-y-2">
              <label htmlFor="resume" className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
                <FileText className="h-4 w-4 text-primary" />
                Upload Resume <span className="text-red-500">*</span>
              </label>
              <div className="relative border-2 border-dashed border-gray-300 hover:border-primary rounded-lg p-4 text-center cursor-pointer transition-colors bg-gray-50/50">
                <input
                  id="resume"
                  name="resume"
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setResumeName(e.target.files?.[0]?.name || "")}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex flex-col items-center justify-center gap-1">
                  <Upload className="h-6 w-6 text-gray-400" />
                  <span className="text-xs text-gray-600 font-medium truncate max-w-[200px]">
                    {resumeName || "Click to upload Resume (PDF, DOC, max 5MB)"}
                  </span>
                </div>
              </div>
            </div>

            {/* Photo Upload */}
            <div className="space-y-2">
              <label htmlFor="photo" className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
                <ImageIcon className="h-4 w-4 text-primary" />
                Passport Photo (Optional)
              </label>
              <div className="relative border-2 border-dashed border-gray-300 hover:border-primary rounded-lg p-4 text-center cursor-pointer transition-colors bg-gray-50/50">
                <input
                  id="photo"
                  name="photo"
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={(e) => setPhotoName(e.target.files?.[0]?.name || "")}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex flex-col items-center justify-center gap-1">
                  <Upload className="h-6 w-6 text-gray-400" />
                  <span className="text-xs text-gray-600 font-medium truncate max-w-[200px]">
                    {photoName || "Click to upload Photo (JPG, PNG, max 5MB)"}
                  </span>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="message" className="text-sm font-semibold text-gray-700">
                Additional Message / Notes (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Mention any specific skills, previous companies, or preferred work shifts..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm transition-all"
              />
            </div>
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-6 text-base font-bold bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>Submitting Application...</>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Submit Application
                </>
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
