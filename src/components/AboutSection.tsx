import { Sparkles, Shield, Heart } from "lucide-react";
import { SectionLabel, SectionHeading, LimeCta } from "./ui";

const VALUES = [
  { icon: Sparkles, title: "Precision care", body: "Digital scans, 3D planning, and gentle techniques for results that look natural." },
  { icon: Shield, title: "Safe & calm", body: "A quiet, modern clinic designed to put anxious patients completely at ease." },
  { icon: Heart, title: "Lifelong smiles", body: "Preventive plans and honest advice so your smile stays healthy for decades." },
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-8 bg-white px-6 py-20 md:px-8 md:py-28 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-end">
          <div>
            <SectionLabel>About SmileLab</SectionLabel>
            <SectionHeading>A modern clinic built around comfort and confidence</SectionHeading>
          </div>
          <p className="max-w-lg text-lg leading-relaxed text-neutral-500 lg:pb-2">
            SmileLab brings together board-certified dentists, advanced imaging, and a warm team that treats every visit like a conversation — not a procedure.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v) => (
            <article key={v.title} className="rounded-[28px] bg-[#F4F8FC] p-7 transition hover:bg-[#EBF3FA]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#5F9AD1] text-white">
                <v.icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="mt-5 text-xl font-medium tracking-tight text-neutral-900">{v.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-neutral-500">{v.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-16 overflow-hidden rounded-[32px] bg-[#5F9AD1]">
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-center px-8 py-12 md:px-12 lg:py-16">
              <p className="text-sm font-medium uppercase tracking-wider text-white/60">Our approach</p>
              <h3 className="mt-3 text-3xl font-normal leading-tight tracking-tight text-white md:text-4xl">Technology that listens to your smile</h3>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-white/70">Intraoral scanners, AI-assisted diagnostics, and same-day cosmetic refinements.</p>
              <div className="mt-8"><LimeCta href="#contacts">Book a consultation</LimeCta></div>
            </div>
            <div className="relative min-h-[280px] lg:min-h-full">
              <img src="https://images.pexels.com/photos/3779703/pexels-photo-3779703.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Dentist consulting with a patient" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5F9AD1]/40 to-transparent lg:bg-gradient-to-l" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
