import { CareerApplicationForm } from "@/components/forms/CareerApplicationForm";
import { ShieldCheck, Users, GraduationCap, Award, Briefcase, ChevronRight, CheckCircle2, ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Careers | VM SQUARE Security & Manpower Services",
  description: "Build your career with VM SQUARE Security & Manpower Services Private Limited. Explore job openings for Security Guards, Officers, Supervisors, Field Officers, and Facility Staff.",
};

const availablePositions = [
  {
    title: "Security Guard",
    category: "Manned Guarding",
    experience: "0 - 3 Years",
    location: "Bengaluru & Karnataka",
    description: "Responsible for access control, perimeter patrols, visitor verification, and maintaining safety protocols across corporate, commercial, and residential facilities.",
    requirements: ["Minimum 10th Standard Pass", "Good physical fitness and disciplined demeanor", "Basic communication skills", "Prior security experience preferred"],
  },
  {
    title: "Security Officer",
    category: "Security Management",
    experience: "2 - 5 Years",
    location: "Bengaluru & Industrial Hubs",
    description: "Leads shift operations, oversees security personnel, handles emergency responses, and ensures strict compliance with client security guidelines.",
    requirements: ["12th Pass / Graduate", "Ex-servicemen or experienced security officer background", "Strong leadership skills", "Knowledge of emergency management"],
  },
  {
    title: "Supervisor",
    category: "Operations Supervision",
    experience: "3 - 6 Years",
    location: "Multiple Locations",
    description: "Supervises deployment of guards and site personnel, conducts daily briefings, manages attendance logs, and audits site security compliance.",
    requirements: ["Higher Secondary / Diploma / Graduate", "Demonstrated team management experience", "Valid 2-wheeler driving license", "Excellent problem-solving ability"],
  },
  {
    title: "Field Officer",
    category: "Field Operations",
    experience: "3 - 7 Years",
    location: "Regional Branches",
    description: "Conducts regular site inspections, coordinates night patrols, manages client feedback, and maintains high standards of discipline among staff.",
    requirements: ["Graduate or Ex-military background", "Strong operational background", "Own vehicle for field visits", "Proficient reporting skills"],
  },
  {
    title: "Facility Staff",
    category: "Facility Support",
    experience: "0 - 4 Years",
    location: "Corporate & Commercial Complexes",
    description: "Provides essential maintenance, pantry management, equipment assistance, and front-desk administrative operational support.",
    requirements: ["10th / 12th Pass", "Reliable and customer-oriented attitude", "Punctual and detail-oriented", "Pantry/office assistance experience preferred"],
  },
  {
    title: "Housekeeping Staff",
    category: "Property Management",
    experience: "0 - 3 Years",
    location: "Commercial & Residential Hubs",
    description: "Maintains cleanliness, hygiene standards, sanitation protocols, and waste management across commercial buildings, IT parks, and residential layouts.",
    requirements: ["Basic Literacy", "Knowledge of cleaning equipment and sanitation chemicals", "Disciplined work ethic", "Physical endurance"],
  },
];

const whyJoinUs = [
  {
    icon: ShieldCheck,
    title: "Professional Working Environment",
    description: "Work in a structured, compliant, and supportive environment backed by ISO certification and clear operating standards.",
  },
  {
    icon: GraduationCap,
    title: "Training & Development",
    description: "Comprehensive initial and ongoing training modules in security protocols, emergency management, fire safety, and soft skills.",
  },
  {
    icon: Award,
    title: "Career Opportunities",
    description: "Clear merit-based career progression paths from Guard to Supervisor, Field Officer, and Operations Management.",
  },
  {
    icon: Users,
    title: "Team-Oriented Workplace",
    description: "Join a disciplined force of dedicated professionals where safety, integrity, respect, and team camaraderie are prioritized.",
  },
];

const recruitmentSteps = [
  { step: "01", title: "Application Submission", desc: "Submit your online application along with your resume and details." },
  { step: "02", title: "Screening & Verification", desc: "Our HR team reviews your qualifications, experience, and background." },
  { step: "03", title: "Interview & Physical Fitness", desc: "Shortlisted candidates undergo personal interview and basic physical fitness check." },
  { step: "04", title: "Training & Onboarding", desc: "Selected candidates complete orientation training and are deployed to premier client sites." },
];

