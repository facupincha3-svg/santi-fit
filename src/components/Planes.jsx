import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, Label, waLink } from "../utils/helpers";

const PLANS = [
  {
    id: "a", name: "Rutina Personalizada", tag: "Pago único", badge: null, featured: false,
    price: "$30.000", priceNote: "pago único",
    desc: "Estructura clara. Entrenás solo, con criterio.",
    features: [
      { label: "Rutina personalizada",    val: true  },
      { label: "Seguimiento semanal",     val: false },
      { label: "Ajustes del plan",        val: false },
      { label: "Soporte por WhatsApp",    val: false },
      { label: "Orientación alimentaria",  val: false },
      { label: "Prioridad en respuestas", val: false },
    ],
  },
  {
    id: "b", name: "Coaching Online", tag: "Trimestral", badge: "🔥 PROGRAMA RECOMENDADO", featured: true,
    prices: [
      { label: "Mensual",                        value: "$55.000", rec: false },
      { label: "Trimestral ✦ Ahorrás $15.000",   value: "$50.000", rec: true  },
    ],
    saving: "Ahorrás $15.000 eligiendo el plan trimestral",
    desc: "Entrenamiento, nutrición y seguimiento real. 90 días que cambian el resultado.",
    features: [
      { label: "Rutina personalizada",                   val: true  },
      { label: "Seguimiento semanal y ajustes del plan", val: true  },
      { label: "Soporte por WhatsApp",                   val: true  },
      { label: "Corrección técnica por video",           val: true  },
      { label: "Orientación alimentaria",                val: true  },
      { label: "Plan nutricional por nutricionista",     val: false },
      { label: "Ajustes nutricionales periódicos",       val: false },
      { label: "Coordinación entrenamiento + nutrición", val: false },
      { label: "Prioridad en respuestas",                val: false },
    ],
  },
  {
    id: "c", name: "Premium", tag: "Trimestral / Semestral", badge: null, featured: false,
    prices: [
      { label: "Trimestral", value: "$85.000", rec: false },
      { label: "Semestral",  value: "$75.000", rec: true  },
    ],
    desc: "Máximo nivel. Delegás el proceso, ejecutás el plan.",
    features: [
      { label: "Rutina personalizada",                   val: true },
      { label: "Seguimiento semanal y ajustes del plan", val: true },
      { label: "Soporte por WhatsApp",                   val: true },
      { label: "Corrección técnica por video",           val: true },
      { label: "Orientación alimentaria",                val: true },
      { label: "Plan nutricional por nutricionista",     val: true },
      { label: "Ajustes nutricionales periódicos",       val: true },
      { label: "Coordinación entrenamiento + nutrición", val: true },
      { label: "Prioridad en respuestas",                val: true },
    ],
  },
];

const COMPARE_ROWS = [
  "Rutina personalizada",
  "Seguimiento semanal",
  "Ajustes del plan",
  "Soporte por WhatsApp",
  "Orientación alimentaria",
  "Plan nutricional por nutricionista",
  "Prioridad en respuestas",
];

