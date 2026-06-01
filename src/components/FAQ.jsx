import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, Label, waLink } from "../utils/helpers";

const FAQS = [
  { q: "¿Necesito tener gimnasio?",
    a: "No. El plan se adapta a tu contexto. Si entrenás en casa, diseño la rutina con el equipamiento que tenés — o sin ninguno. Si tenés acceso a un gimnasio, aprovechamos todo lo disponible." },
  { q: "¿Sirve para principiantes?",
    a: "Sí. De hecho es el momento ideal para empezar. Aprendés desde cero con la técnica correcta, sin malos hábitos que corregir después. El plan empieza donde vos estás." },
  { q: "¿El plan incluye nutrición?",
    a: "Depende del plan. La Rutina Personalizada no incluye nutrición. El Coaching Online incluye guía nutricional básica. El Premium incluye nutrición guiada integrada al entrenamiento." },
  { q: "¿Cómo funciona el seguimiento?",
    a: "El seguimiento se realiza por WhatsApp durante los días hábiles. Revisamos avances, métricas y sensaciones de forma periódica para asegurarnos de que el plan siga funcionando. Tu entrenamiento se gestiona mediante una planificación personalizada en Google Sheets, donde vas a tener acceso a tu progreso, ajustes y actualizaciones de forma organizada. Si algo no está funcionando, se modifica. La idea es acompañarte durante el proceso, no entregarte una rutina y desaparecer." },
  { q: "¿Puedo entrenar en casa?",
    a: "Sí, completamente. El plan se diseña específicamente para tu espacio y equipamiento disponible. Con bandas, mancuernas, peso corporal o lo que tengas a mano." },
  { q: "¿Cuándo recibo la rutina?",
    a: "Dentro de las 48 horas de confirmado el plan. Primero hacemos una evaluación inicial sobre tus objetivos, nivel y disponibilidad. Con eso diseño tu plan a medida." },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section style={{ background: "var(--white)", position: "relative", overflow: "hidden" }}>
      <span className="sec-num" style={{ right: -20, top: -20 }}>07</span>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "clamp(64px,8vw,100px) 40px" }}>

        <FadeIn>
          <Label>Preguntas frecuentes</Label>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end",
            justifyContent: "space-between", gap: 16, marginBottom: "clamp(48px,6vw,72px)" }}>
            <h2 className="display" style={{ fontSize: "clamp(36px,5vw,60px)", fontWeight: 400,
              color: "var(--black)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              Dudas frecuentes.<br />
              <em style={{ fontStyle: "italic", color: "var(--gray4)" }}>Respuestas claras.</em>
            </h2>
            <p style={{ fontSize: 14, fontWeight: 400, color: "var(--gray3)", maxWidth: 340, lineHeight: 1.7 }}>
              Si falta algo, escribime por WhatsApp.
            </p>
          </div>
        </FadeIn>

        <div style={{ maxWidth: 860 }}>
          {FAQS.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div style={{ borderBottom: "1px solid var(--gray5)" }}>
                <button onClick={() => setOpen(open === i ? null : i)}
                  style={{ width: "100%", display: "flex", alignItems: "center",
                    justifyContent: "space-between", gap: 20, padding: "22px 0",
                    background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                  <span style={{ fontSize: "clamp(15px,1.8vw,17px)", fontWeight: 500,
                    color: open === i ? "var(--amber)" : "var(--black)",
                    lineHeight: 1.3, transition: "color 0.3s" }}>{faq.q}</span>
                  <div style={{ width: 32, height: 32, border: "1px solid",
                    borderColor: open === i ? "var(--amber)" : "var(--gray5)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, background: open === i ? "var(--amber)" : "transparent",
                    transition: "all 0.3s" }}>
                    <svg width="12" height="12" fill="none"
                      stroke={open === i ? "var(--black)" : "var(--gray4)"}
                      strokeWidth={2} viewBox="0 0 24 24"
                      style={{ transform: open === i ? "rotate(45deg)" : "none", transition: "transform 0.3s" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M4 12h16"/>
                    </svg>
                  </div>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22,1,0.36,1] }}
                      style={{ overflow: "hidden" }}>
                      <p style={{ fontSize: 15, fontWeight: 400, color: "var(--gray3)",
                        lineHeight: 1.8, paddingBottom: 22, maxWidth: 620 }}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div style={{ marginTop: 48, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16 }}>
            <p style={{ fontSize: 14, fontWeight: 400, color: "var(--gray3)" }}>¿Tenés otra pregunta?</p>
            <a href={waLink("Hola Santiago, tengo una consulta")} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase",
                color: "var(--black)", textDecoration: "none", borderBottom: "1px solid var(--black)",
                paddingBottom: 2, transition: "color 0.3s, border-color 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--amber)"; e.currentTarget.style.borderBottomColor = "var(--amber)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--black)"; e.currentTarget.style.borderBottomColor = "var(--black)"; }}>
              Escribime por WhatsApp →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
