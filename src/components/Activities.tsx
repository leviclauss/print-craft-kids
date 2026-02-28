const activities = [
  {
    icon: "🐉",
    title: "Voice-to-Print Creations",
    description: "Describe anything, watch it appear.",
    tag: "Ages 5–14",
  },
  {
    icon: "🏷️",
    title: "Custom Name Tags & Keychains",
    description: "Personalized and printed in under 8 minutes.",
    tag: "Fast Print",
  },
  {
    icon: "🌀",
    title: "Design-Your-Own Fidget Toys",
    description:
      "Customize spinners, articulated animals, and sensory toys.",
    tag: "Ages 7+",
  },
  {
    icon: "🍪",
    title: "Cookie Cutter Creator",
    description: "Draw a shape, take home a food-safe cookie cutter.",
    tag: "Family Favorite",
  },
  {
    icon: "🏗️",
    title: "Mini Architecture Studio",
    description: "Design buildings and test structural strength.",
    tag: "STEM Challenge",
  },
  {
    icon: "📸",
    title: "Photo-to-Figurine",
    description: "Turn a selfie into a custom 3D figurine.",
    tag: "Wow Factor",
  },
  {
    icon: "💎",
    title: "Jewelry & Accessories",
    description: "Earrings, bracelets, and hair clips designed by kids.",
    tag: "Ages 8–14",
  },
  {
    icon: "🧩",
    title: "Puzzle Maker",
    description: "AI-generated custom puzzles and brain teasers.",
    tag: "All Ages",
  },
];

export default function Activities() {
  return (
    <section id="activities" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight mb-4">
            More Than Just Printing
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A full menu of hands-on STEM experiences — mix and match for any
            event.
          </p>
        </div>

        {/* Activity grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="group animate-on-scroll rounded-2xl bg-gray-100/80 p-6 hover:bg-violet/5 border border-transparent hover:border-violet/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {activity.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-navy mb-2">
                {activity.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                {activity.description}
              </p>

              {/* Tag */}
              <span className="inline-flex rounded-full bg-violet/10 px-3 py-1 text-xs font-medium text-violet">
                {activity.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
