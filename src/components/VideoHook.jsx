import { useEffect, useRef, useState } from "react";

export default function VideoHook() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.muted = false;
          video.play().then(() => {
            setMuted(false);
            setStarted(true);
          }).catch(() => {
            video.muted = true;
            setMuted(true);
            video.play().catch(() => {});
            setStarted(true);
          });
        } else {
          video.pause();
          video.muted = true;
          setMuted(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <section style={{
      background: "var(--black)",
      width: "100%",
      position: "relative",
      overflow: "hidden",
    }}>
      <video
        ref={videoRef}
        loop
        playsInline
        muted
        style={{ width: "100%", display: "block",
          maxHeight: "90vh", objectFit: "cover" }}>
        <source src="/fotos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Botón mute/unmute */}
      {started && (
        <button
          onClick={toggleMute}
          aria-label={muted ? "Activar sonido" : "Silenciar"}
          style={{
            position: "absolute", bottom: 24, right: 24,
            width: 44, height: 44,
            background: "rgba(8,8,8,0.7)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", color: "#fff",
            transition: "border-color 0.3s",
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = "var(--amber)"}
          onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"}
        >
          {muted ? (
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"/>
            </svg>
          ) : (
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"/>
            </svg>
          )}
        </button>
      )}

      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 80,
        background: "linear-gradient(transparent, var(--black))",
        pointerEvents: "none",
      }} />
    </section>
  );
}
