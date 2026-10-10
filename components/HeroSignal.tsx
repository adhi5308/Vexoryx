"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function HeroSignal() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="hero-signal" aria-hidden="true">
      <motion.div
        className="signal-orbit"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />
      <motion.svg
        viewBox="0 0 260 260"
        className="signal-mark"
        whileHover={reduceMotion ? undefined : { rotate: 360, scale: 1.06 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "50% 50%" }}
      >
        <motion.path
          d="M48 48 H96 L130 137 L105 190 Z"
          animate={reduceMotion ? undefined : { pathLength: [0, 1, 1], opacity: [0, 1, 1] }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.path
          d="M212 48 H164 L130 137 L155 190 Z"
          animate={reduceMotion ? undefined : { pathLength: [0, 1, 1], opacity: [0, 1, 1] }}
          transition={{ delay: 0.14, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.svg>
      <span className="signal-label signal-label-top">DESIGN / BUILD</span>
      <span className="signal-label signal-label-bottom">01 — VXR</span>
    </div>
  );
}
