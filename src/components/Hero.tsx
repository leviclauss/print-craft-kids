export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Background gradient blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet/30 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo/20 rounded-full blur-3xl animate-pulse-soft [animation-delay:1.5s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center pt-20 pb-16">
        {/* Tagline badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-violet/30 bg-violet/10 px-4 py-1.5 text-sm text-violet-light mb-8 backdrop-blur-sm">
          <span>🚀</span>
          <span className="font-medium">Voice It. Design It. Print It.</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
          Where Imagination
          <br />
          <span className="bg-gradient-to-r from-violet-light to-amber bg-clip-text text-transparent">
            Becomes Reality
          </span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-gray-400 leading-relaxed mb-10">
          Kids describe their dream creation with their voice. AI designs it. We
          3D print it — right before their eyes.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-violet px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-violet/25 hover:bg-violet-dark transition-all duration-200 hover:shadow-violet/40 hover:-translate-y-0.5"
          >
            Book Your Event
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center rounded-full border border-white/20 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/5 transition-all duration-200"
          >
            See How It Works
          </a>
        </div>

        {/* Floating 3D icon */}
        <div className="text-6xl sm:text-7xl animate-float mb-10">🧊</div>

        {/* Trust bar */}
        <div className="text-sm text-gray-500">
          <span className="text-gray-400 font-medium">
            Serving the Bay Area
          </span>
          <span className="mx-2">—</span>
          San Jose · Sunnyvale · Mountain View · Palo Alto · Cupertino · Fremont
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-offwhite to-transparent" />
    </section>
  );
}
