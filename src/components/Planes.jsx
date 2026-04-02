import { FadeIn, waLink } from "../utils/helpers";

const PLANS = [
  {
    option: "Opción A",
    name: "Rutina Personalizada",
    tagline: "Entrená con orden y criterio",
    badge: "Pago único",
    desc: "Un plan de entrenamiento hecho a tu medida para entrenar por tu cuenta con estructura clara.",
    price: "$30.000",
    priceNote: "pago único",
    includes: [
      "Evaluación inicial",
      "Rutina personalizada según objetivo y nivel",
      "Adaptada a gimnasio o casa",
      "Entrega digital",
    ],
    excludes: [
      "Seguimiento",
      "Ajustes posteriores",
      "Guía nutricional",
      "Correcciones técnicas en video",
      "Contacto continuo",
    ],
    ideal: "querés una estructura clara para entrenar por tu cuenta.",
    featured: false,
  },
  {
    option: "Opción B",
    name: "Coaching Online",
    tagline: "Entrenamiento con seguimiento real",
    badge: "Más popular",
    desc: "Entrenamiento personalizado con acompañamiento real para quienes quieren resultados sin vivir en el gym.",
    prices: [
      { label: "Mensual", value: "$55.000", note: "/mes" },
      { label: "Trimestral", value: "$50.000", note: "/mes", recommended: true },
    ],
    includes: [
      "Entrenamiento personalizado",
      "Ajustes periódicos según progreso",
      "Seguimiento semanal",
      "Guía nutricional básica",
      "Contacto por mensaje (días hábiles)",
    ],
    excludes: [
      "Entrenamiento presencial",
      "Videollamadas semanales",
      "Ajustes ilimitados",
      "Respuesta inmediata 24/7",
      "Plan nutricional clínico",
    ],
    ideal: "buscás constancia, orden y acompañamiento.",
    featured: true,
  },
  {
    option: "Opción C",
    name: "Coaching Premium",
    tagline: "Acompañamiento completo y ajustes constantes",
    badge: null,
    desc: "Servicio de mayor nivel para quienes quieren delegar el proceso y no improvisar nada.",
    prices: [
      { label: "Trimestral", value: "$85.000", note: "/mes" },
      { label: "Semestral",  value: "$75.000", note: "/mes", recommended: true },
    ],
    includes: [
      "Entrenamiento diseñado 100% a tu medida",
      "Seguimiento cercano y feedback continuo",
      "Ajustes ilimitados según progreso",
      "Nutrición guiada integrada al entrenamiento",
      "Recomendaciones básicas de suplementación",
      "Prioridad en respuestas",
    ],
    excludes: [
      "Entrenamiento presencial",
      "Atención médica o nutrición clínica",
      "Respuesta inmediata 24/7",
      "Control de lesiones o rehabilitación",
    ],
    ideal: "querés resultados sostenibles con acompañamiento total.",
    featured: false,
  },
];

