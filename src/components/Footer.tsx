"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Nav";
import { IMG } from "@/lib/assets";

function useDubaiClock() {
  const [now, setNow] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone: "Asia/Dubai",
    });
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

export default function Footer() {
  const clock = useDubaiClock();
  return (
    <footer className="relative overflow-hidden bg-[#1c1410] text-[#fbf8f3] rounded-t-[28px] mx-3 md:mx-6 mb-3">
      <img
        src={IMG.footerBg}
        alt=""
        loading="lazy"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 pt-16 pb-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[12px] uppercase tracking-[0.3em] opacity-50 mb-5">Menu</p>
            <nav className="flex flex-col gap-2 font-display text-3xl">
              {[
                ["About", "#discover"],
                ["Private", "#private"],
                ["Corporate", "#corporate"],
                ["Careers", "#numbers"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a key={label} href={href} className="opacity-90 hover:italic transition-all w-fit">
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <div className="lg:col-span-3">
            <p className="text-[12px] uppercase tracking-[0.3em] opacity-50 mb-5">Socials</p>
            <div className="flex flex-col gap-2 underline-offset-4">
              <a href="https://www.instagram.com/flyward" target="_blank" className="hover:underline w-fit">
                Instagram
              </a>
              <a href="https://www.tiktok.com/@flyward" target="_blank" className="hover:underline w-fit">
                TikTok
              </a>
            </div>
            <p className="mt-8 text-[12px] uppercase tracking-[0.3em] opacity-50 mb-2">Location</p>
            <p>Dubai, UAE</p>
            <p className="mt-2 text-sm opacity-70 tabular-nums">{clock || "—"}</p>
          </div>
          <div className="lg:col-span-5 text-sm leading-relaxed opacity-80">
            <p>IATA Agent: 8622194</p>
            <p>DMCC License: 900695</p>
            <p>DCAA Accredited</p>
            <p className="mt-6">© Flyward FZCO, a Panathon company</p>
            <p>All Rights Reserved</p>
            <div className="mt-4 flex flex-wrap gap-5 underline-offset-4">
              <a href="https://www.iubenda.com/privacy-policy/59084511/cookie-policy" target="_blank" className="hover:underline">
                Cookie Policy
              </a>
              <a href="https://www.iubenda.com/privacy-policy/59084511" target="_blank" className="hover:underline">
                Privacy Policy
              </a>
              <a href="https://www.iubenda.com/terms-and-conditions/59084511" target="_blank" className="hover:underline">
                Terms of Use
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/15 pt-8 flex justify-center">
          <img src={IMG.footerLogo} alt="Flyward" loading="lazy" className="w-[80vw] max-w-[920px] brightness-[5]" />
        </div>
        <div className="mt-6 flex justify-center opacity-60">
          <Logo className="hidden" />
        </div>
      </div>
    </footer>
  );
}
