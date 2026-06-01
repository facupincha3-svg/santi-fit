import { FadeIn } from "../utils/helpers";

export default function CTAFinal() {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--black)",
      padding: "clamp(80px,12vw,140px) 40px", textAlign: "center" }}>

      <div style={{ position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)", width: "60vw", height: "60vw",
        maxWidth: 600, maxHeight: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(200,151,42,0.07) 0%, transparent 70%)",
        pointerEvents: "none" }} />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center",
        gap: 16, marginBottom: 40 }}>
        <div style={{ width: 40, height: 1, background: "var(--amber)", opacity: 0.4 }} />
        <span style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase",
          color: "rgba(255,255,255,0.3)", fontWeight: 400 }}>El momento es ahora</span>
        <div style={{ width: 40, height: 1, background: "var(--amber)", opacity: 0.4 }} />
      </div>

      <FadeIn>
        <h2 className="display" style={{ fontSize: "clamp(32px,5.5vw,72px)", fontWeight: 400,
          color: "#fff", lineHeight: 1.1, letterSpacing: "-0.02em",
          maxWidth: 800, margin: "0 auto 24px" }}>
          Dentro de 6 meses vas a<br />
          <em style={{ fontStyle: "italic", color: "var(--amber)" }}>
            agradecer haber empezado hoy.
          </em>
        </h2>

        <p style={{ fontSize: "clamp(14px,1.6vw,18px)", fontWeight: 300,
          color: "rgba(255,255,255,0.45)", lineHeight: 1.7,
          maxWidth: 420, margin: "0 auto 48px" }}>
          Una decisión. Una conversación. Un mensaje.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center",
          justifyContent: "center", gap: 14 }}>
          <a href="https://wa.me/5492215056142?text=Hola%20Santiago%2C%20quiero%20empezar%20mi%20transformaci%C3%B3n%20hoy"
            target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 12,
              background: "var(--amber)", color: "var(--black)",
              fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase",
              padding: "18px 40px", textDecoration: "none",
              boxShadow: "0 0 40px rgba(200,151,42,0.2), 0 0 80px rgba(200,151,42,0.08)" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#e5b040"; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "var(--amber)"; e.currentTarget.style.transform = "translateY(0)"; }}>
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Empezar mi transformación
          </a>
          <a href="#planes"
            onClick={e => { e.preventDefault(); document.querySelector("#planes")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)", textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.15)", paddingBottom: 2 }}
            onMouseEnter={e => { e.currentTarget.style.color = "rgba(255,255,255,0.7)"; e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.4)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.35)"; e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.15)"; }}>
            Ver planes
          </a>
        </div>

        <p style={{ marginTop: 32, fontSize: 12, fontWeight: 300,
          color: "rgba(255,255,255,0.2)", letterSpacing: "0.05em" }}>
          Sin compromiso · Respuesta en menos de 24 hs
        </p>
      </FadeIn>
    </section>
  );
}
