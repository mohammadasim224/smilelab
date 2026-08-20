import { ArrowUpRight } from "lucide-react";

function ToothLogoFooter({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M14 1.5C8.2 1.5 3.6 6.2 3.6 12.1c0 4.9 2.9 9.2 7 13.2 1.1 1.1 2.3 2.1 3.3 3.1a.9.9 0 0 0 1.3 0c1-1 2.2-2 3.3-3.1 4.1-4 7-8.3 7-13.2C25.5 6.2 20.9 1.5 14 1.5z" fill="white" />
      <path d="M14 6.2c-3.1 0-5.6 2.5-5.6 5.6 0 2.8 1.6 5.2 3.9 7.4.8.8 1.7 1.5 1.7 1.5s.9-.7 1.7-1.5c2.3-2.2 3.9-4.6 3.9-7.4 0-3.1-2.5-5.6-5.6-5.6z" fill="#5F9AD1" />
    </svg>
  );
}

const FOOTER_LINKS = {
  Clinic: ["About", "Results", "Pricing", "Reviews", "Blog"],
  Care: ["Whitening", "Veneers", "Aligners", "Family plans", "Emergency"],
  Legal: ["Privacy", "Terms", "Accessibility"],
};

export function FooterSection() {
  return (
    <footer className="bg-[#3D8CD5] px-6 pt-16 pb-8 md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="/" className="inline-flex items-center gap-2.5">
              <ToothLogoFooter className="h-8 w-7" />
              <span className="text-xl font-medium tracking-tight text-white md:text-2xl">SmileLab</span>
            </a>
            <p className="mt-4 max-w-xs text-base leading-relaxed text-white/70">Advanced dental care for healthy, confident smiles — in a clinic designed around you.</p>
            <a href="#contacts" className="group mt-6 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3">
              <span className="text-base font-medium text-black">Book a visit</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EBFA73] transition-transform duration-300 group-hover:scale-110">
                <ArrowUpRight className="h-4 w-4 text-[#5F9AD1]" strokeWidth={2.5} />
              </span>
            </a>
          </div>
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-medium uppercase tracking-wider text-white/50">{title}</h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href={title === "Clinic" ? `#${link.toLowerCase()}` : title === "Legal" ? "#" : "#pricing"} className="text-base text-white/80 transition hover:text-white">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-white/50">© {new Date().getFullYear()} SmileLab Dental Clinic. All rights reserved.</p>
          <p className="text-sm text-white/50">San Francisco · Open 6 days a week</p>
        </div>
      </div>
    </footer>
  );
}
