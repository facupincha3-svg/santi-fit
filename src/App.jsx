import Navbar      from "./components/Navbar";
import Hero        from "./components/Hero";
import SobreMi     from "./components/SobreMi";
import ComoTrabajo from "./components/ComoTrabajo";
import Planes      from "./components/Planes";
import Resultados  from "./components/Resultados";
import Footer      from "./components/Footer";

const FontLoader = () => (
  <style>{`
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'DM Sans', sans-serif;
      background: #fff;
      color: #0a0a0a;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }
    .font-serif { font-family: 'Playfair Display', serif; }
    .photo-bw { filter: grayscale(100%) contrast(1.05); transition: filter 0.7s ease; }
    .photo-bw:hover { filter: grayscale(0%) contrast(1); }
    @media (max-width: 768px) {
      .hide-mobile { display: none !important; }
      .show-mobile { display: flex !important; }
      .grid-1-mobile { grid-template-columns: 1fr !important; gap: 0 !important; }
      .grid-1-mobile > * > div { border-right: none !important; border-bottom: 1px solid #2a2a2a !important; }
      .grid-1-mobile > *:last-child > div { border-bottom: none !important; }
      .pad-mobile { padding: 56px 20px !important; }
      .sobre-gap { gap: 48px !important; }
      .testi-gap { gap: 32px !important; }
      a, button { min-height: 44px; }
    }
    @media (min-width: 769px) {
      .show-mobile { display: none !important; }
    }
  `}</style>
);

export default function App() {
  return (
    <>
      <FontLoader />
      <Navbar />
      <main>
        <Hero />
        <SobreMi />
        <ComoTrabajo />
        <Planes />
        <Resultados />
      </main>
      <Footer />
    </>
  );
}
