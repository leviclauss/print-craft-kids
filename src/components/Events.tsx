import Image from "next/image";

const events = [
  { icon: "🎂", name: "Birthday Parties" },
  { icon: "🏫", name: "School STEM Nights" },
  { icon: "📚", name: "Library Programs" },
  { icon: "🛒", name: "Farmers Markets" },
  { icon: "🏢", name: "Corporate Family Days" },
  { icon: "☀️", name: "Summer Camps" },
  { icon: "📖", name: "After-School Programs" },
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

        {/* Event photo showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 animate-on-scroll">
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <Image
              src="/images/indoor-workshop.jpg"
              alt="Kids at an indoor PrintCraft Kids 3D printing workshop"
              width={1200}
              height={800}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-semibold">Indoor Events</p>
              <p className="text-xs text-gray-300">Schools, parties & workshops</p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <Image
              src="/images/outdoor-event.jpg"
              alt="PrintCraft Kids mobile 3D printing cart at an outdoor event"
              width={1200}
              height={800}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-semibold">Outdoor Events</p>
              <p className="text-xs text-gray-300">Markets, fairs & festivals</p>
            </div>
          </div>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 animate-on-scroll">
          {events.map((event) => (
            <a
              key={event.name}
              href="#contact"
              className="group rounded-2xl bg-white p-5 text-center shadow-sm hover:shadow-lg border border-gray-200/50 hover:border-violet/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-110">
                {event.icon}
              </div>
              <h3 className="text-sm font-semibold text-navy leading-snug">
                {event.name}
              </h3>
            </a>
          ))}
        </div>

        {/* Inquiry prompt */}
        <p className="text-center text-sm text-gray-500 mt-8 animate-on-scroll">
          <a
            href="#contact"
            className="text-violet font-medium hover:underline"
          >
            Contact us
          </a>{" "}
          for event pricing and availability.
        </p>
      </div>
    </section>
  );
}
