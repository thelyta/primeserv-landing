"use client";

import { FadeUpSection } from "../components/FadeUpSection";
import { EyebrowLabel } from "../components/EyebrowLabel";

const stages = [
  {
    number: "01",
    title: "Discovery Audit",
    text: "We start by understanding your business, your ideal client, and your current online presence. We identify what is broken, what is missing, and what opportunity you are sitting on.",
    duration: "1–2 days",
  },
  {
    number: "02",
    title: "Strategy & Copy",
    text: "Before a single pixel is designed, we build the strategic blueprint. We write the copy, map the conversion flow, and define the offer structure. Most agencies skip this. It is the reason most websites fail.",
    duration: "5–7 days",
  },
  {
    number: "03",
    title: "Design & Build",
    text: "With a strategy locked, we build. Fast, clean, mobile-first. You get to review, give feedback, and approve before anything goes live.",
    duration: "7–10 days",
  },
  {
    number: "04",
    title: "Launch & Handoff",
    text: "Your site goes live. We walk you through everything — analytics, updates, and what to do next to drive traffic. You own the asset completely.",
    duration: "1–2 days",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 px-6 bg-surface/30">
      <div className="max-w-[1100px] mx-auto">
        <FadeUpSection className="text-center mb-16">
          <EyebrowLabel text="The Process" />
          <h2
            className="text-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            From zero to a website that sells —
            <br />
            in four stages.
          </h2>
        </FadeUpSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stages.map((stage, index) => (
            <FadeUpSection key={index} delay={0.1 + index * 0.1}>
              <div className="bg-surface border border-border rounded-lg p-6 h-full flex flex-col">
                <span
                  className="text-accent/40 text-5xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {stage.number}
                </span>
                <h3 className="text-heading font-semibold text-lg mb-3">
                  {stage.title}
                </h3>
                <p className="text-body text-sm leading-relaxed mb-4 flex-grow">
                  {stage.text}
                </p>
                <span className="text-muted text-xs font-medium">
                  Duration: {stage.duration}
                </span>
              </div>
            </FadeUpSection>
          ))}
        </div>

        <FadeUpSection className="text-center">
          <div className="inline-block bg-accent/10 border border-accent/30 rounded-lg px-8 py-5">
            <p className="text-heading font-semibold text-lg">
              Most clients go from start to launch in{" "}
              <span className="text-accent">under 3 weeks.</span>
            </p>
          </div>
        </FadeUpSection>
      </div>
    </section>
  );
}
