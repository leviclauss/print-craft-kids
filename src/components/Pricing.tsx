const plans = [
  {
    name: "Starter",
    description: "Up to 8 kids, 1 hour, 1 printer, name tags & keychains",
    features: [
      "Up to 8 kids",
      "1 hour session",
      "1 printer",
      "Name tags & keychains",
    ],
    highlighted: false,
  },
  {
    name: "Popular",
    description:
      "Up to 15 kids, 1.5 hours, 2 printers, voice-to-print + activities",
    features: [
      "Up to 15 kids",
      "1.5 hour session",
      "2 printers",
      "Voice-to-print + activities",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    description:
      "Up to 20 kids, 2 hours, 3 printers, full activity menu + photo figurines",
    features: [
      "Up to 20 kids",
      "2 hour session",
      "3 printers",
      "Full activity menu + photo figurines",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-offwhite">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight mb-4">
            Packages
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Choose a package that fits your event — reach out for a custom
            quote.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`animate-on-scroll relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                plan.highlighted
                  ? "bg-white border-2 border-violet shadow-lg shadow-violet/10"
                  : "bg-white border border-gray-200/80 shadow-sm"
              }`}
            >
              {/* Badge */}
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex rounded-full bg-violet px-4 py-1 text-xs font-semibold text-white shadow-lg shadow-violet/25">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-lg font-semibold text-gray-500 mb-2">
                {plan.name}
              </h3>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <svg
                      className="w-5 h-5 text-violet shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`block text-center rounded-full py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                  plan.highlighted
                    ? "bg-violet text-white shadow-lg shadow-violet/25 hover:bg-violet-dark"
                    : "bg-navy text-white hover:bg-navy-light"
                }`}
              >
                Get a Quote
              </a>
            </div>
          ))}
        </div>

        {/* Custom note */}
        <p className="text-center text-sm text-gray-500 mt-12 max-w-xl mx-auto animate-on-scroll">
          Need something custom? Corporate events, school contracts, and
          multi-session programs available —{" "}
          <a
            href="#contact"
            className="text-violet font-medium hover:underline"
          >
            contact us for a quote
          </a>
          .
        </p>
      </div>
    </section>
  );
}
