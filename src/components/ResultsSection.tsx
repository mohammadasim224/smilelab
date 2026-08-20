import { ArrowUpRight } from "lucide-react";
import { SectionLabel, SectionHeading } from "./ui";

const STATS = [
  { value: "98%", label: "Patient loyalty rate" },
  { value: "15k+", label: "Smiles restored" },
  { value: "12", label: "Years of excellence" },
  { value: "4.9", label: "Average rating" },
];

const CASES = [
  { title: "Veneer transformation", tag: "Cosmetic", img: "https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { title: "Invisalign journey", tag: "Alignment", img: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { title: "Whitening refresh", tag: "Whitening", img: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=600" },
];

export function ResultsSection() {
  return (
    <section id="results" className="scroll-mt-8 bg-[#F4F8FC] px-6 py-20 md:px-8 md:py-28 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Results</SectionLabel>
            <SectionHeading>Real smiles. Measurable confidence.</SectionHeading>
          </div>
          <p className="max-w-sm text-lg leading-relaxed text-neutral-500">Every treatment plan is personal. Here is what our patients achieve with us.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-[24px] bg-white px-6 py-8 text-center shadow-sm">
              <div className="text-3xl font-bold tracking-tight text-[#3D8CD5] md:text-4xl lg:text-5xl">{s.value}</div>
              <div className="mt-2 text-sm font-medium text-neutral-500 md:text-base">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {CASES.map((c) => (
            <article key={c.title} className="group overflow-hidden rounded-[28px] bg-white shadow-sm">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={c.img} alt={c.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-[#3D8CD5]">{c.tag}</span>
              </div>
              <div className="flex items-center justify-between px-6 py-5">
                <h3 className="text-lg font-medium tracking-tight text-neutral-900">{c.title}</h3>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EBFA73] transition group-hover:scale-110">
                  <ArrowUpRight className="h-4 w-4 text-[#5F9AD1]" strokeWidth={2.5} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
