const steps = [
  {
    icon: "🎤",
    title: "Voice It",
    description:
      "Your child describes what they want to create. A dragon? A rocket ship? A unicorn with laser eyes? Anything goes.",
    step: 1,
  },
  {
    icon: "✨",
    title: "Design It",
    description:
      "Our AI transforms their words into a 3D model in seconds. Kids can see it, spin it, and approve it on screen.",
    step: 2,
  },
  {
    icon: "🖨️",
    title: "Print It",
    description:
      "We send it to our fast 3D printers and they watch their creation come to life, layer by layer. Ready in 10–20 minutes.",
    step: 3,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-offwhite">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight mb-4">
            Magic in 3 Steps
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-violet/20 via-violet/40 to-violet/20" />

          {steps.map((step) => (
            <div key={step.step} className="animate-on-scroll">
              <div className="group relative rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50">
                {/* Gradient border effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet/10 to-indigo/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  {/* Step number */}
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-violet/10 text-violet text-sm font-bold mb-4">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="text-5xl mb-4">{step.icon}</div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-navy mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
