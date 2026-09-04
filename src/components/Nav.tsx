"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { label: "About", href: "/about" },
  { label: "Private", href: "/private-service" },
  { label: "Corporate", href: "/corporate-service" },
  { label: "Careers", href: "/careers" },
];

export function Logo({ className = "w-[135px]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 135 16"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Flyward"
      role="img"
    >
      <path
        d="M1.56 2.78C1.56 1.6 1.23.84.54.46h9.5c.87 0 1.34-.02 1.81-.46v4.7C11.07 2.42 10.18 1.8 8.16 1.8H4.16v5.52h3.53c.87 0 1.63-.07 2.17-1.66v4.58c-.54-1.5-1.3-1.57-2.17-1.57H4.16v4.47c0 1.26.47 2.08 1.83 2.47H.54c.69-.39 1.03-1.14 1.03-2.33V2.78Z"
        fill="currentColor"
      />
      <path
        d="M27.89 15.61h-9.17c.69-.39 1.03-1.14 1.03-2.33V2.78c0-1.19-.34-1.94-1.03-2.33h4.54c-.58.39-.92 1.14-.92 2.33v11.48h4.14c1.92 0 2.57-1.18 3.45-3.6v5.18c-.67-.21-1.23-.23-2.04-.23Z"
        fill="currentColor"
      />
      <path
        d="M39.91 13.21v-2.74l-5.24-8.37c-.45-.68-.71-1.16-1.4-1.64h4.9c-.9.5-.76 1.05-.38 1.66l4.13 6.69 3.72-6.25c.6-1.03.42-1.69-.34-2.1h3.89c-1 .59-1.5 1.28-2.08 2.26l-4.61 7.76v2.74c0 1.19.34 1.98 1.48 2.4h-5.55c1.14-.41 1.48-1.21 1.48-2.4Z"
        fill="currentColor"
      />
      <path
        d="M56.87.46c-.81.48-.9 1.03-.6 1.8l3.1 8.38 2.91-7.99c-.49-1.3-.92-1.87-1.3-2.19h4.45c-.67.39-.94.96-.56 1.92l3.16 8.35 2.93-7.97c.4-1.12.18-1.85-.74-2.3h3.78c-.76.5-1.2 1.19-1.59 2.17l-4.27 11.43c-.29.78-.45 1.28-.6 1.94l-4.57-11.66-3.51 9.56c-.29.82-.49 1.44-.63 2.1L53.36 1.94C53.09 1.28 52.8.87 52.19.46h4.68Z"
        fill="currentColor"
      />
      <path
        d="M78.49 13.4 83.53 2.6c-.56-1.12-1.1-1.8-2.29-2.14h4.41c.07.59.34 1.16.63 1.76l5.57 11.91c.29.62.51 1.07 1.12 1.48h-4.81c1.05-.48 1.05-1.05.76-1.69l-.72-1.5h-7.76l-.42.89c-.52 1.12-.25 1.85.67 2.3h-3.81c.76-.5 1.14-1.23 1.61-2.21Zm9.13-2.26-3.29-7.1-3.29 7.1h6.58Z"
        fill="currentColor"
      />
      <path
        d="M99.84 13.28V2.78c0-1.19-.34-1.94-1.03-2.33h6.47c3.89 0 6.29 1.1 6.29 4.2 0 3.1-2.28 4.11-5.01 4.27 1.65.09 2.32.55 2.9 1.5l2.08 3.2c.65.98 1.01 1.37 1.88 1.99h-4.67c.44-.32.51-.8.09-1.46l-2.4-3.75c-.58-.93-1.07-1.16-2.08-1.16h-1.92v4.04c0 1.19.33 1.94 1.03 2.33h-4.66c.7-.39 1.03-1.14 1.03-2.33Zm5.44-5.31c2.32 0 3.46-.85 3.46-3.09 0-2.23-1.14-3.08-3.46-3.08h-2.84v6.17h2.84Z"
        fill="currentColor"
      />
      <path
        d="M120.22 2.78c0-1.19-.33-1.94-1.03-2.33h6.38c5.72 0 8.3 3.2 8.3 7.55 0 4.36-2.58 7.6-8.3 7.6h-6.38c.7-.38 1.03-1.14 1.03-2.32V2.78Zm5.35 11.48c4.05 0 5.37-2.12 5.37-6.26 0-3.86-1.54-6.2-5.37-6.2l-2.75.02v12.42l2.75.02Z"
        fill="currentColor"
      />
    </svg>
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

            <a href="#top" aria-label="Flyward home" className="absolute left-1/2 -translate-x-1/2">
              <Logo className="w-[120px] md:w-[135px]" />
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
            <p className="mt-8 text-sm opacity-60">Dubai, UAE — IATA 8622194</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}