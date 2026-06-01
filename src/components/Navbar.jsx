import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { waLink } from "../utils/helpers";

const LINKS = [
  { label: "Sobre mí",   href: "#sobre-mi"    },
  { label: "Proceso",    href: "#como-trabajo" },
  { label: "Planes",     href: "#planes"       },
  { label: "Resultados", href: "#resultados"   },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const go = (e, href) => {
    e.preventDefault(); setOpen(false);
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), open ? 350 : 0);
  };

  const bg    = scrolled ? "rgba(250,250,248,0.94)" : "transparent";
  const lc    = scrolled ? "var(--gray3)"           : "rgba(255,255,255,0.6)";
  const logoC = scrolled ? "var(--black)"           : "#fff";
  const bgrC  = open ? "var(--black)" : (scrolled ? "var(--black)" : "#fff");

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16,1,0.3,1] }}
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          height: 64, padding: "0 clamp(20px,4vw,40px)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: bg, backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--gray5)" : "none",
          transition: "background 0.4s, border 0.4s" }}>

        <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: 4 }}>
          <span className="display" style={{ fontSize: 19, fontWeight: 500,
            letterSpacing: "0.04em", color: logoC, transition: "color 0.4s" }}>SANTI NIEVAS</span>
          <span style={{ fontSize: 11, color: "var(--amber)", letterSpacing: "0.2em", marginLeft: 2 }}>· FIT</span>
        </a>

        <nav className="hide-mob" style={{ display: "flex", gap: 36 }}>
          {LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={e => go(e, l.href)}
              style={{ fontSize: 11, fontWeight: 400, letterSpacing: "0.18em",
                textTransform: "uppercase", color: lc, textDecoration: "none" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--amber)"}
              onMouseLeave={e => e.currentTarget.style.color = lc}
            >{l.label}</a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <a href={waLink("Hola Santiago, me gustaría contactarme.")}
            target="_blank" rel="noopener noreferrer" className="hide-mob"
            style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.22em",
              textTransform: "uppercase", background: "var(--black)", color: "#fff",
              padding: "10px 22px", textDecoration: "none" }}
            onMouseEnter={e => e.currentTarget.style.background = "var(--amber)"}
            onMouseLeave={e => e.currentTarget.style.background = "var(--black)"}
          >Contactar</a>

          <button onClick={() => setOpen(v => !v)} className="show-mob"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            style={{ flexDirection: "column", justifyContent: "center", alignItems: "center",
              width: 44, height: 44, gap: 5, background: "none", border: "none",
              zIndex: 110, position: "relative" }}>
            {[
              { t: open ? "rotate(45deg) translateY(7px)"  : "none", o: 1 },
              { t: "none", o: open ? 0 : 1 },
              { t: open ? "rotate(-45deg) translateY(-7px)": "none", o: 1 },
            ].map((s, i) => (
              <span key={i} style={{ display: "block", width: 22, height: 1.5,
                borderRadius: 1, background: bgrC,
                transform: s.t, opacity: s.o, transition: "all 0.3s" }} />
            ))}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ position: "fixed", inset: 0, zIndex: 100, background: "var(--white)",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            {LINKS.map((l, i) => (
              <motion.a key={l.href} href={l.href} onClick={e => go(e, l.href)}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.08 }}
                style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 28,
                  fontWeight: 400, letterSpacing: "0.08em", textTransform: "uppercase",
                  color: "var(--black)", textDecoration: "none", padding: "14px 0",
                  width: "100%", textAlign: "center", borderBottom: "1px solid var(--gray5)" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--amber)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--black)"}
              >{l.label}</motion.a>
            ))}
            <motion.a href={waLink("Hola Santiago, me gustaría contactarme.")}
              target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{ marginTop: 32, fontSize: 10, fontWeight: 600, letterSpacing: "0.22em",
                textTransform: "uppercase", background: "var(--black)", color: "#fff",
                padding: "14px 40px", textDecoration: "none", width: "calc(100% - 40px)",
                textAlign: "center" }}>
              Contactar por WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
