import { useRef, useState } from "react";
import { FadeIn, Label } from "../utils/helpers";

const TRANSFORMS = [
  { name: "Manu",           time: "6 meses",        result: "+8 kg",  obj: "Hipertrofia",          col: "manu"    },
  { name: "Tomi — Antes",   time: "Punto de inicio", result: "Base",   obj: "Hipertrofia",          col: "tomi_antes"     },
  { name: "Tomi — Progreso",time: "Primeros meses",  result: "+8 kg",  obj: "Hipertrofia en curso", col: "tomi_despues_a" },
  { name: "Tomi — Final",   time: "18 meses",        result: "+16 kg", obj: "Resultado final",      col: "tomi_despues_b" },
  { name: "Santi",          time: "6 meses",         result: "−15 kg", obj: "Pérdida de grasa",     col: "santi"   },
  { name: "Elías",          time: "5 meses",         result: "−5 kg",  obj: "Definición",           col: "elias"   },
];

const IMG_BASE = "/fotos";

export default function Transformaciones() {
  const [active, setActive]       = useState(0);
  const trackRef                  = useRef(null);
  const isDragging                = useRef(false);
  const startX                    = useRef(0);
  const scrollLeftRef             = useRef(0);

  const handleScroll = () => {
    if (!trackRef.current) return;
    const cardW = trackRef.current.querySelector("div[style]")?.offsetWidth || 400;
    setActive(Math.min(Math.round(trackRef.current.scrollLeft / (cardW + 2)), TRANSFORMS.length - 1));
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

  return (
    <section style={{ background: "var(--black)", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "clamp(64px,8vw,100px) 40px" }}>

        <FadeIn>
          <Label light>Prueba social</Label>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end",
            justifyContent: "space-between", gap: 16, marginBottom: "clamp(40px,6vw,64px)" }}>
            <h2 className="display" style={{ fontSize: "clamp(36px,5vw,60px)", fontWeight: 400,
              color: "#fff", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              Resultados<br />
              <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.3)" }}>reales.</em>
            </h2>
            <p style={{ fontSize: 14, fontWeight: 400, color: "var(--gray3)", maxWidth: 360, lineHeight: 1.7 }}>
              Plan personalizado, seguimiento y trabajo constante. Cada proceso es único.
            </p>
          </div>
        </FadeIn>

        {/* Carrusel */}
        <FadeIn>
          <div ref={trackRef} onScroll={handleScroll}
            onMouseDown={onMouseDown} onMouseMove={onMouseMove}
            onMouseUp={onMouseUp} onMouseLeave={onMouseUp}
            style={{ display: "flex", overflowX: "auto", scrollSnapType: "x mandatory",
              scrollBehavior: "smooth", gap: 2, cursor: "grab",
              scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {TRANSFORMS.map((t) => (
              <div key={t.name} style={{ minWidth: "clamp(280px,40vw,480px)",
                scrollSnapAlign: "start", position: "relative",
                overflow: "hidden", background: "var(--gray1)", flexShrink: 0 }}
                onMouseEnter={e => {
                  e.currentTarget.querySelector(".card-overlay").style.opacity = "1";
                  e.currentTarget.querySelector("img").style.transform = "scale(1.03)";
                  e.currentTarget.querySelector("img").style.filter = "grayscale(0%) contrast(1.05)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.querySelector(".card-overlay").style.opacity = "0";
                  e.currentTarget.querySelector("img").style.transform = "scale(1)";
                  e.currentTarget.querySelector("img").style.filter = "grayscale(20%) contrast(1.05)";
                }}>
                <img src={`${IMG_BASE}/collage_${t.col}.jpg`} alt={`${t.name} antes y después`}
                  loading="lazy"
                  style={{ width: "100%", display: "block",
                    filter: "grayscale(20%) contrast(1.05)",
                    transition: "transform 0.6s ease, filter 0.6s ease" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "55%",
                  background: "linear-gradient(transparent, rgba(8,8,8,0.95))", pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 18px" }}>
                  <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 8 }}>
                    <div>
                      <p style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase",
                        color: "var(--amber)", marginBottom: 4 }}>{t.obj} · {t.time}</p>
                      <p className="display" style={{ fontSize: 18, fontWeight: 500,
                        color: "#fff", lineHeight: 1 }}>{t.name}</p>
                    </div>
                    <p className="display" style={{ fontSize: 28, fontWeight: 400,
                      color: "#fff", lineHeight: 1, letterSpacing: "-0.02em" }}>{t.result}</p>
                  </div>
                </div>
                <div className="card-overlay" style={{ position: "absolute", inset: 0,
                  background: "rgba(200,151,42,0.08)", border: "1px solid rgba(200,151,42,0.3)",
                  opacity: 0, transition: "opacity 0.3s", pointerEvents: "none" }} />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div style={{ display: "flex", gap: 6, marginTop: 16 }}>
            {TRANSFORMS.map((_, i) => (
              <div key={i} style={{ height: 1, width: i === active ? 24 : 8,
                background: i === active ? "var(--amber)" : "rgba(255,255,255,0.2)",
                transition: "all 0.4s", borderRadius: 1 }} />
            ))}
          </div>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.35}>
          <div style={{ marginTop: 48, paddingTop: 40, borderTop: "1px solid var(--gray2)",
            display: "flex", flexWrap: "wrap", alignItems: "center", gap: 48 }}>
            {[
              { v: "10+", l: "Años entrenando" },
              { v: "15+", l: "Alumnos"         },
            ].map(s => (
              <div key={s.l} style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                <p className="display" style={{ fontSize: "clamp(36px,5vw,56px)", fontWeight: 300,
                  color: "#fff", lineHeight: 1, letterSpacing: "-0.02em" }}>{s.v}</p>
                <p style={{ fontSize: 12, fontWeight: 300, color: "var(--gray3)",
                  letterSpacing: "0.08em" }}>{s.l}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
      <style>{`div::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
}
