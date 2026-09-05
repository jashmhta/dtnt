"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { label: "About", href: "/about" },
  { label: "Honeymoon", href: "/private-service" },
  { label: "Corporate", href: "/corporate-service" },
  { label: "Careers", href: "/careers" },
];

export function Logo({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <img
      src="/drashti-logo.jpg"
      alt="Drashti Tours And Travels"
      className={`${className} rounded-full object-cover bg-white ring-1 ring-black/10 grayscale`}
    />
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] text-[#fbf8f3] [mix-blend-mode:difference]">
        <div className="px-5 md:px-10">
          <div className="relative mx-auto flex h-[68px] max-w-[1440px] items-center justify-between">
            <nav
              aria-label="Primary"
              className="hidden items-center gap-7 lg:flex"
              style={{ fontSize: "11px", letterSpacing: "0.22em" }}
            >
              {links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="uppercase opacity-80 transition-opacity hover:opacity-100"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex flex-col gap-[6px] p-2 lg:hidden"
            >
              <span
                className={`block h-[1.5px] w-7 bg-current transition-transform duration-300 ${
                  open ? "rotate-45 translate-y-[7.5px]" : ""
                }`}
              />
              <span className={`block h-[1.5px] w-7 bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
              <span
                className={`block h-[1.5px] w-7 bg-current transition-transform duration-300 ${
                  open ? "-rotate-45 -translate-y-[7.5px]" : ""
                }`}
              />
            </button>

            <a href="/" aria-label="Drashti Tours home" className="absolute left-1/2 -translate-x-1/2">
              <span className="whitespace-nowrap text-[17px] font-medium uppercase tracking-[0.3em]">
                Drashti Tours
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-current px-6 py-2.5 uppercase opacity-90 transition-all hover:opacity-100 hover:scale-[1.03] active:scale-[0.98]"
                style={{ fontSize: "11px", letterSpacing: "0.22em" }}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-[#1c1410] px-6 pt-[84px] text-[#fbf8f3] lg:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {[...links, { label: "Contact", href: "/contact" }].map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/15 py-4 text-4xl uppercase"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <p className="mt-8 text-sm opacity-60">Mumbai · +91 88796 67506</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}