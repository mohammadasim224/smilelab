import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = ["About", "Results", "Pricing", "Reviews", "Blog"] as const;

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260710_141802_1d85412a-1df8-4993-8fc4-7400520bb1d1.mp4";

const PERSON_IMG =
  "https://soft-zoom-63098134.figma.site/_assets/v11/ecccf0c10f5c64505f8cb104b04c72aba0b85b0c.png?w=512";

const AVATAR_1 =
  "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200";
const AVATAR_2 =
  "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200";

const ease = "cubic-bezier(0.16, 1, 0.3, 1)";

function ToothLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 28 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M14 1.5C8.2 1.5 3.6 6.2 3.6 12.1c0 4.9 2.9 9.2 7 13.2 1.1 1.1 2.3 2.1 3.3 3.1a.9.9 0 0 0 1.3 0c1-1 2.2-2 3.3-3.1 4.1-4 7-8.3 7-13.2C25.5 6.2 20.9 1.5 14 1.5z"
        fill="white"
      />
      <path
        d="M14 6.2c-3.1 0-5.6 2.5-5.6 5.6 0 2.8 1.6 5.2 3.9 7.4.8.8 1.7 1.5 1.7 1.5s.9-.7 1.7-1.5c2.3-2.2 3.9-4.6 3.9-7.4 0-3.1-2.5-5.6-5.6-5.6z"
        fill="#5F9AD1"
      />
    </svg>
  );
}

function ContactsButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="#contacts"
      className={`group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 ${className}`}
    >
      <span className="text-lg font-medium text-black">Contacts</span>
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EBFA73] transition-transform duration-300 group-hover:scale-110">
        <ArrowUpRight className="h-4 w-4 text-[#5F9AD1]" strokeWidth={2.5} />
      </span>
    </a>
  );
}

export function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#5F9AD1]">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute z-0 w-full object-cover top-[30%] h-[70%] object-[80%_center] md:inset-0 md:top-0 md:h-full md:object-center animate-[fadeIn_1.2s_ease-out_0.2s_both]"
        src={VIDEO_SRC}
      />

      <div
        className="pointer-events-none absolute top-[30%] left-0 right-0 z-[1] h-32 md:hidden"
        style={{
          background: "linear-gradient(to bottom, #5F9AD1, transparent)",
        }}
      />

      <div className="relative z-10 flex h-full w-full flex-col">
        <header className="flex items-center justify-between px-6 pt-6 md:px-8 md:pt-8 lg:px-16 lg:pt-12 animate-[slideDown_0.7s_ease-out_0.1s_both]">
          <a href="/" className="flex items-center gap-2.5">
            <ToothLogo className="h-8 w-7 md:h-9 md:w-8" />
            <span className="text-xl font-medium tracking-tight text-white md:text-2xl lg:text-[28px]">
              SmileLab
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-lg md:flex lg:gap-12">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={
                  i === 0
                    ? "font-medium text-white transition-colors hover:text-white"
                    : "text-white/60 transition-colors hover:text-white"
                }
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <ContactsButton />
          </div>

          <button
            type="button"
            className="relative z-50 flex h-11 w-11 items-center justify-center text-white md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <Menu
              className={`absolute h-7 w-7 transition-all duration-300 ${
                menuOpen
                  ? "scale-75 rotate-90 opacity-0"
                  : "scale-100 rotate-0 opacity-100"
              }`}
            />
            <X
              className={`absolute h-7 w-7 transition-all duration-300 ${
                menuOpen
                  ? "scale-100 rotate-0 opacity-100"
                  : "scale-75 -rotate-90 opacity-0"
              }`}
            />
          </button>
        </header>

        <div className="mx-auto w-full max-w-3xl px-6 text-center mt-8 md:mx-0 md:mt-6 md:text-left md:px-8 lg:mt-10 lg:px-16 animate-[blurIn_0.9s_ease-out_0.3s_both]">
          <h1 className="text-[72px] font-normal leading-[0.9] tracking-tight text-white sm:text-6xl md:leading-[0.85] lg:text-[90px] xl:text-[100px]">
            <span className="block">Restore</span>
            <span className="block">Your True</span>
            <span className="inline-flex items-end gap-4 lg:gap-6">
              Smile
              <span className="mb-[0.1em] hidden -space-x-2 md:inline-flex">
                <img
                  src={AVATAR_1}
                  alt=""
                  className="h-10 w-10 rounded-full border-2 border-[#5F9AD1] object-cover lg:h-14 lg:w-14"
                />
                <img
                  src={AVATAR_2}
                  alt=""
                  className="h-10 w-10 rounded-full border-2 border-[#5F9AD1] object-cover lg:h-14 lg:w-14"
                />
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xs font-medium text-[#3D8CD5] lg:h-14 lg:w-14 lg:text-base">
                  +2k
                </span>
              </span>
            </span>
          </h1>

          <p className="mt-5 hidden max-w-md text-lg leading-tight md:block lg:mt-6">
            <span className="text-white/60">Using </span>
            <span className="text-white">advanced technology</span>
            <span className="text-white/60">
              , we deliver comprehensive treatments for a healthy,{" "}
            </span>
            <span className="text-white">confident smile.</span>
          </p>
        </div>

        <div className="absolute bottom-0 left-4 hidden md:block lg:left-12 animate-[slideUp_0.9s_ease-out_0.8s_both]">
          <div className="absolute top-8 left-3 z-20 text-center lg:top-12 lg:left-4">
            <div className="text-2xl font-bold text-[#3D8CD5] lg:text-4xl">98%</div>
            <div className="text-xs font-medium text-[#3D8CD5] lg:text-sm">
              loyal dental
              <br />
              patients
            </div>
          </div>
          <img
            src={PERSON_IMG}
            alt="Smiling patient"
            className="relative z-10 w-52 object-contain sm:w-64 lg:w-80"
          />
        </div>
      </div>

      <div
        className="fixed inset-0 z-50 md:hidden"
        style={{
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        aria-hidden={!menuOpen}
      >
        <div
          className="absolute inset-0 bg-[#5F9AD1]/95 backdrop-blur-md transition-opacity duration-500"
          style={{
            opacity: menuOpen ? 1 : 0,
            transitionTimingFunction: ease,
          }}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className="relative flex h-full flex-col px-6 pb-10 pt-6"
          style={{
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
            transition: `opacity 500ms ${ease}, transform 500ms ${ease}`,
          }}
        >
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
              <ToothLogo className="h-8 w-7" />
              <span className="text-xl font-medium tracking-tight text-white">SmileLab</span>
            </a>
            <button
              type="button"
              className="absolute top-6 right-6 flex h-11 w-11 items-center justify-center text-white"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-7 w-7" />
            </button>
          </div>

          <nav className="mt-16 flex flex-1 flex-col gap-6">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-light text-white"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 500ms ${ease}, transform 500ms ${ease}`,
                  transitionDelay: menuOpen ? `${100 + i * 60}ms` : "0ms",
                }}
              >
                {link}
              </a>
            ))}
          </nav>

          <div
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(16px)",
              transition: `opacity 500ms ${ease}, transform 500ms ${ease}`,
              transitionDelay: menuOpen ? "400ms" : "0ms",
            }}
          >
            <ContactsButton className="w-full justify-center" />
          </div>
        </div>
      </div>
    </section>
  );
}
