import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Clock, MapPin, Phone, Mail } from "lucide-react";
import { SectionLabel, SectionHeading } from "./ui";

export function ContactsSection() {
  const [sent, setSent] = useState(false);
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }
  return (
    <section id="contacts" className="scroll-mt-8 bg-[#F4F8FC] px-6 py-20 md:px-8 md:py-28 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionLabel>Contacts</SectionLabel>
            <SectionHeading>Lets design your next smile</SectionHeading>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-neutral-500">Book a free consultation or ask us anything. We typically reply within one business day.</p>
            <ul className="mt-10 space-y-5">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#5F9AD1] text-white"><MapPin className="h-5 w-5" /></span>
                <div>
                  <div className="font-medium text-neutral-900">Visit us</div>
                  <div className="mt-0.5 text-neutral-500">128 Harmony Ave, Suite 4<br />San Francisco, CA 94107</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#5F9AD1] text-white"><Phone className="h-5 w-5" /></span>
                <div>
                  <div className="font-medium text-neutral-900">Call</div>
                  <a href="tel:+14155550198" className="mt-0.5 block text-neutral-500 transition hover:text-[#3D8CD5]">+1 (415) 555-0198</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#5F9AD1] text-white"><Mail className="h-5 w-5" /></span>
                <div>
                  <div className="font-medium text-neutral-900">Email</div>
                  <a href="mailto:hello@smilelab.clinic" className="mt-0.5 block text-neutral-500 transition hover:text-[#3D8CD5]">hello@smilelab.clinic</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#5F9AD1] text-white"><Clock className="h-5 w-5" /></span>
                <div>
                  <div className="font-medium text-neutral-900">Hours</div>
                  <div className="mt-0.5 text-neutral-500">Mon–Fri 8:00–19:00<br />Sat 9:00–14:00</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-[32px] bg-white p-7 shadow-sm md:p-10">
            {sent ? (
              <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EBFA73]"><Check className="h-7 w-7 text-[#3D8CD5]" strokeWidth={2.5} /></span>
                <h3 className="mt-5 text-2xl font-medium tracking-tight text-neutral-900">Message sent</h3>
                <p className="mt-2 max-w-xs text-neutral-500">Thanks for reaching out. A SmileLab coordinator will contact you soon.</p>
                <button type="button" onClick={() => setSent(false)} className="mt-6 text-sm font-medium text-[#3D8CD5] underline-offset-4 hover:underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-medium text-neutral-700">First name</span>
                    <input required name="firstName" className="mt-1.5 w-full rounded-2xl border border-neutral-200 bg-[#F4F8FC] px-4 py-3 text-neutral-900 outline-none transition focus:border-[#5F9AD1] focus:ring-2 focus:ring-[#5F9AD1]/20" placeholder="Alex" />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium text-neutral-700">Last name</span>
                    <input required name="lastName" className="mt-1.5 w-full rounded-2xl border border-neutral-200 bg-[#F4F8FC] px-4 py-3 text-neutral-900 outline-none transition focus:border-[#5F9AD1] focus:ring-2 focus:ring-[#5F9AD1]/20" placeholder="Rivera" />
                  </label>
                </div>
                <label className="block">
                  <span className="text-sm font-medium text-neutral-700">Email</span>
                  <input required type="email" name="email" className="mt-1.5 w-full rounded-2xl border border-neutral-200 bg-[#F4F8FC] px-4 py-3 text-neutral-900 outline-none transition focus:border-[#5F9AD1] focus:ring-2 focus:ring-[#5F9AD1]/20" placeholder="you@email.com" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-neutral-700">Interest</span>
                  <select name="interest" className="mt-1.5 w-full appearance-none rounded-2xl border border-neutral-200 bg-[#F4F8FC] px-4 py-3 text-neutral-900 outline-none transition focus:border-[#5F9AD1] focus:ring-2 focus:ring-[#5F9AD1]/20" defaultValue="consultation">
                    <option value="consultation">Free consultation</option>
                    <option value="whitening">Whitening</option>
                    <option value="veneers">Veneers</option>
                    <option value="aligners">Invisalign / aligners</option>
                    <option value="family">Family care</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-neutral-700">Message</span>
                  <textarea required name="message" rows={4} className="mt-1.5 w-full resize-none rounded-2xl border border-neutral-200 bg-[#F4F8FC] px-4 py-3 text-neutral-900 outline-none transition focus:border-[#5F9AD1] focus:ring-2 focus:ring-[#5F9AD1]/20" placeholder="Tell us a bit about your goals" />
                </label>
                <button type="submit" className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#5F9AD1] px-5 py-3.5 text-lg font-medium text-white transition hover:bg-[#3D8CD5]">
                  Send message
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EBFA73] transition-transform duration-300 group-hover:scale-110">
                    <ArrowUpRight className="h-4 w-4 text-[#5F9AD1]" strokeWidth={2.5} />
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
