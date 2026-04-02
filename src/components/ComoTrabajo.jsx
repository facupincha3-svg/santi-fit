import { FadeIn, SectionLabel, waLink } from "../utils/helpers";

const STEPS = [
  { num: "01", title: "Conversación inicial", desc: "Una charla de 20 minutos para entender dónde estás, qué querés lograr y qué te impidió lograrlo hasta ahora. Sin juicios, sin plantillas genéricas." },
  { num: "02", title: "Plan personalizado", desc: "Diseño tu rutina y guía nutricional desde cero. Adaptada a tu cuerpo, tu tiempo y tu nivel real. No un PDF genérico: un plan tuyo." },
  { num: "03", title: "Puesta en marcha", desc: "Arrancamos. Te explico cada ejercicio, cada decisión del plan y resuelvo tus dudas desde el primer día. El arranque es el momento más importante." },
  { num: "04", title: "Seguimiento y ajustes", desc: "Revisamos métricas cada semana y ajustamos lo que sea necesario. Tu progreso es dinámico, tu plan también." },
];

export default function ComoTrabajo() {
  return (
    <section id="como-trabajo" className="py-20 md:py-40" style={{ background: "#0f0f0f" }}>
      <div className="max-w-6xl mx-auto pad-mobile" style={{ padding: "80px 24px" }}>

        <FadeIn>
          <SectionLabel light>Proceso</SectionLabel>
          <div className="flex flex-wrap justify-between items-end gap-4 mb-12 md:mb-20">
            <h2 className="font-serif text-white font-medium"
              style={{ fontSize: "clamp(28px, 7vw, 44px)", lineHeight: 1.1 }}>
              Cómo<br />trabajo.
            </h2>
            <p className="font-light leading-relaxed" style={{ color: "#737373", fontSize: "clamp(14px, 3.5vw, 16px)", maxWidth: 400 }}>
              Un proceso pensado para que nada quede librado al azar. Cada paso tiene un propósito claro.
            </p>
          </div>
        </FadeIn>

        <div className="grid-1-mobile" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
          {STEPS.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.08}>
              <div style={{
                background: "#0f0f0f", padding: "36px 28px", transition: "background 0.3s",
                borderRight: i % 2 === 0 ? "1px solid #2a2a2a" : "none",
                borderBottom: i < 2 ? "1px solid #2a2a2a" : "none"
              }}
                onMouseEnter={e => e.currentTarget.style.background = "#1a1a1a"}
                onMouseLeave={e => e.currentTarget.style.background = "#0f0f0f"}>
                <p className="font-serif font-medium mb-4" style={{ fontSize: "clamp(36px, 8vw, 44px)", color: "rgba(245,158,11,0.3)", lineHeight: 1 }}>
                  {step.num}
                </p>
                <h3 className="text-white font-medium mb-3" style={{ fontSize: "clamp(15px, 3.5vw, 17px)" }}>{step.title}</h3>
                <p className="font-light leading-relaxed" style={{ color: "#737373", fontSize: "clamp(13px, 3vw, 14px)" }}>{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="flex flex-wrap items-center justify-between gap-5 mt-10 pt-10"
            style={{ borderTop: "1px solid #2a2a2a" }}>
            <p className="font-light" style={{ color: "#737373", fontSize: 14, maxWidth: 340, lineHeight: 1.6 }}>
              ¿Querés saber si este proceso es para vos? Una conversación no cuesta nada.
            </p>
            <a href={waLink("Hola Santiago, me gustaría saber más sobre cómo trabajás.")}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-medium transition-all"
              style={{ height: 52, padding: "0 28px", border: "1px solid #fff", color: "#fff",
                fontSize: 13, textDecoration: "none", whiteSpace: "nowrap",
                width: "100%", maxWidth: 320, justifyContent: "center" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#0a0a0a"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#fff"; }}>
              Empezar ahora
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
