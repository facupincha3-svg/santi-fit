import { FadeIn, SectionLabel, waLink } from "../utils/helpers";

export default function SobreMi() {
  const stats = [
    { value: "+500", label: "Alumnos" },
    { value: "5+",   label: "Años" },
    { value: "98%",  label: "Satisfacción" },
  ];

  return (
    <section id="sobre-mi" className="bg-white py-20 md:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid-1-mobile sobre-gap"
          style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 72, alignItems: "center" }}>

          {/* Foto */}
          <FadeIn direction="right">
            <div style={{ position: "relative", maxWidth: 480, margin: "0 auto", width: "100%" }}>
              <div style={{ position: "absolute", bottom: -12, right: -12, width: "100%",
                height: "100%", border: "1px solid rgba(245,158,11,0.25)", pointerEvents: "none" }} />
              <div style={{ position: "relative", overflow: "hidden", aspectRatio: "4/5", background: "#111" }}>
                {/* 👉 Reemplazar con foto real cuando esté disponible */}
                <img
                  src="/fotos/sobre-mi.jpg"
                  alt="Santiago Nievas"
                  className="photo-bw"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 15%" }}
                />
              </div>
            </div>
          </FadeIn>

          {/* Copy */}
          <FadeIn delay={0.1}>
            <SectionLabel>Sobre mí</SectionLabel>
            <h2 className="font-serif text-neutral-900 font-medium mb-5"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.1 }}>
              Soy Santiago<br />Nievas.
            </h2>
            <div className="space-y-4 font-light leading-relaxed"
              style={{ color: "#737373", fontSize: "clamp(14px, 3.5vw, 16px)", maxWidth: 460 }}>
              <p>Coach de fitness y nutrición con más de 5 años acompañando personas a transformar su cuerpo sin sacrificar su vida.</p>
              <p>No trabajo con promesas vacías. Trabajo con diagnósticos reales, planes que se adaptan a tu rutina y el seguimiento necesario para que los resultados lleguen y se queden.</p>
              <p>Si en algún momento sentiste que el problema eras vos, probablemente el problema era el método.</p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-8 pt-8 border-t border-neutral-100">
              {stats.map((s, i) => (
                <FadeIn key={s.label} delay={0.2 + i * 0.08}>
                  <div>
                    <p className="font-serif font-medium text-neutral-900"
                      style={{ fontSize: "clamp(22px, 5vw, 28px)" }}>{s.value}</p>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 mt-1">{s.label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* CTA */}
            <FadeIn delay={0.45}>
              <a href={waLink("Hola Santiago, me gustaría conocer más sobre vos y tu método.")}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-8 px-7 bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors"
                style={{ height: 52, textDecoration: "none", width: "100%", maxWidth: 320, justifyContent: "center" }}>
                Escribirme por WhatsApp
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </FadeIn>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
