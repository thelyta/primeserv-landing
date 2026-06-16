"use client";

import { FadeUpSection } from "../components/FadeUpSection";
import { EyebrowLabel } from "../components/EyebrowLabel";
import { AnimatedCounter } from "../components/AnimatedCounter";

const stats = [
  { value: 1.4, prefix: "$", suffix: "M+", label: "In client results generated", decimals: 1 },
  { value: 47, suffix: "+", label: "Websites and funnels built", decimals: 0 },
  { value: 3, suffix: "x–8x", label: "Average increase in lead quality after launch", decimals: 0 },
];

const testimonials = [
  {
    quote: "Before PrimeServ, our website was just... there. After the rebuild, we started getting 3–4 enquiry calls a week from people who found us online. We had never had that before.",
    name: "George",
    business: "Real estate",
    city: "California",
  },
  {
    quote: "I did not think a website would move the needle for my business. I was wrong. Within 30 days of launching the new site, we had more qualified leads than we had had in the previous 6 months.",
    name: "Mr Segun",
    business: "Agency",
    city: "Global",
  },
  {
    quote: "The process was smooth and the result was better than I expected. But more importantly — it converts. That is what matters.",
    name: "Dr Empire",
    business: "Dental Clinic",
    city: "Lagos",
  },
];

export function Results() {
  return (
    <section id="results" className="py-24 md:py-32 px-6 bg-surface/30">
      <div className="max-w-[1100px] mx-auto">
        <FadeUpSection className="text-center mb-16">
          <EyebrowLabel text="What Clients Say" />
          <h2
            className="text-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Real businesses. Real results.
          </h2>
        </FadeUpSection>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <FadeUpSection key={index} delay={0.1 + index * 0.1}>
              <div className="text-center">
                <div
                  className="text-gold text-4xl md:text-5xl font-bold mb-2"
                  style={{ fontFamily: "'Syne Mono', monospace" }}
                >
                  <AnimatedCounter
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    duration={2000}
                  />
                </div>
                <p className="text-muted text-sm">{stat.label}</p>
              </div>
            </FadeUpSection>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <FadeUpSection key={index} delay={0.2 + index * 0.1}>
              <div className="bg-surface border border-border rounded-lg p-6 md:p-8 h-full flex flex-col">
                <p className="text-body text-sm leading-relaxed italic mb-6 flex-grow">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-border pt-4">
                  <p className="text-heading font-semibold text-sm">{t.name}</p>
                  <p className="text-muted text-xs">
                    {t.business}, {t.city}
                  </p>
                </div>
              </div>
            </FadeUpSection>
          ))}
        </div>
      </div>
    </section>
  );
}
