"use client";

import { FadeUpSection } from "../components/FadeUpSection";
import { EyebrowLabel } from "../components/EyebrowLabel";

const features = [
  {
    title: "Strategic Copywriting",
    text: "The words on your website are doing 80% of the selling. We write every line of copy with one goal: move the visitor to action.",
  },
  {
    title: "Conversion Architecture",
    text: "A website is not one page — it is a sequence. We map out the exact journey a visitor should take, from landing to contacting you, and build every section to advance that journey.",
  },
  {
    title: "Trust & Authority Design",
    text: "Testimonials, case studies, credentials, transformation stories — we build in every signal that makes a new visitor trust you immediately.",
  },
  {
    title: "Mobile-First, Speed-Optimised Build",
    text: "Over 70% of your visitors are on mobile. A slow, clunky mobile experience kills conversions. Every site we build is fast, clean, and built for the device your visitors actually use.",
  },
  {
    title: "Clear, Singular Call-to-Action",
    text: "No confusion. No six options. One clear next step, positioned correctly throughout the page, that makes it obvious what to do.",
  },
  {
    title: "Analytics & Tracking Setup",
    text: "You cannot improve what you do not measure. We set up tracking so you know exactly where visitors come from, how long they stay, and where they drop off.",
  },
];

export function Solution() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-[1100px] mx-auto">
        <FadeUpSection className="text-center mb-16">
          <EyebrowLabel text="What We Build" />
          <h2
            className="text-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Sales-Optimised Websites &
            <br />
            Landing Pages for Service Businesses.
          </h2>
          <p className="text-body text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            We do not just design websites. We engineer client acquisition systems — built on proven 
            direct-response principles, optimised for the specific way your ideal client thinks, and 
            structured to turn strangers into booked appointments.
          </p>
        </FadeUpSection>

        <FadeUpSection delay={0.1} className="text-center mb-12">
          <p className="text-heading font-semibold">
            Here is what every site we build includes:
          </p>
        </FadeUpSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FadeUpSection key={index} delay={0.15 + index * 0.08}>
              <div className="flex gap-4 p-6 rounded-lg border border-border/50 hover:border-accent/20 transition-colors duration-300">
                <span className="text-accent text-xl mt-0.5 shrink-0">&#8594;</span>
                <div>
                  <h3 className="text-heading font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-body text-sm leading-relaxed">
                    {feature.text}
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