const CompareTable = () => {
  const [openRow, setOpenRow] = useState(null);
  return (
    <div style={{ marginTop: 64 }}>
      <FadeIn>
        <p style={{ fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase",
          color: "var(--gray4)", marginBottom: 28, display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 20, height: 1, background: "var(--amber)", display: "inline-block" }} />
          Comparativa de planes
        </p>
      </FadeIn>

      {/* Desktop */}
      <div className="compare-desktop">
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: "12px 16px", fontSize: 12, fontWeight: 500,
                color: "var(--gray4)", letterSpacing: "0.1em",
                borderBottom: "1px solid var(--gray2)", width: "34%" }}>Característica</th>
              {PLANS.map(p => (
                <th key={p.id} style={{ textAlign: "center", padding: "12px 16px",
                  fontSize: 13, fontWeight: p.featured ? 700 : 500,
                  color: p.featured ? "var(--amber)" : "rgba(255,255,255,0.6)",
                  borderBottom: "1px solid var(--gray2)" }}>{p.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARE_ROWS.map((row, i) => (
              <tr key={row} style={{ background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)" }}>
                <td style={{ padding: "14px 16px", fontSize: 14, fontWeight: 400,
                  color: "var(--gray4)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>{row}</td>
                {PLANS.map(p => {
                  const feat = p.features.find(f => f.label === row);
                  return (
                    <td key={p.id} style={{ textAlign: "center", padding: "14px 16px",
                      borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                      {feat?.val
                        ? <span style={{ color: "var(--amber)", fontSize: 16 }}>✓</span>
                        : <span style={{ color: "var(--gray2)", fontSize: 14 }}>—</span>}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile accordion */}
      <div className="compare-mobile">
        {PLANS.map((p, pi) => (
          <div key={p.id} style={{ borderBottom: "1px solid var(--gray2)" }}>
            <button onClick={() => setOpenRow(openRow === pi ? null : pi)}
              style={{ width: "100%", display: "flex", alignItems: "center",
                justifyContent: "space-between", padding: "16px 0",
                background: "none", border: "none", cursor: "pointer" }}>
              <span style={{ fontSize: 15, fontWeight: p.featured ? 700 : 500,
                color: p.featured ? "var(--amber)" : "#fff" }}>{p.name}</span>
              <svg width="14" height="14" fill="none" stroke="var(--gray4)" strokeWidth={1.5} viewBox="0 0 24 24"
                style={{ transform: openRow === pi ? "rotate(180deg)" : "none", transition: "transform 0.3s" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <AnimatePresence>
              {openRow === pi && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                  style={{ overflow: "hidden" }}>
                  <div style={{ paddingBottom: 16, display: "flex", flexDirection: "column", gap: 10 }}>
                    {p.features.map(f => (
                      <div key={f.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span style={{ fontSize: 14, fontWeight: 400, color: "rgba(255,255,255,0.65)" }}>{f.label}</span>
                        {f.val
                          ? <span style={{ color: "var(--amber)", fontSize: 15 }}>✓</span>
                          : <span style={{ color: "var(--gray2)", fontSize: 13 }}>—</span>}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <style>{`
        .compare-mobile { display: none; }
        @media (max-width: 768px) {
          .compare-desktop { display: none; }
          .compare-mobile  { display: block; }
        }
      `}</style>
    </div>
  );
};

export default function Planes() {
  return (
    <section id="planes" style={{ background: "var(--black)", position: "relative", overflow: "hidden" }}>
      <span className="sec-num" style={{ right: -20, top: -20, color: "rgba(200,151,42,0.04)" }}>05</span>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "clamp(64px,8vw,100px) 40px" }}>

        <FadeIn>
          <Label light>Planes</Label>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end",
            justifyContent: "space-between", gap: 16, marginBottom: "clamp(48px,7vw,72px)" }}>
            <h2 className="display" style={{ fontSize: "clamp(36px,5vw,60px)", fontWeight: 400,
              color: "#fff", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              Invertí en vos.<br />
              <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.3)" }}>Elegí tu plan.</em>
            </h2>
            <p style={{ fontSize: 14, fontWeight: 400, color: "var(--gray4)", maxWidth: 360, lineHeight: 1.7 }}>
              Tres niveles de compromiso. Todas con seguimiento real.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr 1fr",
          gap: 12, alignItems: "start" }} className="plans-grid">
          {PLANS.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.1}>
              <div style={{
                position: "relative",
                padding: p.featured ? "clamp(28px,3vw,44px)" : "clamp(24px,2.5vw,36px)",
                background: p.featured ? "var(--gray1)" : "transparent",
                border: p.featured ? "1px solid var(--amber)" : "1px solid var(--gray2)",
                boxShadow: p.featured ? "0 0 40px rgba(200,151,42,0.08), 0 0 80px rgba(200,151,42,0.04)" : "none",
              }}
                onMouseEnter={e => { if (!p.featured) e.currentTarget.style.borderColor = "var(--gray3)"; }}
                onMouseLeave={e => { if (!p.featured) e.currentTarget.style.borderColor = "var(--gray2)"; }}>

                {p.featured && <div style={{ position: "absolute", top: 0, left: 0, right: 0,
                  height: 2, background: "var(--amber)" }} />}

                {p.badge && (
                  <div style={{ marginBottom: 16 }}>
                    <span style={{ display: "inline-block", background: "var(--amber)",
                      color: "var(--black)", fontSize: 9, fontWeight: 700,
                      letterSpacing: "0.2em", textTransform: "uppercase", padding: "4px 12px" }}>
                      {p.badge}
                    </span>
                  </div>
                )}

                <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.25em",
                  textTransform: "uppercase", marginBottom: 8,
                  color: p.featured ? "rgba(255,255,255,0.35)" : "var(--gray3)" }}>{p.tag}</p>

                <h3 className="display" style={{ fontSize: p.featured ? "clamp(20px,2.5vw,26px)" : "clamp(18px,2vw,22px)",
                  fontWeight: 500, color: "#fff", lineHeight: 1.2, marginBottom: 8 }}>{p.name}</h3>

                <p style={{ fontSize: 13, fontWeight: 300, color: "var(--gray3)",
                  lineHeight: 1.6, marginBottom: 24 }}>{p.desc}</p>

                {p.price ? (
                  <div style={{ marginBottom: 28 }}>
                    <p className="display" style={{ fontSize: p.featured ? "clamp(32px,4vw,44px)" : "clamp(28px,3vw,36px)",
                      fontWeight: 400, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1 }}>{p.price}</p>
                    <p style={{ fontSize: 11, color: "var(--gray4)", marginTop: 4 }}>{p.priceNote}</p>
                  </div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 28 }}>
                    {p.prices.map(pr => (
                      <div key={pr.label} style={{ display: "flex", alignItems: "baseline",
                        justifyContent: "space-between", padding: "8px 12px",
                        background: pr.rec ? (p.featured ? "rgba(200,151,42,0.1)" : "rgba(200,151,42,0.06)") : "rgba(255,255,255,0.03)",
                        border: pr.rec ? "1px solid rgba(200,151,42,0.3)" : "1px solid transparent" }}>
                        <span style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase",
                          color: pr.rec ? "var(--amber)" : "var(--gray4)", fontWeight: pr.rec ? 600 : 400 }}>
                          {pr.label}
                        </span>
                        <span className="display" style={{ fontSize: p.featured ? "clamp(22px,3vw,28px)" : "clamp(18px,2.5vw,24px)",
                          fontWeight: 400, color: "#fff", letterSpacing: "-0.01em" }}>
                          {pr.value}<span style={{ fontSize: 11, color: "var(--gray4)", fontFamily: "inherit", fontWeight: 300 }}>/mes</span>
                        </span>
                      </div>
                    ))}
                    {p.saving && (
                      <p style={{ fontSize: 11, color: "var(--amber)", fontWeight: 600, marginTop: 6 }}>
                        {p.saving}
                      </p>
                    )}
                  </div>
                )}

                <div style={{ height: 1, background: p.featured ? "rgba(255,255,255,0.08)" : "var(--gray2)", marginBottom: 20 }} />

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                  {p.features.map(f => (
                    <li key={f.label} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, fontWeight: 400 }}>
                      <span style={{ fontSize: f.val ? 14 : 13, color: f.val ? "var(--amber)" : "var(--gray2)",
                        flexShrink: 0, width: 16, textAlign: "center" }}>{f.val ? "✓" : "—"}</span>
                      <span style={{ color: f.val ? "rgba(255,255,255,0.7)" : "var(--gray3)" }}>{f.label}</span>
                    </li>
                  ))}
                </ul>

                <a href={waLink(`Hola Santiago, me interesa el plan ${p.name}. ¿Podés darme más información?`)}
                  target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center",
                    height: p.featured ? 52 : 46, background: p.featured ? "var(--amber)" : "transparent",
                    border: p.featured ? "none" : "1px solid var(--gray2)",
                    color: p.featured ? "var(--black)" : "rgba(255,255,255,0.5)",
                    fontSize: 10, fontWeight: p.featured ? 700 : 500,
                    letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}
                  onMouseEnter={e => {
                    if (p.featured) { e.currentTarget.style.background = "#e5b040"; }
                    else { e.currentTarget.style.borderColor = "var(--amber)"; e.currentTarget.style.color = "var(--amber)"; }
                  }}
                  onMouseLeave={e => {
                    if (p.featured) { e.currentTarget.style.background = "var(--amber)"; }
                    else { e.currentTarget.style.borderColor = "var(--gray2)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }
                  }}>
                  {p.featured ? "Quiero transformarme →" : "Empezar ahora"}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        <CompareTable />

        <FadeIn delay={0.4}>
          <p style={{ textAlign: "center", color: "var(--gray3)", fontSize: 11, fontWeight: 300,
            marginTop: 40, maxWidth: 560, margin: "40px auto 0", lineHeight: 1.6, fontStyle: "italic" }}>
            El servicio no reemplaza asesoramiento médico o nutricional clínico.
          </p>
        </FadeIn>

        <style>{`
          @media (max-width: 768px) { .plans-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>
    </section>
  );
}
