import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CAPTIONS = [
  { text: "Entrenamiento real.",       sub: "Planificado para vos."            },
  { text: "Transformaciones reales.",  sub: "Resultados que duran."            },
  { text: "Seguimiento continuo.",     sub: "No desaparezco después del PDF."  },
  { text: "Contacto directo.",         sub: "WhatsApp todos los días hábiles." },
  { text: "+15 alumnos.",              sub: "10 años de experiencia."          },
];
const CAPTION_DURATION = 5000;

export default function Hero() {
  const [capIdx,     setCapIdx]     = useState(0);
  const [capVisible, setCapVisible] = useState(true);

  useEffect(() => {
    const iv = setInterval(() => {
      setCapVisible(false);
      setTimeout(() => { setCapIdx(i => (i + 1) % CAPTIONS.length); setCapVisible(true); }, 300);
    }, CAPTION_DURATION);
    return () => clearInterval(iv);
  }, []);

  const cap = CAPTIONS[capIdx];

  return (
    <section style={{ position: "relative", width: "100%", minHeight: "100svh",
      background: "var(--black)", overflow: "hidden", display: "flex", alignItems: "stretch" }}>

      <div style={{ width: "100%", maxWidth: 1400, margin: "0 auto",
        display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
        alignItems: "stretch", paddingTop: 64 }}
        className="hero-grid">

        {/* LEFT */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "clamp(36px,6vw,96px) clamp(20px,4vw,72px)", position: "relative", zIndex: 10 }}>

          <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16,1,0.3,1] }}
            style={{ position: "absolute", left: 0, top: "15%", bottom: "15%",
              width: 1, background: "var(--amber)", opacity: 0.5, transformOrigin: "top" }} />

          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
            <span style={{ width: 24, height: 1, background: "var(--amber)", display: "inline-block" }} />
            <span style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>Coaching online · Alta performance</span>
          </motion.div>

          <div className="display" style={{ fontSize: "clamp(44px,5.5vw,80px)", fontWeight: 300,
            color: "#fff", lineHeight: 1.0, letterSpacing: "-0.02em", marginBottom: 20 }}>
            {[
              { text: "Ganá músculo con un plan", italic: false },
              { text: "diseñado para vos.",       italic: true  },
              { text: "Sin improvisar.",          italic: false },
            ].map((line, i) => (
              <div key={i} style={{ overflow: "hidden" }}>
                <motion.div initial={{ y: "105%" }} animate={{ y: 0 }}
                  transition={{ duration: 0.85, delay: 0.7 + i * 0.12, ease: [0.16,1,0.3,1] }}
                  style={{ fontStyle: line.italic ? "italic" : "normal",
                    color: line.italic ? "rgba(255,255,255,0.4)" : "#fff" }}>
                  {line.text}
                </motion.div>
              </div>
            ))}
          </div>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.15 }}
            style={{ fontSize: "clamp(14px,1.4vw,17px)", fontWeight: 300,
              color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: 400, marginBottom: 32 }}>
            Método real. Resultados sostenibles. Acompañamiento constante.
          </motion.p>

          <motion.ul initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 40 }}>
            {[
              "Sin rutinas genéricas.",
              "Sin improvisar.",
              "Con seguimiento real.",
              "Soporte directo por WhatsApp.",
            ].map((b, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%",
                  background: "var(--amber)", flexShrink: 0 }} />
                <span style={{ fontSize: 13, fontWeight: 300,
                  color: "rgba(255,255,255,0.55)" }}>{b}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.45 }}
            style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a href="https://wa.me/5492215056142?text=Hola%20Santiago%2C%20quiero%20empezar%20mi%20transformación"
              target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 10,
                background: "var(--amber)", color: "var(--black)", fontSize: 11, fontWeight: 700,
                letterSpacing: "0.18em", textTransform: "uppercase", padding: "15px 28px",
                textDecoration: "none", flex: "1 1 auto", justifyContent: "center", minWidth: 200 }}
              onMouseEnter={e => { e.currentTarget.style.background = "#e5b040"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--amber)"; e.currentTarget.style.transform = "translateY(0)"; }}>
              Quiero empezar ahora
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
            <a href="#resultados"
              onClick={e => { e.preventDefault(); document.querySelector("#resultados")?.scrollIntoView({ behavior: "smooth" }); }}
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)",
                fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase",
                padding: "15px 24px", textDecoration: "none" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}>
              Ver resultados
            </a>
          </motion.div>
        </div>

        {/* RIGHT: media */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16,1,0.3,1] }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center",
            padding: "clamp(36px,6vw,96px) clamp(20px,4vw,56px)" }}
          className="hero-media">

          <div style={{ position: "relative", width: "100%", maxWidth: 340 }}>
            {/*
              VIDEO: cuando tengas hero-video.mp4 en public/fotos/ reemplazá el img por:
              <video autoPlay muted loop playsInline
                style={{ width:"100%", display:"block", objectFit:"cover",
                  objectPosition:"center top", aspectRatio:"9/16" }}>
                <source src="/fotos/hero-video.mp4" type="video/mp4" />
              </video>
            */}
            <img src="/fotos/hero.jpg" alt="Santiago Nievas"
              style={{ width: "100%", display: "block", objectFit: "cover",
                objectPosition: "center top", aspectRatio: "9/16",
                filter: "grayscale(15%) contrast(1.05)" }} />

            <div style={{ position: "absolute", inset: 0,
              background: "linear-gradient(to bottom, rgba(8,8,8,0.1) 0%, rgba(8,8,8,0.05) 40%, rgba(8,8,8,0.75) 100%)" }} />

            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 18px 22px" }}>
              <div style={{ width: "100%", height: 1, background: "rgba(255,255,255,0.15)",
                marginBottom: 12, position: "relative", overflow: "hidden" }}>
                <motion.div key={capIdx} initial={{ width: "0%" }} animate={{ width: "100%" }}
                  transition={{ duration: CAPTION_DURATION / 1000, ease: "linear" }}
                  style={{ position: "absolute", inset: 0, background: "var(--amber)" }} />
              </div>
              <motion.p key={`m-${capIdx}`}
                animate={{ opacity: capVisible ? 1 : 0, y: capVisible ? 0 : 8 }}
                transition={{ duration: 0.3 }} className="display"
                style={{ fontSize: "clamp(18px,2.2vw,26px)", fontWeight: 400,
                  color: "#fff", lineHeight: 1.1, marginBottom: 4 }}>{cap.text}</motion.p>
              <motion.p key={`s-${capIdx}`}
                animate={{ opacity: capVisible ? 1 : 0, y: capVisible ? 0 : 6 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                style={{ fontSize: 11, fontWeight: 300,
                  color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em" }}>{cap.sub}</motion.p>
              <div style={{ display: "flex", gap: 5, marginTop: 10 }}>
                {CAPTIONS.map((_, i) => (
                  <div key={i} style={{ width: i === capIdx ? 16 : 5, height: 2,
                    background: i === capIdx ? "var(--amber)" : "rgba(255,255,255,0.2)",
                    transition: "all 0.4s", borderRadius: 1 }} />
                ))}
              </div>
            </div>

            <div style={{ position: "absolute", top: 14, right: -14, bottom: -14, left: 14,
              border: "1px solid rgba(200,151,42,0.2)", pointerEvents: "none", zIndex: -1 }} />
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}
        className="hero-scroll"
        style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}
          style={{ width: 1, height: 28, background: "linear-gradient(var(--amber), transparent)" }} />
        <span style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase",
          color: "rgba(255,255,255,0.2)" }}>Scroll</span>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto auto;
          }
          .hero-media {
            order: -1;
            min-height: 420px !important;
            max-height: 520px !important;
          }
          .hero-media > div {
            max-width: 100% !important;
            width: 100% !important;
            height: 100% !important;
            min-height: 420px;
            padding: 0 !important;
          }
          .hero-media img, .hero-media video {
            width: 100% !important;
            height: 100% !important;
            min-height: 420px;
            aspect-ratio: unset !important;
            object-fit: cover !important;
            object-position: center 15% !important;
          }
          .hero-scroll { display: none !important; }
        }
      `}</style>
    </section>
  );
}
