import { ChevronDown } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

// Native <details> accordion: no client JavaScript, and answers stay in the HTML for crawlers
export function FaqSection({
  faqs,
  heading = "Frequently Asked Questions",
  eyebrow = "Common Questions",
  className = "bg-white",
}: {
  faqs: FaqItem[];
  heading?: string;
  eyebrow?: string;
  className?: string;
}) {
  return (
    <section className={`py-10 md:py-12 border-t border-slate-200 ${className}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-6 space-y-2">
          <p className="text-xs font-bold uppercase tracking-wider text-[#B88219]">{eyebrow}</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B1E33]">{heading}</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-white shadow-sm open:border-vmgold open:shadow-md transition-colors"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 sm:p-5 [&::-webkit-details-marker]:hidden">
                <h3 className="text-sm sm:text-base font-bold text-[#0B1E33]">{faq.question}</h3>
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-vmgold transition-transform duration-300 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-4 pb-4 sm:px-5 sm:pb-5 -mt-1 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
