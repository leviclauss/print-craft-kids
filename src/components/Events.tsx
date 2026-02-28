const events = [
  { icon: "🎂", name: "Birthday Parties", price: "$299–$599" },
  { icon: "🏫", name: "School STEM Nights", price: "$500–$1,200" },
  { icon: "📚", name: "Library Programs", price: "$200–$500" },
  { icon: "🛒", name: "Farmers Markets", price: "$5–$25/print" },
  { icon: "🏢", name: "Corporate Family Days", price: "$800–$2,000" },
  { icon: "☀️", name: "Summer Camps", price: "$150–$300/session" },
  { icon: "📖", name: "After-School Programs", price: "$400–$800/series" },
];

export default function Events() {
  return (
    <section id="events" className="py-24 sm:py-32 bg-offwhite">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight mb-4">
            We Come to You
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            From backyard birthday parties to corporate campus events — we bring
            the magic.
          </p>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 animate-on-scroll">
          {events.map((event) => (
            <div
              key={event.name}
              className="group rounded-2xl bg-white p-5 text-center shadow-sm hover:shadow-lg border border-gray-200/50 hover:border-violet/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-110">
                {event.icon}
              </div>
              <h3 className="text-sm font-semibold text-navy mb-2 leading-snug">
                {event.name}
              </h3>
              <p className="text-sm font-bold text-violet">{event.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
