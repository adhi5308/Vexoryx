"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StampIndex } from "./Reveal";

export type ServiceRow = {
  index: string;
  title: string;
  detail: string;
};

export default function ServiceAccordion({ rows }: { rows: ServiceRow[] }) {
  const [openIndex, setOpenIndex] = useState<string | null>(rows[0]?.index ?? null);

  return (
    <div className="border-t border-line">
      {rows.map((row) => {
        const isOpen = openIndex === row.index;
        return (
          <div key={row.index} className="border-b border-line">
            <button
              onClick={() => setOpenIndex(isOpen ? null : row.index)}
              className="w-full flex items-center justify-between gap-6 py-6 text-left group"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-6">
                <StampIndex index={row.index} />
                <span className="font-display text-xl md:text-2xl">{row.title}</span>
              </span>
              <span className="w-8 h-8 flex items-center justify-center rounded-full border border-line text-gold relative overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isOpen ? "close" : "open"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {isOpen ? "\u00d7" : "+"}
                  </motion.span>
                </AnimatePresence>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 max-w-2xl text-paper/70 text-sm md:text-base">
                    {row.detail}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
