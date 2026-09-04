"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Overlays() {
  const [cookie, setCookie] = useState(false);
  const [chat, setChat] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("fw-cookie");
    if (!seen) {
      const t = setTimeout(() => setCookie(true), 1800);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("fw-cookie", "1");
    setCookie(false);
  };

  return (
    <>
      <AnimatePresence>
        {cookie && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-[380px] z-[120] rounded-2xl bg-[#1c1410] text-[#fbf8f3] p-5 shadow-2xl"
          >
            <p className="text-sm leading-relaxed opacity-90">
              We use cookies to improve your experience and analyse traffic.
            </p>
            <div className="mt-4 flex gap-3">
              <button
                onClick={accept}
                className="flex-1 rounded-full bg-[#fbf8f3] text-[#1c1410] py-2.5 text-[12px] uppercase tracking-[0.18em]"
              >
                Accept
              </button>
              <button
                onClick={accept}
                className="flex-1 rounded-full border border-white/30 py-2.5 text-[12px] uppercase tracking-[0.18em]"
              >
                Decline
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* chat bubble mimicking respond.io widget */}
      <div className="fixed bottom-5 right-5 z-[120] flex flex-col items-end gap-3">
        <AnimatePresence>
          {chat && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              className="w-[300px] rounded-2xl bg-white border border-black/10 shadow-2xl p-5"
            >
              <p className="font-display text-xl mb-1">How can we help?</p>
              <p className="text-sm opacity-65 mb-4">
                A travel designer typically replies in minutes.
              </p>
              <a
                href="#contact"
                onClick={() => setChat(false)}
                className="block text-center rounded-full bg-[#1c1410] text-white py-2.5 text-[12px] uppercase tracking-[0.18em]"
              >
                Start enquiry
              </a>
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={() => setChat(!chat)}
          aria-label="Chat"
          className="h-14 w-14 rounded-full bg-[#1c1410] text-[#fbf8f3] shadow-2xl flex items-center justify-center text-xl hover:scale-105 transition-transform"
        >
          {chat ? "×" : "✈"}
        </button>
      </div>
    </>
  );
}
