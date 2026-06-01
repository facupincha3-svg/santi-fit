import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, Label, waLink } from "../utils/helpers";

const TESTI = [
  { name: "Manu",  age: "21", dur: "6 meses · Hipertrofia",      res: "+8 kg",  col: "manu",  tomi: false,
    text: "Buscaba ganar masa muscular y dejar de verme flaco. Con entrenamiento de fuerza estructurado, progresión de cargas y seguimiento constante logré +8 kg en 6 meses con aumento visible de masa muscular y mejor postura corporal." },
  { name: "Tomi",  age: "20", dur: "18 meses · Hipertrofia",     res: "+16 kg", tomi: true,
    text: "Empecé con contextura delgada y baja masa muscular. Con planificación a largo plazo, periodización de fuerza e hipertrofia y ajustes en alimentación logré +16 kg en 18 meses. La clave fue la paciencia y el enfoque en el largo plazo." },
  { name: "Santi", age: "23", dur: "6 meses · Pérdida de grasa", res: "−15 kg", col: "santi", tomi: false,
    text: "Con entrenamiento de fuerza para preservar masa muscular, déficit calórico controlado y seguimiento semanal logré −15 kg en 6 meses con mejora visible en definición y composición corporal." },
  { name: "Elías", age: "25", dur: "5 meses · Pérdida de grasa", res: "−5 kg",  col: "elias", tomi: false,
    text: "Con entrenamiento estructurado, control de volumen y progresión, acompañado de ajustes en hábitos, logré −5 kg en 5 meses con mayor definición y mejor condición general." },
];

const EP = [
  { name: "Leo",    age: "21", obj: "Bajar de peso",             res: "−5 kg en 2 meses",   text: "Cuando arranqué estaba bastante desordenado. En 2 meses bajé 5 kg y empecé a ver cambios reales. Hoy me siento más activo y mucho más comprometido." },
  { name: "Román",  age: "20", obj: "Pérdida de grasa",          res: "−3 kg en 2 meses",   text: "Bajé 3 kg y me siento más liviano y con más energía. La confianza que genera entrenar con Santi me ayudó a comprometerme y mantener la constancia." },
  { name: "Matías", age: "25", obj: "Perder grasa y tonificar",  res: "−1 kg en 2 semanas", text: "En las primeras dos semanas ya bajé 1 kg. Mejoré mucho mi técnica y cada semana me siento con más energía y fuerza." },
  { name: "Lucía",  age: "40", obj: "Definición · lesión rodilla", res: "En curso",          text: "Gané fuerza, mejoré movilidad y entreno sin dolor. Santi adapta los ejercicios a mi situación y siempre está atento a la técnica." },
];

const IMG_BASE = "/fotos";

