import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { waLink } from "../utils/helpers";

const LINKS = [
  { label: "Sobre mí",     href: "#sobre-mi"     },
  { label: "Cómo trabajo", href: "#como-trabajo"  },
  { label: "Planes",       href: "#planes"        },
  { label: "Resultados",   href: "#resultados"    },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleLink = (e, href) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, open ? 350 : 0);
  };

  const navBg     = scrolled ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_0_#f0f0f0]" : "bg-transparent";
  const linkColor = scrolled ? "text-neutral-500 hover:text-amber-500" : "text-white/70 hover:text-amber-500";
  const logoColor = scrolled ? "text-neutral-900" : "text-white";
  const burgerColor = open ? "#0a0a0a" : (scrolled ? "#0a0a0a" : "#fff");

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      >
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className={`text-sm font-bold tracking-[0.18em] uppercase transition-colors duration-300 ${logoColor}`}>
            SANTINIEVAS<span className="text-amber-500">.FIT</span>
          </a>

          <nav className="hide-mobile flex items-center gap-8">
            {LINKS.map(link => (
              <a key={link.href} href={link.href}
                onClick={e => handleLink(e, link.href)}
                className={`text-xs font-light tracking-[0.2em] uppercase transition-colors duration-300 ${linkColor}`}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={waLink("Hola Santiago, me gustaría contactarme con vos.")}
              target="_blank" rel="noopener noreferrer"
              className="hide-mobile inline-flex items-center justify-center h-9 px-5 bg-neutral-900 text-white text-[10px] font-semibold tracking-[0.2em] uppercase hover:bg-neutral-700 transition-colors">
              Contactar
            </a>

            <button onClick={() => setOpen(v => !v)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="show-mobile flex-col justify-center items-center w-11 h-11 gap-1.5 bg-transparent border-none cursor-pointer relative z-[60]">
              {[
                { transform: open ? "rotate(45deg) translateY(7px)" : "none", opacity: 1 },
                { transform: "none", opacity: open ? 0 : 1 },
                { transform: open ? "rotate(-45deg) translateY(-7px)" : "none", opacity: 1 },
              ].map((s, i) => (
                <span key={i} style={{ display: "block", width: 22, height: 1.5,
                  background: burgerColor, borderRadius: 1,
                  transition: "all 0.25s", transform: s.transform, opacity: s.opacity }} />
              ))}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center show-mobile">
            <nav className="flex flex-col items-center w-full mb-10">
              {LINKS.map((link, i) => (
                <motion.a key={link.href} href={link.href}
                  onClick={e => handleLink(e, link.href)}
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.07 }}
                  className="text-2xl font-light tracking-[0.12em] uppercase text-neutral-800 hover:text-amber-500 transition-colors py-4 px-6 w-full text-center border-b border-neutral-100">
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <motion.a href={waLink("Hola Santiago, me gustaría contactarme con vos.")}
              target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="inline-flex items-center justify-center h-13 px-10 bg-neutral-900 text-white text-xs font-semibold tracking-[0.22em] uppercase hover:bg-neutral-700 transition-colors mx-5 w-[calc(100%-40px)]">
              Contactar por WhatsApp
            </motion.a>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              className="absolute bottom-8 text-xs font-bold tracking-[0.18em] uppercase text-neutral-300">
              SANTINIEVAS<span className="text-amber-400">.FIT</span>
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
