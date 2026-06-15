"use client";

import { FadeUpSection } from "../components/FadeUpSection";
import { EyebrowLabel } from "../components/EyebrowLabel";
import { DeadWebsiteVisual } from "../components/DeadWebsiteVisual";

const painBlocks = [
  {
    title: "Visitors land. And leave.",
    text: "The average website visitor decides within 8 seconds whether to stay or go. If your homepage does not immediately answer Why should I trust you? and What do I do next? — they are gone. Forever.",
  },
  {
    title: "You are spending on ads that lead nowhere.",
    text: "Running Google or Facebook ads? Every click costs you money. If those clicks land on a page with no strategy, no clear offer, and no reason to act — you are not running a marketing campaign. You are running a donation program for ad platforms.",
  },
  {
    title: "Your competitors are beating you with worse services.",
    text: "You know your work is better. But their website tells a better story. And story wins. Every time.",
  },
  {
    title: "You have normalised zero results.",
    text: 'The worst part? Most business owners have come to accept that "websites do not really work in my industry." That is not true. That is what happens when a website is built for aesthetics instead of outcomes.',
  },
];

export function ProblemAgitation() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-[1100px] mx-auto">
        <FadeUpSection className="text-center mb-16">
          <EyebrowLabel text="Let us Be Honest" />
          <h2
            className="text-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            You have a website.
            <br />
            It just does not work.
          </h2>
        </FadeUpSection>

        <FadeUpSection delay={0.1} className="text-center mb-12">
          <p className="text-body text-base md:text-lg max-w-2xl mx-auto">
            You spent money on it. Maybe you built it yourself. Maybe you paid someone. 
            Either way, the result is the same — it sits there, looking like a business, 
            doing nothing for your business.
          </p>
          <p className="text-heading font-semibold mt-4">Here is what is actually happening:</p>
        </FadeUpSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {painBlocks.map((block, index) => (
            <FadeUpSection key={index} delay={0.15 + index * 0.1}>
              <div className="bg-surface border border-border rounded-lg p-6 md:p-8 h-full hover:border-accent/30 transition-colors duration-300">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-red-500 text-lg mt-0.5">&#9679;</span>
                  <h3 className="text-heading font-semibold text-lg">
                    {block.title}
                  </h3>
                </div>
                <p className="text-body text-sm leading-relaxed pl-7">
                  {block.text}
                </p>
              </div>
            </FadeUpSection>
          ))}
        </div>

        <DeadWebsiteVisual />
      </div>
    </section>
  );
}
