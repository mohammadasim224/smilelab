import { ArrowUpRight } from "lucide-react";
import { SectionLabel, SectionHeading } from "./ui";

const POSTS = [
  { title: "How digital veneers work in 2026", excerpt: "From scan to smile in fewer visits — a walkthrough of modern cosmetic dentistry.", date: "Aug 2, 2026", read: "5 min", img: "https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=700", tag: "Technology" },
  { title: "5 habits that keep whitening lasting", excerpt: "Protect your investment with simple daily routines recommended by our hygienists.", date: "Jul 18, 2026", read: "4 min", img: "https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=700", tag: "Tips" },
  { title: "Kids first visit: a parents guide", excerpt: "What to expect, how we ease nerves, and why early checkups matter.", date: "Jul 5, 2026", read: "6 min", img: "https://images.pexels.com/photos/4269693/pexels-photo-4269693.jpeg?auto=compress&cs=tinysrgb&w=700", tag: "Family" },
];

export function BlogSection() {
  return (
    <section id="blog" className="scroll-mt-8 bg-white px-6 py-20 md:px-8 md:py-28 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Blog</SectionLabel>
            <SectionHeading>Insights for a healthier smile</SectionHeading>
          </div>
          <a href="#blog" className="group inline-flex items-center gap-2 text-lg font-medium text-[#3D8CD5] transition hover:text-[#5F9AD1]">
            View all articles
            <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {POSTS.map((p) => (
            <article key={p.title} className="group flex flex-col">
              <div className="relative aspect-[16/11] overflow-hidden rounded-[24px]">
                <img src={p.img} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-medium text-[#3D8CD5]">{p.tag}</span>
              </div>
              <div className="mt-4 flex items-center gap-3 text-sm text-neutral-400">
                <span>{p.date}</span>
                <span className="h-1 w-1 rounded-full bg-neutral-300" />
                <span>{p.read} read</span>
              </div>
              <h3 className="mt-2 text-xl font-medium tracking-tight text-neutral-900 transition group-hover:text-[#3D8CD5]">{p.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-neutral-500">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
