import { Check } from "lucide-react";
import { SectionLabel, SectionHeading, LimeCta, BlueCta } from "./ui";

const PLANS = [
  { name: "Essential", price: "$89", period: "/visit", desc: "Everyday care to keep your smile healthy.", features: ["Full exam & cleaning", "Digital X-rays", "Oral health report", "Hygiene coaching"], featured: false },
  { name: "Smile Design", price: "$1,290", period: " starting", desc: "Cosmetic plans tailored to your face and goals.", features: ["3D smile preview", "Whitening or aligners", "Personal treatment plan", "Priority scheduling", "12-month follow-ups"], featured: true },
  { name: "Family Care", price: "$249", period: "/mo", desc: "Unlimited peace of mind for the whole household.", features: ["Up to 4 family members", "2 cleanings each / year", "Emergency visits", "Kids checkups included"], featured: false },
];

export function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-8 bg-white px-6 py-20 md:px-8 md:py-28 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Pricing</SectionLabel>
          <SectionHeading>Clear pricing. No surprise invoices.</SectionHeading>
          <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-neutral-500">Transparent packages for preventive care, cosmetics, and families.</p>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article key={plan.name} className={`relative flex flex-col rounded-[32px] p-8 ${plan.featured ? "bg-[#5F9AD1] text-white shadow-xl shadow-[#5F9AD1]/30 lg:-translate-y-3" : "bg-[#F4F8FC] text-neutral-900"}`}>
              {plan.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#EBFA73] px-4 py-1 text-xs font-semibold text-[#3D8CD5]">Most popular</span>}
              <h3 className={`text-xl font-medium tracking-tight ${plan.featured ? "text-white" : "text-neutral-900"}`}>{plan.name}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${plan.featured ? "text-white/70" : "text-neutral-500"}`}>{plan.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-normal tracking-tight">{plan.price}</span>
                <span className={`text-sm ${plan.featured ? "text-white/60" : "text-neutral-400"}`}>{plan.period}</span>
              </div>
              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[15px]">
                    <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${plan.featured ? "bg-white/20" : "bg-[#5F9AD1]/15"}`}>
                      <Check className={`h-3 w-3 ${plan.featured ? "text-white" : "text-[#3D8CD5]"}`} strokeWidth={3} />
                    </span>
                    <span className={plan.featured ? "text-white/90" : "text-neutral-600"}>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                {plan.featured ? <LimeCta href="#contacts" className="w-full justify-center">Get started</LimeCta> : <BlueCta href="#contacts" className="w-full justify-center">Choose plan</BlueCta>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
