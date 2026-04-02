import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const WA_NUMBER = "5492215056142";
export const WA_BASE   = `https://wa.me/${WA_NUMBER}?text=`;
export const waLink    = (msg) => WA_BASE + encodeURIComponent(msg);

export const FadeIn = ({ children, delay = 0, className = "", direction = "up" }) => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  const y = direction === "up" ? 28 : direction === "down" ? -28 : 0;
  const x = direction === "left" ? 28 : direction === "right" ? -28 : 0;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SectionLabel = ({ children, light = false }) => (
  <p className={`text-[10px] font-medium tracking-[0.22em] uppercase flex items-center gap-2 mb-6 select-none ${
    light ? "text-neutral-500" : "text-neutral-400"
  }`}>
    <span className="w-5 h-px bg-amber-500 inline-block flex-shrink-0" />
    {children}
  </p>
);
