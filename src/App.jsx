import Navbar         from "./components/Navbar";
import Hero           from "./components/Hero";
import Transformaciones from "./components/Transformaciones";
import PorQueFunciona from "./components/PorQueFunciona";
import ComoTrabajamos from "./components/ComoTrabajamos";
import SobreMi        from "./components/SobreMi";
import Planes         from "./components/Planes";
import Resultados     from "./components/Resultados";
import FAQ            from "./components/FAQ";
import CTAFinal       from "./components/CTAFinal";
import Footer         from "./components/Footer";
import WhatsAppFloat  from "./components/WhatsAppFloat";

const GlobalStyles = () => (
  <style>{`
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }

    :root {
      --black:  #080808;
      --white:  #fafaf8;
      --amber:  #c8972a;
      --gray1:  #1a1a1a;
      --gray2:  #2e2e2e;
      --gray3:  #6b6b6b;
      --gray4:  #a8a8a8;
      --gray5:  #e8e6e1;
    }

    body {
      font-family: 'Archivo', sans-serif;
      background: var(--white);
      color: var(--black);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow-x: hidden;
      line-height: 1.5;
      font-size: 15px;
    }

    .display { font-family: 'Cormorant Garamond', serif; }

    ::-webkit-scrollbar { width: 3px; }
    ::-webkit-scrollbar-thumb { background: var(--amber); }

    .sec-num {
      position: absolute;
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(120px, 20vw, 220px);
      font-weight: 300;
      color: rgba(200,151,42,0.06);
      line-height: 1;
      pointer-events: none;
      user-select: none;
      letter-spacing: -0.05em;
    }

    .bw { filter: grayscale(100%) contrast(1.1) brightness(0.95); transition: filter 0.7s ease; }
    .bw:hover { filter: grayscale(0%) contrast(1) brightness(1); }

    a, button { transition: color 0.25s, background 0.25s, border-color 0.25s, transform 0.25s, box-shadow 0.25s; }

    @media (max-width: 768px) {
      .hide-mob { display: none !important; }
      .show-mob { display: flex !important; }
      .col-1 { grid-template-columns: 1fr !important; gap: 0 !important; }
      .col-1 > * > div { border-right: none !important; border-bottom: 1px solid var(--gray2) !important; }
      .col-1 > *:last-child > div { border-bottom: none !important; }
      a, button { min-height: 44px; }
    }
    @media (min-width: 769px) { .show-mob { display: none !important; } }
  `}</style>
);

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <main>
        <Hero />
        <Transformaciones />
        <PorQueFunciona />
        <ComoTrabajamos />
        <SobreMi />
        <Planes />
        <Resultados />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
