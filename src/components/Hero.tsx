import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Background hero image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-kids-workshop.jpg"
          alt="Kids at a PrintCraft Kids 3D printing workshop event"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/80" />
      </div>

      {/* Background gradient blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet/20 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo/15 rounded-full blur-3xl animate-pulse-soft [animation-delay:1.5s]" />
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

        {/* Photo showcase */}
        <div className="relative mx-auto max-w-3xl rounded-2xl overflow-hidden shadow-2xl shadow-violet/20 mb-10 border border-white/10">
          <Image
            src="/images/indoor-workshop.jpg"
            alt="Kids gathered around a PrintCraft Kids 3D printing station at an indoor event"
            width={1200}
            height={800}
            className="w-full h-auto"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
        </div>

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