const EnProceso = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginTop: 56, paddingTop: 40, borderTop: "1px solid var(--gray2)" }}>
      <button onClick={() => setOpen(v => !v)}
        style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "none",
          border: "1px solid var(--gray2)", padding: "11px 20px", fontSize: 11,
          letterSpacing: "0.15em", color: "var(--gray3)", cursor: "pointer",
          marginBottom: open ? 32 : 0 }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--amber)"; e.currentTarget.style.color = "var(--amber)"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--gray2)"; e.currentTarget.style.color = "var(--gray3)"; }}>
        <span style={{ background: "var(--amber)", color: "var(--black)", fontSize: 8,
          fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", padding: "3px 8px" }}>En proceso</span>
        {open ? "Ocultar" : "Ver más testimonios"}
        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"
          style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.3s" }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4 }} style={{ overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 12 }}>
              {EP.map((t, i) => (
                <motion.div key={t.name} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  style={{ background: "var(--gray1)", border: "1px solid var(--gray2)", padding: 24 }}>
                  <div style={{ display: "flex", justifyContent: "space-between",
                    alignItems: "flex-start", marginBottom: 14 }}>
                    <div>
                      <p style={{ fontSize: 15, fontWeight: 600, color: "#fff" }}>{t.name}</p>
                      <p style={{ fontSize: 11, color: "var(--gray4)", marginTop: 2 }}>{t.age} años · {t.obj}</p>
                    </div>
                    <span style={{ background: "var(--amber)", color: "var(--black)", fontSize: 8,
                      fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase",
                      padding: "3px 8px", flexShrink: 0 }}>{t.res}</span>
                  </div>
                  <div style={{ height: 1, background: "var(--gray2)", marginBottom: 14 }} />
                  <p style={{ fontSize: 13, fontWeight: 400, color: "var(--gray4)", lineHeight: 1.7 }}>"{t.text}"</p>
                  <div style={{ display: "flex", gap: 2, marginTop: 12, color: "var(--amber)", fontSize: 12 }}>
                    {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Resultados() {
  const [active, setActive] = useState(0);
  const trackRef     = useRef(null);
  const isDragging   = useRef(false);
  const startX       = useRef(0);
  const scrollLeftRef = useRef(0);

  const scrollTo = (i) => {
    if (!trackRef.current) return;
    trackRef.current.scrollTo({ left: i * trackRef.current.offsetWidth, behavior: "smooth" });
    setActive(i);
  };
  const handleScroll = () => {
    if (!trackRef.current) return;
    setActive(Math.round(trackRef.current.scrollLeft / trackRef.current.offsetWidth));
  };
  const onMouseDown = e => {
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeftRef.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = "grabbing";
  };
  const onMouseMove = e => {
    if (!isDragging.current) return;
    e.preventDefault();
    trackRef.current.scrollLeft = scrollLeftRef.current - (e.pageX - trackRef.current.offsetLeft - startX.current) * 1.5;
  };
  const onMouseUp = () => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  };

  const t = TESTI[active];

  return (
    <section id="resultados" style={{ background: "var(--black)", position: "relative", overflow: "hidden" }}>
      <span className="sec-num" style={{ right: -20, top: -20, color: "rgba(200,151,42,0.04)" }}>06</span>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "clamp(64px,8vw,100px) 40px" }}>

        <FadeIn>
          <Label light>Resultados</Label>
          <p style={{ fontSize: 12, fontWeight: 300, color: "var(--gray3)", fontStyle: "italic",
            marginBottom: 28, maxWidth: 520, lineHeight: 1.6 }}>
            "Resultados individuales. Entrenamiento personalizado, técnica y constancia."
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end",
            justifyContent: "space-between", gap: 16, marginBottom: 48 }}>
            <h2 className="display" style={{ fontSize: "clamp(36px,5vw,60px)", fontWeight: 400,
              color: "#fff", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              Lo que dicen<br />
              <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.3)" }}>mis alumnos.</em>
            </h2>
            <span style={{ fontSize: 11, color: "var(--gray4)", letterSpacing: "0.2em",
              fontFamily: "'Cormorant Garamond', serif" }}>
              {String(active + 1).padStart(2, "0")} / {String(TESTI.length).padStart(2, "0")}
            </span>
          </div>
        </FadeIn>

        {/* Carrusel */}
        <div ref={trackRef} onScroll={handleScroll}
          onMouseDown={onMouseDown} onMouseMove={onMouseMove}
          onMouseUp={onMouseUp} onMouseLeave={onMouseUp}
          style={{ display: "flex", overflowX: "auto", scrollSnapType: "x mandatory",
            scrollBehavior: "smooth", gap: 0, cursor: "grab",
            touchAction: "pan-x", overscrollBehaviorX: "contain",
            scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {TESTI.map((t) => (
            <div key={t.name} style={{ minWidth: "100%", scrollSnapAlign: "start", padding: "0 1px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2,
                border: "1px solid var(--gray2)", background: "var(--gray1)" }}
                className="testi-card-grid">

                {/* Foto */}
                <div style={{ position: "relative", overflow: "hidden", minHeight: 360 }}>
                  {t.tomi ? (
                    <div style={{ display: "flex", flexDirection: "column", height: "100%", gap: 2 }}>
                      <img src={`${IMG_BASE}/collage_tomi_antes.jpg`} alt="Tomi antes" loading="lazy"
                        style={{ flex: 1, width: "100%", objectFit: "cover", display: "block" }} />
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, flex: 1 }}>
                        <img src={`${IMG_BASE}/collage_tomi_despues_a.jpg`} alt="Tomi progreso" loading="lazy"
                          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                        <img src={`${IMG_BASE}/collage_tomi_despues_b.jpg`} alt="Tomi final" loading="lazy"
                          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                      </div>
                    </div>
                  ) : (
                    <img src={`${IMG_BASE}/collage_${t.col}.jpg`} alt={t.name} loading="lazy"
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block",
                        filter: "grayscale(10%)", transition: "filter 0.6s" }}
                      onMouseEnter={e => e.currentTarget.style.filter = "grayscale(0%)"}
                      onMouseLeave={e => e.currentTarget.style.filter = "grayscale(10%)"} />
                  )}
                  <div style={{ position: "absolute", top: 12, left: 12 }}>
                    <span style={{ background: "rgba(8,8,8,0.8)", backdropFilter: "blur(4px)",
                      fontSize: 8, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase",
                      color: "var(--gray4)", padding: "3px 8px" }}>Antes / Después</span>
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: "clamp(24px,3vw,40px)", display: "flex",
                  flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "flex-start",
                      justifyContent: "space-between", gap: 12, marginBottom: 20 }}>
                      <div>
                        <p className="display" style={{ fontSize: "clamp(22px,3vw,30px)",
                          fontWeight: 500, color: "#fff", lineHeight: 1 }}>{t.name}</p>
                        <p style={{ fontSize: 12, color: "var(--gray4)", marginTop: 4 }}>{t.age} años · {t.dur}</p>
                      </div>
                      <div style={{ textAlign: "right", borderLeft: "2px solid var(--amber)", paddingLeft: 14 }}>
                        <p className="display" style={{ fontSize: "clamp(24px,3vw,32px)",
                          fontWeight: 400, color: "#fff", lineHeight: 1 }}>{t.res}</p>
                        <p style={{ fontSize: 9, color: "var(--amber)", letterSpacing: "0.15em",
                          textTransform: "uppercase", marginTop: 4 }}>Resultado</p>
                      </div>
                    </div>
                    <div style={{ height: 1, background: "var(--gray2)", marginBottom: 20 }} />
                    <p className="display" style={{ fontSize: 56, color: "rgba(255,255,255,0.06)",
                      lineHeight: 1, userSelect: "none", marginBottom: -8 }}>"</p>
                    <p style={{ fontSize: "clamp(13px,1.5vw,15px)", fontWeight: 400,
                      color: "var(--gray4)", lineHeight: 1.8 }}>{t.text}</p>
                    <div style={{ display: "flex", gap: 2, marginTop: 16, color: "var(--amber)", fontSize: 14 }}>
                      {"★★★★★".split("").map((s, j) => <span key={j}>{s}</span>)}
                    </div>
                  </div>
                  <a href={waLink("Hola Santiago, quiero empezar mi transformación")}
                    target="_blank" rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 28,
                      fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase",
                      color: "rgba(255,255,255,0.4)", textDecoration: "none" }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--amber)"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}>
                    Quiero resultados como este →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div style={{ display: "flex", gap: 6, alignItems: "center", marginTop: 20 }}>
          {TESTI.map((_, i) => (
            <button key={i} onClick={() => scrollTo(i)}
              style={{ height: i === active ? 2 : 1, width: i === active ? 28 : 8,
                background: i === active ? "var(--amber)" : "var(--gray2)",
                border: "none", cursor: "pointer", padding: 0,
                transition: "all 0.4s", minHeight: 20 }} />
          ))}
        </div>

        <EnProceso />

        <FadeIn delay={0.2}>
          <div style={{ marginTop: 56, paddingTop: 36, borderTop: "1px solid var(--gray2)",
            display: "flex", flexWrap: "wrap", alignItems: "center",
            justifyContent: "space-between", gap: 20 }}>
            <p style={{ fontSize: 15, fontWeight: 400, color: "var(--gray4)", maxWidth: 340, lineHeight: 1.6 }}>
              ¿Querés ser el próximo? Un mensaje es todo lo que separa tu antes de tu después.
            </p>
            <a href={waLink("Hola Santiago, vi los resultados y me interesa empezar")}
              target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, height: 52,
                padding: "0 28px", background: "var(--amber)", color: "var(--black)",
                fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase",
                textDecoration: "none" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#e5b040"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--amber)"; e.currentTarget.style.transform = "translateY(0)"; }}>
              Quiero mi transformación →
            </a>
          </div>
        </FadeIn>

        <style>{`
          .testi-card-grid { grid-template-columns: 1fr 1fr; }
          @media (max-width: 768px) { .testi-card-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>
    </section>
  );
}
