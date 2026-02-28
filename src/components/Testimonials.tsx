const testimonials = [
  {
    quote:
      "My daughter said it was the best birthday party she's ever had. The kids were AMAZED.",
    author: "Sarah K.",
    location: "Sunnyvale",
  },
  {
    quote:
      "PrintCraft Kids brought real STEM magic to our school's family night. Every student was engaged.",
    author: "Ms. Rodriguez",
    location: "Cupertino Elementary",
  },
  {
    quote:
      "The voice-to-print experience is unlike anything I've seen. Pure joy on every kid's face.",
    author: "Jason T.",
    location: "Mountain View",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-amber"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight mb-4">
            Loved by Kids & Parents
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="animate-on-scroll relative rounded-2xl bg-gray-100/60 p-8 border-l-4 border-violet"
            >
              <Stars />
              <blockquote className="text-navy leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="text-sm">
                <span className="font-semibold text-navy">{t.author}</span>
                <span className="text-gray-400">, {t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
