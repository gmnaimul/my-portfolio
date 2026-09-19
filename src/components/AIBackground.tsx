const AIBackground = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
    >
      {/* Main AI Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/ai-background.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="ai-background-overlay absolute inset-0" />

      {/* Ambient Lights */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="ai-light ai-light-blue" />
        <div className="ai-light ai-light-purple" />
      </div>

      {/* AI Sparks */}
      <div className="absolute inset-0">
        <span className="ai-spark spark-1" />
        <span className="ai-spark spark-2" />
        <span className="ai-spark spark-3" />
        <span className="ai-spark spark-4" />
        <span className="ai-spark spark-5" />
        <span className="ai-spark spark-6" />
        <span className="ai-spark spark-7" />
        <span className="ai-spark spark-8" />
        <span className="ai-spark spark-9" />
        <span className="ai-spark spark-10" />
        <span className="ai-spark spark-11" />
        <span className="ai-spark spark-12" />
      </div>

      {/* Center Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 28%, rgba(1, 5, 18, 0.20) 100%)",
        }}
      />

      {/* Bottom Fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(to top, rgba(2, 8, 23, 0.25), transparent)",
        }}
      />
    </div>
  );
};

export default AIBackground;