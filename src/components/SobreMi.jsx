import { FadeIn, Label, waLink } from "../utils/helpers";

export default function SobreMi() {
  const stats = [
    { v: "10+", l: "Años entrenando" },
    { v: "15+", l: "Alumnos"         },
    { v: "98%", l: "Satisfacción"    },
  ];

  return (
    <section id="sobre-mi" style={{ background: "var(--white)", position: "relative", overflow: "hidden" }}>
      <span className="sec-num" style={{ right: -20, top: -20 }}>04</span>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "clamp(64px,8vw,100px) 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 80, alignItems: "center" }}
          className="col-1">

          <FadeIn x={-30} y={0}>
            <div style={{ position: "relative", maxWidth: 480, margin: "0 auto", width: "100%" }}>
              <div style={{ position: "absolute", top: 20, left: 20, right: -20, bottom: -20,
                border: "1px solid rgba(200,151,42,0.2)", pointerEvents: "none" }} />
              <div style={{ position: "relative", overflow: "hidden", aspectRatio: "4/5", background: "#111" }}>
                <img src="/fotos/sobre-mi.jpg" alt="Santiago Nievas" className="bw" loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 15%" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px",
                  background: "linear-gradient(transparent, rgba(8,8,8,0.8))" }}>
                  <p className="display" style={{ fontSize: 12, fontWeight: 300, letterSpacing: "0.3em",
                    textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>Coach · La Plata, ARG</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <Label>Sobre mí</Label>
            <h2 className="display" style={{ fontSize: "clamp(40px,5vw,64px)", fontWeight: 400,
              lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--black)", marginBottom: 28 }}>
              Soy Santiago<br />
              <em style={{ fontStyle: "italic", color: "var(--gray3)" }}>Nievas.</em>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14,
              color: "var(--gray3)", fontSize: 15, fontWeight: 400, lineHeight: 1.8, maxWidth: 440 }}>
              <p>Coach de fitness y nutrición. 5 años acompañando personas que quieren transformarse sin sacrificar su vida.</p>
              <p>Diagnósticos reales, planes adaptados, seguimiento constante. No desaparezco después del primer mes.</p>
              <p style={{ color: "var(--gray4)", fontSize: 13, fontStyle: "italic" }}>
                Si sentiste que el problema eras vos, probablemente era el método.
              </p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 0, marginTop: 36,
              paddingTop: 36, borderTop: "1px solid var(--gray5)" }}>
              {stats.map((s, i) => (
                <FadeIn key={s.l} delay={0.25 + i * 0.08}>
                  <div style={{ paddingRight: 32, marginRight: 32,
                    borderRight: i < 2 ? "1px solid var(--gray5)" : "none" }}>
                    <p className="display" style={{ fontSize: "clamp(28px,4vw,40px)",
                      fontWeight: 400, color: "var(--black)", lineHeight: 1 }}>{s.v}</p>
                    <p style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
                      color: "var(--gray4)", marginTop: 6 }}>{s.l}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.5}>
              <a href={waLink("Hola Santiago, me gustaría conocer más sobre vos y tu método.")}
                target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 12, marginTop: 32,
                  fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase",
                  color: "var(--black)", textDecoration: "none",
                  borderBottom: "1px solid var(--black)", paddingBottom: 2 }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--amber)"; e.currentTarget.style.borderBottomColor = "var(--amber)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--black)"; e.currentTarget.style.borderBottomColor = "var(--black)"; }}>
                Escribirme por WhatsApp →
              </a>
            </FadeIn>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
