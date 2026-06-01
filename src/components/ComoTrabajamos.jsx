import { FadeIn, Label, waLink } from "../utils/helpers";

const STEPS = [
  {
    num: "01", title: "Diagnóstico inicial",
    desc: "Analizamos tu punto de partida, objetivos y disponibilidad.",
    icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z"/></svg>,
  },
  {
    num: "02", title: "Plan personalizado",
    desc: "Diseño tu rutina y guía nutricional desde cero, adaptada a vos.",
    icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/></svg>,
  },
  {
    num: "03", title: "Entrenamiento",
    desc: "Arrancamos. Cada ejercicio explicado y cada decisión justificada.",
    icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>,
  },
  {
    num: "04", title: "Seguimiento y ajustes",
    desc: "Revisamos métricas cada semana y ajustamos lo que sea necesario.",
    icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/></svg>,
  },
];

export default function ComoTrabajamos() {
  return (
    <section id="como-trabajo" style={{ background: "var(--black)", position: "relative", overflow: "hidden" }}>
      <span className="sec-num" style={{ left: -20, top: -20, color: "rgba(200,151,42,0.04)" }}>03</span>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "clamp(64px,8vw,100px) 40px" }}>

        <FadeIn>
          <Label light>Proceso</Label>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end",
            justifyContent: "space-between", gap: 16, marginBottom: "clamp(48px,7vw,80px)" }}>
            <h2 className="display" style={{ fontSize: "clamp(36px,5vw,60px)", fontWeight: 400,
              color: "#fff", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              Cómo<br />
              <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.3)" }}>trabajamos.</em>
            </h2>
            <p style={{ fontSize: 14, fontWeight: 400, color: "var(--gray4)", maxWidth: 360, lineHeight: 1.7 }}>
              Cuatro pasos. Sin sorpresas, sin improvisaciones.
            </p>
          </div>
        </FadeIn>

        <div style={{ position: "relative" }}>
          <div className="timeline-line" style={{ position: "absolute", top: 26, left: 0,
            right: 0, height: 1, background: "var(--gray2)", zIndex: 0 }} />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)",
            gap: 24, position: "relative", zIndex: 1 }} className="timeline-grid">
            {STEPS.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.1}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                  <div style={{ width: 52, height: 52, display: "flex", alignItems: "center",
                    justifyContent: "center", background: "var(--black)",
                    border: "1px solid var(--gray2)", marginBottom: 28, color: "var(--amber)" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--amber)"; e.currentTarget.style.background = "rgba(200,151,42,0.08)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--gray2)"; e.currentTarget.style.background = "var(--black)"; }}>
                    {step.icon}
                  </div>
                  <p style={{ fontSize: 10, letterSpacing: "0.25em", color: "var(--amber)",
                    marginBottom: 8, fontWeight: 500 }}>{step.num}</p>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: "#fff",
                    marginBottom: 10, lineHeight: 1.2 }}>{step.title}</h3>
                  <p style={{ fontSize: 14, fontWeight: 400, color: "var(--gray4)",
                    lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.4}>
          <div style={{ marginTop: 64, paddingTop: 40, borderTop: "1px solid var(--gray2)",
            display: "flex", flexWrap: "wrap", alignItems: "center",
            justifyContent: "space-between", gap: 24 }}>
            <p style={{ fontSize: 14, fontWeight: 400, color: "var(--gray3)",
              maxWidth: 360, lineHeight: 1.6 }}>
              ¿Querés saber si este proceso es para vos? Una conversación no cuesta nada.
            </p>
            <a href={waLink("Hola Santiago, quiero saber más sobre el proceso")}
              target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.22em",
                textTransform: "uppercase", border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff", padding: "14px 28px", textDecoration: "none" }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--amber)"; e.currentTarget.style.borderColor = "var(--amber)"; e.currentTarget.style.color = "var(--black)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "#fff"; }}>
              Empezar ahora →
            </a>
          </div>
        </FadeIn>

        <style>{`
          @media (max-width: 768px) {
            .timeline-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
            .timeline-line { display: none !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
