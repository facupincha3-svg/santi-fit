import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const WA_NUMBER = "5492215056142";
export const waLink    = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

export const FadeIn = ({ children, delay = 0, y = 28, x = 0 }) => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
    >{children}</motion.div>
  );
};

export const Label = ({ children, light = false }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
    <span style={{ width: 28, height: 1, background: "var(--amber)", display: "inline-block" }} />
    <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.3em",
      textTransform: "uppercase", color: light ? "rgba(255,255,255,0.4)" : "var(--gray3)" }}>
      {children}
    </span>
  </div>
);
