import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, SectionLabel, waLink } from "../utils/helpers";

// 👉 PARA ACTUALIZAR TESTIMONIOS: editá este array
const TESTIMONIALS = [
  {
    name: "Manu",
    age: "21 años",
    duration: "6 meses · Hipertrofia",
    result: "+8 kg · Mayor densidad muscular y mejor postura",
    text: "Buscaba ganar masa muscular y dejar de verme flaco. Con entrenamiento de fuerza estructurado, progresión de cargas y seguimiento constante logré +8 kg en 6 meses con aumento visible de masa muscular y mejor postura corporal.",
    collage: "manu",
    isTomi: false,
  },
  {
    name: "Tomi",
    age: "20 años",
    duration: "1 año y 6 meses · Hipertrofia",
    result: "+16 kg · Cambio físico evidente en 18 meses",
    text: "Empecé con contextura delgada y baja masa muscular. Con planificación a largo plazo, periodización de fuerza e hipertrofia y ajustes en alimentación logré +16 kg en 18 meses. La clave fue la paciencia y el enfoque en el largo plazo.",
    isTomi: true,
  },
  {
    name: "Santi",
    age: "23 años",
    duration: "6 meses · Pérdida de grasa",
    result: "−15 kg · Mejor definición y composición corporal",
    text: "Tenía exceso de grasa corporal y baja condición física. Con entrenamiento de fuerza para preservar masa muscular, déficit calórico controlado y seguimiento semanal logré −15 kg en 6 meses con mejora visible en definición.",
    collage: "santi",
    isTomi: false,
  },
  {
    name: "Elías",
    age: "25 años",
    duration: "5 meses · Pérdida de grasa",
    result: "−5 kg · Mayor definición y condición general",
    text: "Buscaba reducir grasa y verme más definido. Con entrenamiento estructurado, control de volumen y progresión, acompañado de ajustes en hábitos, logré −5 kg en 5 meses con mayor definición y mejor condición general.",
    collage: "elias",
    isTomi: false,
  },
];

const IMG_BASE = "/fotos";

