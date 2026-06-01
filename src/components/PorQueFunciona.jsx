import { FadeIn, Label } from "../utils/helpers";

const CARDS = [
  {
    icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0"/></svg>,
    title: "Rutina personalizada",
    desc: "Diseñada para tu cuerpo, objetivo y disponibilidad. Sin genéricos.",
  },
  {
    icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/></svg>,
    title: "Seguimiento real",
    desc: "WhatsApp en días hábiles. Dudas resueltas, plan ajustado cuando hace falta.",
  },
  {
    icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/></svg>,
    title: "Ajustes constantes",
    desc: "Revisamos métricas cada semana. El plan se mueve con vos.",
  },
  {
    icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253"/></svg>,
    title: "Adaptado a tu realidad",
    desc: "Con equipamiento o sin él. El plan se diseña para tu contexto real.",
  },
];

export default function PorQueFunciona() {
  return (
    <section style={{ background: "var(--white)", position: "relative", overflow: "hidden" }}>
      <span className="sec-num" style={{ right: -20, top: -20 }}>02</span>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "clamp(64px,8vw,100px) 40px" }}>

        <FadeIn>
          <Label>Método</Label>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end",
            justifyContent: "space-between", gap: 16, marginBottom: "clamp(40px,6vw,64px)" }}>
            <h2 className="display" style={{ fontSize: "clamp(36px,5vw,60px)", fontWeight: 400,
              color: "var(--black)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              ¿Por qué<br />
              <em style={{ fontStyle: "italic", color: "var(--gray4)" }}>funciona?</em>
            </h2>
            <p style={{ fontSize: 14, fontWeight: 400, color: "var(--gray3)", maxWidth: 360, lineHeight: 1.7 }}>
              Cuatro pilares que hacen la diferencia entre un plan genérico y uno que realmente transforma.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: 2 }}>
          {CARDS.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.08}>
              <div
                style={{ padding: "clamp(28px,3vw,40px)", background: "var(--white)",
                  border: "1px solid var(--gray5)", transition: "border-color 0.3s, transform 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--amber)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--gray5)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                <div style={{ width: 52, height: 52, display: "flex", alignItems: "center",
                  justifyContent: "center", border: "1px solid var(--gray5)",
                  marginBottom: 24, color: "var(--amber)" }}>
                  {card.icon}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--black)", marginBottom: 10 }}>{card.title}</h3>
                <p style={{ fontSize: 14, fontWeight: 400, color: "var(--gray3)", lineHeight: 1.65 }}>{card.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