const PlanCard = ({ plan, delay }) => {
  const f = plan.featured;
  return (
    <FadeIn delay={delay}>
      <div style={{
        position: "relative", display: "flex", flexDirection: "column",
        height: "100%", padding: "28px 24px",
        background: f ? "#0a0a0a" : "#fff",
        border: f ? "2px solid #0a0a0a" : "1px solid #e5e5e5",
      }}>
        {/* Badge */}
        {plan.badge && (
          <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap" }}>
            <span style={{ background: "#f59e0b", color: "#451a03", fontSize: 9, fontWeight: 600,
              letterSpacing: "0.18em", textTransform: "uppercase", padding: "3px 10px", display: "inline-block" }}>
              {plan.badge}
            </span>
          </div>
        )}

        {/* Header */}
        <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase",
          color: f ? "#525252" : "#a3a3a3", marginBottom: 10 }}>{plan.option}</p>
        <h3 style={{ fontSize: "clamp(16px,4vw,18px)", fontWeight: 600,
          color: f ? "#fff" : "#0a0a0a", lineHeight: 1.3, marginBottom: 4 }}>{plan.name}</h3>
        <p style={{ fontSize: 13, fontWeight: 500, color: f ? "#d4d4d4" : "#525252", marginBottom: 10 }}>{plan.tagline}</p>
        <p style={{ fontSize: 12, fontWeight: 300, color: "#737373", lineHeight: 1.6, marginBottom: 20 }}>{plan.desc}</p>

        {/* Precio — único o múltiple */}
        {plan.price ? (
          <div style={{ marginBottom: 20 }}>
            <p className="font-serif" style={{ fontSize: "clamp(28px,7vw,34px)", fontWeight: 500,
              color: f ? "#fff" : "#0a0a0a", letterSpacing: "-0.5px", lineHeight: 1 }}>{plan.price}</p>
            <p style={{ fontSize: 11, color: "#a3a3a3", marginTop: 4 }}>{plan.priceNote}</p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
            {plan.prices.map(p => (
              <div key={p.label} style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between",
                padding: "8px 10px", background: f ? "#141414" : "#f9f9f9",
                border: p.recommended ? "1px solid rgba(245,158,11,0.4)" : "1px solid transparent" }}>
                <span style={{ fontSize: 11, color: p.recommended ? "#f59e0b" : (f ? "#737373" : "#a3a3a3"),
                  fontWeight: p.recommended ? 600 : 400, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {p.label}{p.recommended ? " ✦" : ""}
                </span>
                <span className="font-serif" style={{ fontSize: "clamp(20px,4vw,24px)", fontWeight: 500,
                  color: f ? "#fff" : "#0a0a0a" }}>
                  {p.value}<span style={{ fontSize: 11, color: "#a3a3a3", fontFamily: "inherit", fontWeight: 300 }}>{p.note}</span>
                </span>
              </div>
            ))}
          </div>
        )}

        <div style={{ height: 1, background: f ? "#1f1f1f" : "#f0f0f0", marginBottom: 16 }} />

        {/* Features */}
        <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase",
          color: f ? "#525252" : "#a3a3a3", marginBottom: 10 }}>Qué incluye</p>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 7, flex: 1, marginBottom: 16 }}>
          {plan.includes.map(item => (
            <li key={item} style={{ display: "flex", gap: 8, fontSize: "clamp(12px,3vw,13px)",
              fontWeight: 300, lineHeight: 1.5, alignItems: "flex-start" }}>
              <span style={{ color: f ? "#f59e0b" : "#0a0a0a", fontWeight: 600, flexShrink: 0, marginTop: 1 }}>•</span>
              <span style={{ color: f ? "#d4d4d4" : "#525252" }}>{item}</span>
            </li>
          ))}
          {plan.excludes.map(item => (
            <li key={item} style={{ display: "flex", gap: 8, fontSize: "clamp(12px,3vw,13px)",
              fontWeight: 300, lineHeight: 1.5, alignItems: "flex-start" }}>
              <span style={{ color: "#a3a3a3", flexShrink: 0, marginTop: 1 }}>×</span>
              <span style={{ color: "#a3a3a3", textDecoration: "line-through" }}>{item}</span>
            </li>
          ))}
        </ul>

        {/* Ideal si */}
        <p style={{ fontSize: "clamp(12px,3vw,13px)", fontWeight: 300, color: "#737373",
          lineHeight: 1.5, marginBottom: 20 }}>
          <span style={{ fontWeight: 500, color: f ? "#e5e5e5" : "#404040" }}>👉 Ideal si</span> {plan.ideal}
        </p>

        {/* CTA */}
        <a href={waLink(`Hola Santiago, me interesa el plan ${plan.name}. ¿Podés darme más información?`)}
          target="_blank" rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", justifyContent: "center",
            height: 52, background: f ? "#fff" : "#0a0a0a", color: f ? "#0a0a0a" : "#fff",
            fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase",
            textDecoration: "none", transition: "background 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.background = f ? "#f5f5f5" : "#262626"}
          onMouseLeave={e => e.currentTarget.style.background = f ? "#fff" : "#0a0a0a"}>
          Consultar este plan
        </a>
      </div>
    </FadeIn>
  );
};

export default function Planes() {
  return (
    <section id="planes" style={{ background: "#fafafa" }}>
      <div className="pad-mobile" style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>

        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
              <span style={{ width: 20, height: 1, background: "#f59e0b", display: "inline-block" }} />
              <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.22em",
                textTransform: "uppercase", color: "#a3a3a3" }}>Planes</span>
              <span style={{ width: 20, height: 1, background: "#f59e0b", display: "inline-block" }} />
            </div>
            <h2 className="font-serif" style={{ fontSize: "clamp(22px,5vw,40px)", color: "#0a0a0a",
              fontWeight: 500, lineHeight: 1.2, maxWidth: 520, margin: "0 auto" }}>
              Entrenamiento online, según tu nivel de compromiso
            </h2>
          </div>
        </FadeIn>

        {/* Cards */}
        <div className="grid-1-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)",
          gap: 12, alignItems: "stretch" }}>
          {PLANS.map((plan, i) => <PlanCard key={plan.option} plan={plan} delay={0.08 + i * 0.08} />)}
        </div>

        {/* Disclaimer legal */}
        <FadeIn delay={0.4}>
          <p style={{ textAlign: "center", color: "#b0b0b0", fontSize: 11,
            fontWeight: 300, marginTop: 32, maxWidth: 600, margin: "32px auto 0",
            lineHeight: 1.6 }}>
            El servicio no reemplaza asesoramiento médico o nutricional clínico.
            Las recomendaciones se adaptan al contexto del entrenamiento y objetivo físico.
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
