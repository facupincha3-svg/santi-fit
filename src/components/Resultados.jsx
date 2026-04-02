import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, SectionLabel, waLink } from "../utils/helpers";

// 👉 PARA ACTUALIZAR TESTIMONIOS: editá este array.
// Cada testimonio tiene: name, duration, text, before, after, initials
const TESTIMONIALS = [
  {
    name: "Martina López",
    duration: "3 meses · Coaching Online Personalizado",
    text: "Llevaba años intentando bajar de peso sola. Con Santiago entendí que el problema no era yo, era el método. Bajé 8 kilos y nunca pasé hambre. La diferencia con otros coaches es la disponibilidad constante.",
    before: "78 kg",
    after: "70 kg",
    initials: "ML",
  },
  {
    name: "Juan Rodríguez",
    duration: "4 meses · Coaching Premium",
    text: "Trabajo muchas horas y pensé que no tenía tiempo para entrenar. Santiago me armó una rutina de 45 minutos que pude sostener. Los resultados físicos son evidentes, pero el cambio de mentalidad es lo más valioso.",
    before: "92 kg",
    after: "80 kg",
    initials: "JR",
  },
  {
    name: "Valentina García",
    duration: "2 meses · Rutina Personalizada Online",
    text: "Lo que más me sorprendió fue la disponibilidad. Respondía rápido, ajustaba el plan sin que yo lo pidiera. Siento que tengo un coach de verdad, no alguien que me vendió un PDF y desapareció.",
    before: "—",
    after: "+5 kg músculo",
    initials: "VG",
  },
  {
    name: "Nicolás Herrera",
    duration: "5 meses · Coaching Online Personalizado",
    text: "Había probado mil rutinas de YouTube. Acá por primera vez alguien analizó mi punto de partida real y me dijo la verdad: necesitaba cambiar mis hábitos, no solo entrenar más fuerte.",
    before: "Sedentario",
    after: "Entrena 4×/sem",
    initials: "NH",
  },
];

export default function Resultados() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];
  const prev = () => setActive(a => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive(a => (a + 1) % TESTIMONIALS.length);

  return (
    <section id="resultados" className="bg-white" style={{ overflow: "hidden" }}>
      <div className="pad-mobile" style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>

        <FadeIn>
          <SectionLabel>Resultados</SectionLabel>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <h2 className="font-serif font-medium text-neutral-900"
              style={{ fontSize: "clamp(28px, 7vw, 44px)", lineHeight: 1.1 }}>
              Lo que dicen<br />mis alumnos.
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {[prev, next].map((fn, i) => (
                <button key={i} onClick={fn}
                  aria-label={i === 0 ? "Anterior" : "Siguiente"}
                  style={{ width: 48, height: 48, border: "1px solid #e5e5e5", background: "transparent",
                    cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
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
            <div className="grid-1-mobile testi-gap"
              style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 48, alignItems: "start" }}>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
                  <div style={{ width: 52, height: 52, background: "#0a0a0a", color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "Georgia, serif", fontSize: 17, flexShrink: 0 }}>
                    {t.initials}
                  </div>
                  <div>
                    <p style={{ fontWeight: 500, color: "#0a0a0a", fontSize: 14 }}>{t.name}</p>
                    <p style={{ fontSize: 11, color: "#a3a3a3", marginTop: 2, lineHeight: 1.4 }}>{t.duration}</p>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  <div style={{ background: "#fafafa", border: "1px solid #f0f0f0", padding: 16 }}>
                    <p style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a3a3a3", marginBottom: 6 }}>Antes</p>
                    <p className="font-serif" style={{ fontSize: "clamp(18px, 4vw, 22px)", color: "#0a0a0a", fontWeight: 500 }}>{t.before}</p>
                  </div>
                  <div style={{ background: "#0a0a0a", padding: 16 }}>
                    <p style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#f59e0b", marginBottom: 6 }}>Después</p>
                    <p className="font-serif" style={{ fontSize: "clamp(18px, 4vw, 22px)", color: "#fff", fontWeight: 500 }}>{t.after}</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-serif" style={{ fontSize: 64, color: "#f0f0f0", lineHeight: 1, userSelect: "none" }}>"</p>
                <p style={{ color: "#525252", fontWeight: 300, fontSize: "clamp(15px, 3.5vw, 18px)", lineHeight: 1.7, marginTop: -10 }}>
                  {t.text}
                </p>
                <div style={{ display: "flex", gap: 2, marginTop: 20, color: "#f59e0b", fontSize: 17 }}>
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 32 }}>
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} aria-label={`Testimonio ${i + 1}`}
              style={{ height: i === active ? 2 : 1, width: i === active ? 28 : 10,
                background: i === active ? "#0a0a0a" : "#d4d4d4",
                border: "none", cursor: "pointer", padding: 0,
                transition: "all 0.3s", minHeight: 20 }} />
          ))}
        </div>

        <FadeIn delay={0.25}>
          <div className="flex flex-wrap items-center justify-between gap-5 mt-14 pt-10"
            style={{ borderTop: "1px solid #f5f5f5" }}>
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
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Quiero mi transformación
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
