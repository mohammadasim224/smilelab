import { Star, Quote } from "lucide-react";
import { SectionHeading } from "./ui";

const REVIEWS = [
  { name: "Maya R.", role: "Veneers patient", text: "I walked in nervous and left with a smile I finally love. The team explained every step — and the results look completely natural.", avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200", rating: 5 },
  { name: "James K.", role: "Invisalign", text: "Clear aligners with a digital preview of the end result. Appointment times were always respected. Worth every dollar.", avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200", rating: 5 },
  { name: "Sofia L.", role: "Family plan", text: "Our kids actually ask when the next visit is. The clinic feels bright, modern, and never rushed. SmileLab is our dental home.", avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200", rating: 5 },
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="scroll-mt-8 bg-[#5F9AD1] px-6 py-20 md:px-8 md:py-28 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-[#EBFA73]" />
              Reviews
            </span>
            <SectionHeading light>Loved by thousands of loyal patients</SectionHeading>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-white">
            <div className="flex">{Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-5 w-5 fill-[#EBFA73] text-[#EBFA73]" />))}</div>
            <span className="text-lg font-medium">4.9 / 5</span>
            <span className="text-white/60">from 2,140 reviews</span>
          </div>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <article key={r.name} className="flex flex-col rounded-[28px] bg-white p-7 shadow-lg shadow-[#3D8CD5]/20">
              <Quote className="h-8 w-8 text-[#5F9AD1]/40" />
              <p className="mt-4 flex-1 text-base leading-relaxed text-neutral-600">&ldquo;{r.text}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3 border-t border-neutral-100 pt-5">
                <img src={r.avatar} alt="" className="h-11 w-11 rounded-full object-cover ring-2 ring-[#5F9AD1]/30" />
                <div>
                  <div className="font-medium text-neutral-900">{r.name}</div>
                  <div className="text-sm text-neutral-400">{r.role}</div>
                </div>
                <div className="ml-auto flex shrink-0">{Array.from({ length: r.rating }).map((_, i) => (<Star key={i} className="h-3.5 w-3.5 fill-[#EBFA73] text-[#EBFA73]" />))}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
