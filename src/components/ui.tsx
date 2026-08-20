import { type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-[#5F9AD1]/10 px-4 py-1.5 text-sm font-medium text-[#3D8CD5]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#EBFA73]" />
      {children}
    </span>
  );
}

export function SectionHeading({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <h2 className={`mt-4 max-w-2xl text-4xl font-normal leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl ${light ? "text-white" : "text-neutral-900"}`}>
      {children}
    </h2>
  );
}

export function LimeCta({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} className={`group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-sm transition hover:shadow-md ${className}`}>
      <span className="text-lg font-medium text-black">{children}</span>
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EBFA73] transition-transform duration-300 group-hover:scale-110">
        <ArrowUpRight className="h-4 w-4 text-[#5F9AD1]" strokeWidth={2.5} />
      </span>
    </a>
  );
}

export function BlueCta({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} className={`group inline-flex items-center gap-3 rounded-full bg-[#5F9AD1] px-5 py-3 text-white transition hover:bg-[#3D8CD5] ${className}`}>
      <span className="text-lg font-medium">{children}</span>
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EBFA73] transition-transform duration-300 group-hover:scale-110">
        <ArrowUpRight className="h-4 w-4 text-[#5F9AD1]" strokeWidth={2.5} />
      </span>
    </a>
  );
}
