import { motion } from "framer-motion";
import { waLink } from "../utils/helpers";

const heroStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const heroItem = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section style={{ position: "relative", width: "100%", height: "100svh", minHeight: 600,
      display: "flex", alignItems: "center", justifyContent: "center",
      overflow: "hidden", background: "#0a0a0a" }}>

      {/* 👉 Foto de fondo — reemplazar src con la foto real */}
      <div style={{ position: "absolute", inset: 0, background: "#0a0a0a" }}>
        <img
          src="/fotos/hero.jpg"
          alt="Santiago Nievas"
          style={{ width: "100%", height: "100%", objectFit: "contain",
            objectPosition: "center center", filter: "grayscale(15%) contrast(1.05)" }}
        />
      </div>

      {/* Overlay */}
      <div style={{ position: "absolute", inset: 0,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.75) 100%)" }} />

      {/* Contenido */}
      <motion.div variants={heroStagger} initial="hidden" animate="visible"
        style={{ position: "relative", zIndex: 10, textAlign: "center",
          padding: "0 20px", maxWidth: 640, width: "100%" }}>

        <motion.p variants={heroItem}
          style={{ fontSize: 10, fontWeight: 300, letterSpacing: "0.28em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.45)",
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: 10, marginBottom: 20 }}>
          <span style={{ width: 16, height: 1, background: "#f59e0b", display: "inline-block" }} />
          Entrenamiento online personalizado
          <span style={{ width: 16, height: 1, background: "#f59e0b", display: "inline-block" }} />
        </motion.p>

        <motion.h1 variants={heroItem} className="font-serif"
          style={{ fontSize: "clamp(36px, 11vw, 80px)", fontWeight: 500,
            color: "#fff", lineHeight: 1.05, marginBottom: 16 }}>
          Entrenás.<br />Progresás.<br />
          <span style={{ color: "rgba(255,255,255,0.45)" }}>Sin excusas.</span>
        </motion.h1>

        <motion.p variants={heroItem}
          style={{ fontSize: "clamp(14px, 3.5vw, 17px)", fontWeight: 300,
            color: "rgba(255,255,255,0.5)", lineHeight: 1.6,
            maxWidth: 380, margin: "0 auto 32px" }}>
          Un método real, adaptado a tu cuerpo y tu tiempo. Con acompañamiento de verdad.
        </motion.p>

        <motion.div variants={heroItem} style={{ display: "flex", justifyContent: "center" }}>
          <a href="#planes"
            onClick={e => { e.preventDefault(); document.querySelector("#planes")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center",
              height: 52, padding: "0 36px", border: "1px solid rgba(255,255,255,0.3)",
              color: "#fff", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em",
              textTransform: "uppercase", textDecoration: "none", transition: "all 0.3s",
              width: "100%", maxWidth: 280 }}
            onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#0a0a0a"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#fff"; }}>
            Ver planes
          </a>
        </motion.div>
      </motion.div>

      {/* Flecha scroll */}
      <motion.button
        onClick={() => document.querySelector("#sobre-mi")?.scrollIntoView({ behavior: "smooth" })}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)",
          background: "none", border: "none", cursor: "pointer",
          color: "rgba(255,255,255,0.25)", padding: 8 }}>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.button>
    </section>
  );
}
