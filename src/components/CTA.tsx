export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-navy overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-violet/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-indigo/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-on-scroll">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Ready to Bring the Magic?
          </h2>

          {/* Subheading */}
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
            Book your event today and give kids an experience they&apos;ll never
            forget.
          </p>

          {/* CTA Button */}
          <a
            href="mailto:hello@printcraftkids.com"
            className="inline-flex items-center rounded-full bg-amber px-10 py-4 text-base font-bold text-navy shadow-lg shadow-amber/25 hover:bg-amber-dark transition-all duration-200 hover:-translate-y-0.5 hover:shadow-amber/40"
          >
            Book Your Event
          </a>

          {/* Contact info */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400">
            <a
              href="mailto:hello@printcraftkids.com"
              className="hover:text-white transition-colors"
            >
              hello@printcraftkids.com
            </a>
            <span className="hidden sm:inline text-gray-600">·</span>
            <a
              href="tel:+14085555437"
              className="hover:text-white transition-colors"
            >
              (408) 555-KIDS
            </a>
            <span className="hidden sm:inline text-gray-600">·</span>
            <div className="flex items-center gap-4">
              {/* Instagram icon */}
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* TikTok icon */}
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13a8.28 8.28 0 005.58 2.17V11.7a4.79 4.79 0 01-3.77-1.78V6.69h3.77z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bay Area note */}
          <p className="mt-8 text-sm text-gray-500">
            Serving the San Francisco Bay Area 🌉
          </p>
        </div>
      </div>
    </section>
  );
}
