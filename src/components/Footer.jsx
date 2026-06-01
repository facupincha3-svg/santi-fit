import { waLink } from "../utils/helpers";

const IG = "https://www.instagram.com/santinievas.fit/";

export default function Footer() {
  return (
    <footer style={{ background: "var(--black)", borderTop: "1px solid var(--gray2)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "48px clamp(20px,4vw,40px) 32px",
        display: "flex", flexWrap: "wrap", alignItems: "center",
        justifyContent: "space-between", gap: 24 }}>

        <div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 8 }}>
            <span className="display" style={{ fontSize: 18, fontWeight: 400,
              color: "#fff", letterSpacing: "0.04em" }}>Santi Nievas</span>
            <span style={{ fontSize: 10, color: "var(--amber)", letterSpacing: "0.2em" }}>· FIT</span>
          </div>
          <p style={{ fontSize: 11, fontWeight: 300, color: "var(--gray3)" }}>
            Entrenamiento online personalizado · La Plata, ARG
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          {[
            { href: IG, label: "Instagram",
              icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg> },
            { href: waLink("Hola Santiago, quiero consultarte algo."), label: "WhatsApp",
              icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
          ].map(item => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
              aria-label={item.label}
              style={{ display: "flex", alignItems: "center", justifyContent: "center",
                width: 44, height: 44, border: "1px solid var(--gray2)", color: "var(--gray3)",
                textDecoration: "none" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--amber)"; e.currentTarget.style.color = "var(--amber)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--gray2)"; e.currentTarget.style.color = "var(--gray3)"; }}>
              {item.icon}
            </a>
          ))}
          <a href={waLink("Hola Santiago, quiero empezar mi transformación.")}
            target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, height: 44,
              padding: "0 20px", border: "1px solid var(--gray2)", color: "var(--gray3)",
              fontSize: 10, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase",
              textDecoration: "none", whiteSpace: "nowrap" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--amber)"; e.currentTarget.style.color = "var(--amber)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--gray2)"; e.currentTarget.style.color = "var(--gray3)"; }}>
            Escribime →
          </a>
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "16px clamp(20px,4vw,40px)",
        borderTop: "1px solid var(--gray2)", display: "flex",
        justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
        <p style={{ fontSize: 11, fontWeight: 300, color: "var(--gray2)" }}>
          © {new Date().getFullYear()} Santiago Nievas. Todos los derechos reservados.
        </p>
        <p style={{ fontSize: 11, fontWeight: 300, color: "var(--gray2)", fontStyle: "italic" }}>
          santinievas.fit
        </p>
      </div>
    </footer>
  );
}
