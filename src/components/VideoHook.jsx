export default function VideoHook() {
  return (
    <section style={{
      background: "var(--black)",
      width: "100%",
      position: "relative",
      overflow: "hidden",
    }}>
      <video
        autoPlay muted loop playsInline
        style={{ width: "100%", display: "block",
          maxHeight: "90vh", objectFit: "cover" }}>
        <source src="/fotos/hero-video.mp4" type="video/mp4" />
      </video>
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 80,
        background: "linear-gradient(transparent, var(--black))",
        pointerEvents: "none",
      }} />
    </section>
  );
}