const faqs = [
  {
    q: "What qualifications are needed to apply for a Security Guard position?",
    a: "Candidates should have completed at least 10th standard, possess good physical fitness, be disciplined, and have verified identity documents."
  },
  {
    q: "Does VM SQUARE provide uniforms and training?",
    a: "Yes. All selected personnel receive comprehensive orientation, physical security training, and company-issued uniforms prior to deployment."
  },
  {
    q: "Are there opportunities for advancement?",
    a: "Absolutely. We encourage internal promotion based on performance, discipline, leadership, and site audit reviews."
  },
];

export default function CareersPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-vmdark text-white py-20 lg:py-28 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-vmdark via-vmdark/90 to-vmdark/70"></div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vmgold/20 text-vmgold border border-vmgold/30 text-xs md:text-sm font-semibold">
              <Briefcase className="h-4 w-4" />
              <span>CAREERS AT VM SQUARE</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              BUILD YOUR CAREER <br />
              <span className="text-vmgold">WITH VM SQUARE</span>
            </h1>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl">
              Join VM SQUARE SECURITY & MANPOWER SERVICES PRIVATE LIMITED — a leading security & facility management force. We offer structured training, competitive compensation, and steady career growth.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Button render={<Link href="#openings" />} size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                View Openings <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button render={<Link href="#apply-form" />} size="lg" variant="outline" className="border-gray-500 text-foreground hover:bg-white hover:text-vmdark">
                Apply Directly
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction & True Value Claims */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-bold text-vmdark">Why Work With Us?</h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              At VM SQUARE, our strength lies in our personnel. We are committed to providing a professional, safe, and disciplined work environment where every employee is valued, trained, and given equal opportunity to excel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {whyJoinUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-md transition-all">
                  <div className="bg-primary/10 p-3 rounded-lg w-fit text-primary mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg text-vmdark mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Available Positions */}
      <section id="openings" className="py-20 container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Join Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-vmdark mt-1">Available Positions</h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-md mt-2 md:mt-0">
            Select a position below to view requirements and apply directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {availablePositions.map((pos) => (
            <div key={pos.title} className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-primary/10 text-primary rounded-full">
                    {pos.category}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">{pos.experience}</span>
                </div>

                <h3 className="text-xl font-bold text-vmdark group-hover:text-primary transition-colors">
                  {pos.title}
                </h3>
                
                <p className="text-xs text-primary font-medium mt-1 mb-4 flex items-center gap-1">
                  <span>📍 {pos.location}</span>
                </p>

                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {pos.description}
                </p>

                <div className="border-t pt-3 mb-6">
                  <span className="text-xs font-semibold text-vmdark uppercase tracking-wider block mb-2">Requirements:</span>
                  <ul className="space-y-1.5">
                    {pos.requirements.map((req, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2 border-t">
                <a
                  href="#apply-form"
                  className="w-full py-2.5 px-4 rounded-lg bg-slate-100 hover:bg-primary hover:text-white text-vmdark font-semibold text-xs flex items-center justify-between transition-colors"
                >
                  <span>View Details & Apply</span>
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="py-16 bg-vmdark text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-vmgold font-bold text-xs uppercase tracking-wider">Hiring Process</span>
            <h2 className="text-3xl font-bold mt-2">How We Recruit</h2>
            <p className="text-gray-400 text-sm mt-2">A transparent 4-step recruitment path designed to onboard dedicated talent.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recruitmentSteps.map((step) => (
              <div key={step.step} className="bg-white/5 border border-white/10 rounded-xl p-6 relative">
                <span className="text-4xl font-extrabold text-vmgold/30 absolute top-4 right-4">{step.step}</span>
                <h3 className="font-bold text-lg text-white mb-2">{step.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <CareerApplicationForm positions={availablePositions.map((p) => p.title)} />
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white border-t">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-vmdark flex items-center justify-center gap-2">
              <HelpCircle className="h-6 w-6 text-primary" />
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 border rounded-xl p-6">
                <h3 className="font-bold text-base text-vmdark mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
