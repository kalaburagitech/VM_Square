import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Briefcase, UserCheck, Shield, CheckCircle2, ArrowRight, Star } from "lucide-react";

const careerPositions = [
  {
    id: "c1",
    title: "Security Guard Officer",
    type: "Full Time / Shift Duty",
    location: "Bengaluru / Kalaburagi",
    qualification: "SSLC / 10th Pass minimum",
    perks: ["EPF & ESI Covered", "On-Time Salary", "Free Uniform Set", "Accommodation Provided"],
    badge: "Immediate Hiring",
  },
  {
    id: "c2",
    title: "Field Security Supervisor",
    type: "Day / Night Shift",
    location: "Karnataka Multi-site",
    qualification: "12th Pass / Ex-Servicemen Preferred",
    perks: ["Competitive Salary", "Travel Allowance", "Insurance Benefits", "Career Promotion"],
    badge: "Urgent Requirement",
  },
  {
    id: "c3",
    title: "CCTV Command Operator",
    type: "Command Center 24/7",
    location: "Bengaluru HQ",
    qualification: "Basic Computer & Surveillance Knowledge",
    perks: ["Indoor AC Command", "Skill Training", "PF & Medical Cover", "Performance Bonus"],
    badge: "High Growth",
  },
  {
    id: "c4",
    title: "Female Security Officer",
    type: "Corporate & School Sites",
    location: "Metro Cities",
    qualification: "10th / 12th Pass",
    perks: ["Safe Work Environment", "Day Shift Option", "EPF & ESI Covered", "Regular Audits"],
    badge: "Specialized Role",
  },
];

export function CareersPreview() {
  return (
    <section className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-900 border border-blue-200 text-xs font-bold uppercase tracking-wider">
              <Briefcase className="h-4 w-4 text-blue-700" />
              <span>Join Our Security Force</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              CAREER OPPORTUNITIES <span className="text-amber-600">& RECRUITMENT</span>
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              VM SQUARE provides honorable employment with verified salaries, full medical/PF benefits, and career advancement for dedicated security personnel across Karnataka.
            </p>
          </div>

          <Button
            render={<Link href="/careers" />}
            size="lg"
            className="bg-slate-900 hover:bg-slate-800 text-white font-extrabold shadow-md shrink-0 self-start md:self-auto"
          >
            VIEW ALL POSITIONS & APPLY <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Career Position Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {careerPositions.map((pos) => (
            <div
              key={pos.id}
              className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-amber-400 group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-bold px-3 py-1 bg-amber-100 text-amber-900 rounded-full border border-amber-300">
                    {pos.badge}
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    📍 {pos.location}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors mb-2">
                  {pos.title}
                </h3>

                <p className="text-sm font-semibold text-slate-600 mb-4 flex items-center gap-2">
                  <UserCheck className="h-4 w-4 text-blue-600" />
                  Eligibility: <span className="text-slate-900">{pos.qualification}</span>
                </p>

                {/* Benefits / Perks Checklist */}
                <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-slate-100 mb-6">
                  {pos.perks.map((perk, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Button
                  render={<Link href="/careers" />}
                  className="w-full bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold transition-all shadow"
                >
                  Apply For This Position <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Recruitment Banner Box */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-[#0B132B] rounded-2xl p-8 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl border border-amber-500/30">
          <div className="space-y-2 text-center lg:text-left">
            <h4 className="text-2xl font-bold flex items-center justify-center lg:justify-start gap-2">
              <Star className="h-6 w-6 text-amber-400 fill-amber-400" />
              <span>Are You an Ex-Serviceman or Experienced Guard?</span>
            </h4>
            <p className="text-slate-300 text-sm max-w-xl">
              We offer priority hiring and supervisor fast-track paths for retired defense personnel, police veterans, and experienced field officers.
            </p>
          </div>
          <Button
            render={<Link href="/careers" />}
            size="lg"
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-8 shrink-0 shadow-lg"
          >
            Submit Resume Directly
          </Button>
        </div>
      </div>
    </section>
  );
}
