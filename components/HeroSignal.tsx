"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { PointerEvent } from "react";

export default function HeroSignal() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [16, -16]), {
    stiffness: 180,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-16, 16]), {
    stiffness: 180,
    damping: 18,
  });

  function rotateWithPointer(event: PointerEvent<SVGSVGElement>) {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  function resetRotation() {
    pointerX.set(0);
    pointerY.set(0);
  }

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
        onPointerMove={rotateWithPointer}
        onPointerLeave={resetRotation}
        style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 700 }}
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