export default function Resultados() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];
  const prev = () => setActive(a => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive(a => (a + 1) % TESTIMONIALS.length);

  return (
    <section id="resultados" style={{ background: "#fff", overflow: "hidden" }}>
      <div className="pad-mobile" style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>

        <FadeIn>
          <SectionLabel>Resultados</SectionLabel>

          {/* Disclaimer */}
          <p style={{ fontSize: 13, fontWeight: 300, color: "#a3a3a3", fontStyle: "italic",
            marginBottom: 28, maxWidth: 620, lineHeight: 1.6 }}>
            "Resultados logrados mediante entrenamiento personalizado, técnica correcta y constancia. Cada proceso es individual."
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end",
            justifyContent: "space-between", gap: 16, marginBottom: 36 }}>
            <h2 className="font-serif" style={{ fontSize: "clamp(28px,7vw,44px)",
              color: "#0a0a0a", fontWeight: 500, lineHeight: 1.1 }}>
              Lo que dicen<br />mis alumnos.
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {[prev, next].map((fn, i) => (
                <button key={i} onClick={fn}
                  aria-label={i === 0 ? "Anterior" : "Siguiente"}
                  style={{ width: 48, height: 48, border: "1px solid #e5e5e5",
                    background: "transparent", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#737373", transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#0a0a0a"; e.currentTarget.style.color = "#0a0a0a"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#e5e5e5"; e.currentTarget.style.color = "#737373"; }}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={i === 0 ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
                  </svg>
                </button>
              ))}
              <span style={{ fontSize: 11, color: "#a3a3a3", letterSpacing: "0.2em", marginLeft: 8 }}>
                {String(active + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </FadeIn>

        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>

            {/* Nombre + resultado */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div>
                <p style={{ fontSize: 18, fontWeight: 600, color: "#0a0a0a" }}>{t.name}</p>
                <p style={{ fontSize: 12, color: "#a3a3a3", marginTop: 2 }}>{t.age} · {t.duration}</p>
              </div>
              <div style={{ marginLeft: "auto", background: "#0a0a0a", padding: "6px 14px" }}>
                <p style={{ fontSize: 11, color: "#f59e0b", letterSpacing: "0.12em",
                  textTransform: "uppercase", fontWeight: 600 }}>{t.result}</p>
              </div>
            </div>

            {/* Fotos */}
            {t.isTomi ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 24 }}>
                <p style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase",
                  color: "#a3a3a3", marginBottom: 4 }}>Progresión completa — 18 meses</p>
                <img src={`${IMG_BASE}/collage_tomi_antes.jpg`} alt="Tomi antes"
                  style={{ width: "100%", display: "block" }} />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                  <div>
                    <p style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase",
                      color: "#a3a3a3", marginBottom: 4 }}>Primeros meses</p>
                    <img src={`${IMG_BASE}/collage_tomi_despues_a.jpg`} alt="Tomi progreso"
                      style={{ width: "100%", display: "block" }} />
                  </div>
                  <div>
                    <p style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase",
                      color: "#f59e0b", marginBottom: 4 }}>Resultado final</p>
                    <img src={`${IMG_BASE}/collage_tomi_despues_b.jpg`} alt="Tomi resultado"
                      style={{ width: "100%", display: "block" }} />
                  </div>
                </div>
              </div>
            ) : (
              <img src={`${IMG_BASE}/collage_${t.collage}.jpg`}
                alt={`${t.name} antes y después`}
                style={{ width: "100%", display: "block", marginBottom: 24 }} />
            )}

            {/* Texto + resumen */}
            <div className="grid-1-mobile testi-gap"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, alignItems: "start" }}>
              <div>
                <p className="font-serif" style={{ fontSize: 56, color: "#f0f0f0", lineHeight: 1, userSelect: "none" }}>"</p>
                <p style={{ color: "#525252", fontWeight: 300,
                  fontSize: "clamp(14px,3.5vw,17px)", lineHeight: 1.7, marginTop: -8 }}>
                  {t.text}
                </p>
                <div style={{ display: "flex", gap: 2, marginTop: 16, color: "#f59e0b", fontSize: 16 }}>
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
              </div>
              <div style={{ background: "#fafafa", padding: 20, borderLeft: "2px solid #f59e0b" }}>
                <p style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
                  color: "#a3a3a3", marginBottom: 12 }}>Resumen</p>
                {[
                  { label: "Objetivo",   value: t.duration.split("·")[1]?.trim() },
                  { label: "Duración",   value: t.duration.split("·")[0]?.trim() },
                  { label: "Resultado",  value: t.result.split("·")[0]?.trim() },
                ].map(item => (
                  <div key={item.label} style={{ marginBottom: 10 }}>
                    <p style={{ fontSize: 10, color: "#a3a3a3", textTransform: "uppercase", letterSpacing: "0.15em" }}>{item.label}</p>
                    <p style={{ fontSize: 14, fontWeight: 500, color: "#0a0a0a", marginTop: 2 }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 28 }}>
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} aria-label={`Testimonio ${i + 1}`}
              style={{ height: i === active ? 2 : 1, width: i === active ? 28 : 10,
                background: i === active ? "#0a0a0a" : "#d4d4d4",
                border: "none", cursor: "pointer", padding: 0,
                transition: "all 0.3s", minHeight: 20 }} />
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.25}>
          <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid #f5f5f5",
            display: "flex", flexWrap: "wrap", alignItems: "center",
            justifyContent: "space-between", gap: 20 }}>
            <p style={{ color: "#737373", fontWeight: 300, fontSize: 14, maxWidth: 320, lineHeight: 1.6 }}>
              ¿Querés ser el próximo? Un mensaje es todo lo que separa tu antes de tu después.
            </p>
            <a href={waLink("Hola Santiago, vi los resultados de tus alumnos y me interesa empezar.")}
              target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, height: 52,
                padding: "0 28px", background: "#0a0a0a", color: "#fff",
                fontSize: 13, fontWeight: 500, textDecoration: "none",
                whiteSpace: "nowrap", transition: "background 0.2s",
                width: "100%", maxWidth: 320, justifyContent: "center" }}
              onMouseEnter={e => e.currentTarget.style.background = "#262626"}
              onMouseLeave={e => e.currentTarget.style.background = "#0a0a0a"}>
              Quiero mi transformación
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
