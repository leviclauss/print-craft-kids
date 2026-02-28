"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What ages is this best for?",
    answer:
      "PrintCraft Kids is designed for ages 5–14, with a sweet spot of 7–11. We have guided prompts for younger kids and design challenges for older ones.",
  },
  {
    question: "How does the voice-to-print technology work?",
    answer:
      "Kids speak into a tablet, our AI generates a 3D model from their description in about 30–60 seconds, and our fast printers produce the physical object in 10–20 minutes.",
  },
  {
    question: "Is the printing material safe?",
    answer:
      "Yes! We use PLA filament which is non-toxic, biodegradable, and odorless. All printers are enclosed for safety.",
  },
  {
    question: "What area do you serve?",
    answer:
      "We serve the greater Bay Area within a 30-mile radius of Santa Clara, including San Jose, Sunnyvale, Mountain View, Palo Alto, Fremont, and Cupertino.",
  },
  {
    question: "What if it rains / we're outdoors?",
    answer:
      "We bring our own portable power and canopy setup for outdoor events. We can adapt to any venue — indoors or out.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 2 weeks in advance, though we can sometimes accommodate last-minute requests.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-navy group-hover:text-violet transition-colors duration-200">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-gray-400 shrink-0 ml-4 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-48 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-gray-500 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight mb-4">
            Questions? We&apos;ve Got Answers
          </h2>
        </div>

        {/* FAQ items */}
        <div className="animate-on-scroll">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
