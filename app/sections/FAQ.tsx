"use client";

import { useState } from "react";
import { FadeUpSection } from "../components/FadeUpSection";
import { EyebrowLabel } from "../components/EyebrowLabel";

const faqs = [
  {
    question: "I already have a website. Why would I need a new one?",
    answer: "Having a website and having a website that works are two very different things. If your current site is not generating consistent enquiries — it does not matter how good it looks. We have rebuilt sites for clients who had fine-looking websites and the difference in results was immediate.",
  },
  {
    question: "Cannot I just use a website builder like Wix or Squarespace?",
    answer: "You can. Thousands of businesses do. And most of those websites generate nothing. The problem is not the tool — it is the strategy, copy, and conversion architecture that builders cannot give you. You can build a beautiful shell with a page builder. What you cannot build is a sales system.",
  },
  {
    question: "I am in [niche industry]. Does this work for my type of business?",
    answer: "If you are a service-based business and you need clients — yes. We have built for consultants, real estate professionals, healthcare providers, coaches, legal professionals, and more. The principles of conversion do not change by industry.",
  },
  {
    question: "How much does it cost?",
    answer: "Our projects are scoped based on what you actually need — not on a one-size-fits-all template. The best way to get a number is to book a free audit call. We will understand your situation, tell you exactly what we would build, and give you a clear investment figure. No obligation.",
  },
  {
    question: "What if I do not have traffic yet?",
    answer: "Good question. A sales-optimised website is the foundation — but it needs traffic to generate results. We will be honest with you on the call about what else you will need to do (whether that is ads, SEO, content, or outreach) to make the site work for you. We do not overpromise.",
  },
  {
    question: "How long will the project take?",
    answer: "Most projects launch within 2–3 weeks from our kickoff call, depending on how quickly we receive your inputs (photos, business information, etc.).",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-border/50">
      <button
        className="w-full flex items-center justify-between py-5 text-left group cursor-pointer"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-heading font-semibold text-base md:text-lg pr-4 group-hover:text-accent transition-colors duration-200">
          {question}
        </span>
        <span
          className={`text-accent text-2xl shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? "500px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="text-body text-sm leading-relaxed pb-5 pr-8">{answer}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 px-6">
      <div className="max-w-[800px] mx-auto">
        <FadeUpSection className="text-center mb-16">
          <EyebrowLabel text="Frequently Asked" />
          <h2
            className="text-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Questions we hear before every project.
          </h2>
        </FadeUpSection>

        <div>
          {faqs.map((faq, index) => (
            <FadeUpSection key={index} delay={0.05 + index * 0.05}>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            </FadeUpSection>
          ))}
        </div>
      </div>
    </section>
  );
}
