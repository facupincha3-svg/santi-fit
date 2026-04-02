import { waLink } from "../utils/helpers";

const IG_URL = "https://www.instagram.com/santinievas.fit/";

export default function Footer() {
  return (
    <footer style={{ background: "#0a0a0a", borderTop: "1px solid #1a1a1a" }}>
      <div className="pad-sm-mobile" style={{ maxWidth: 1100, margin: "0 auto", padding: "52px 24px 36px" }}>

        {/* Fila principal */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center",
          justifyContent: "space-between", gap: 28, marginBottom: 40 }}>

          {/* Logo */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" fill="#0a0a0a"/>
              <rect x="0.5" y="0.5" width="39" height="39" stroke="#2a2a2a"/>
              <path d="M10 26.5C10 26.5 11.5 28.5 14.5 28.5C17.5 28.5 19 27 19 25C19 21 10 22 10 17.5C10 14.5 12.5 13 15 13C17.5 13 19 14.5 19 14.5"
                stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M22 28V13L30 28V13" stroke="white" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#fff", marginTop: 10 }}>
              SANTINIEVAS<span style={{ color: "#f59e0b" }}>.FIT</span>
            </p>
            <p style={{ fontSize: 11, fontWeight: 300, color: "#525252", marginTop: 3 }}>
              Entrenamiento online personalizado
            </p>
          </div>

          {/* Redes + CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>

            {/* Instagram */}
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              style={{ display: "flex", alignItems: "center", justifyContent: "center",
                width: 48, height: 48, border: "1px solid #2a2a2a", color: "#525252",
                textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#f59e0b"; e.currentTarget.style.color = "#f59e0b"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#2a2a2a"; e.currentTarget.style.color = "#525252"; }}>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a href={waLink("Hola Santiago, me gustaría consultarte algo.")}
              target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              style={{ display: "flex", alignItems: "center", justifyContent: "center",
                width: 48, height: 48, border: "1px solid #2a2a2a", color: "#525252",
                textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#f59e0b"; e.currentTarget.style.color = "#f59e0b"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#2a2a2a"; e.currentTarget.style.color = "#525252"; }}>
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>

            {/* CTA texto */}
            <a href={waLink("Hola Santiago, quiero empezar mi transformación.")}
              target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8,
                height: 48, padding: "0 20px", border: "1px solid #2a2a2a",
                color: "#737373", fontSize: 11, fontWeight: 500,
                letterSpacing: "0.15em", textTransform: "uppercase",
                textDecoration: "none", transition: "all 0.2s", whiteSpace: "nowrap" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#fff"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#2a2a2a"; e.currentTarget.style.color = "#737373"; }}>
              Escribime
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Divisor */}
        <div style={{ height: 1, background: "#1a1a1a", marginBottom: 20 }} />

        {/* Copyright */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center",
          justifyContent: "space-between", gap: 8 }}>
          <p style={{ fontSize: 11, fontWeight: 300, color: "#404040" }}>
            © {new Date().getFullYear()} Santiago Nievas. Todos los derechos reservados.
          </p>
          <p style={{ fontSize: 11, fontWeight: 300, color: "#2a2a2a" }}>
            La Plata, Buenos Aires, Argentina
          </p>
        </div>

      </div>
    </footer>
  );
}
