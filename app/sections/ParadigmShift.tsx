"use client";

import { FadeUpSection } from "../components/FadeUpSection";
import { EyebrowLabel } from "../components/EyebrowLabel";

const callouts = [
  {
    title: "Built to Convert",
    text: "Every word, every layout decision, every button placement is engineered around one question: will this move a visitor closer to saying yes?",
  },
  {
    title: "Built for Trust",
    text: "People do not buy from strangers. We build in social proof, authority signals, and credibility frameworks that make first-time visitors feel like they already know you.",
  },
  {
    title: "Built to Generate ROI",
    text: "A good website pays for itself. We track the metrics that matter — not vanity traffic, but leads, enquiries, and booked calls.",
  },
];

export function ParadigmShift() {
  return (
    <section className="py-24 md:py-32 px-6 bg-surface/30">
      <div className="max-w-[1100px] mx-auto">
        <FadeUpSection className="text-center mb-16">
          <EyebrowLabel text="The Truth About Websites" />
          <h2
            className="text-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            A website is not a brochure.
            <br />
            It is a salesperson who works 24/7.
          </h2>
        </FadeUpSection>

        <FadeUpSection delay={0.1} className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-body text-base md:text-lg leading-relaxed mb-4">
            The businesses winning online are not winning because they have prettier websites. 
            They are winning because their websites are{" "}
            <em className="text-heading not-italic font-semibold">
              built like sales systems
            </em>
            .
          </p>
          <p className="text-body text-base md:text-lg leading-relaxed mb-4">
            They know exactly what to say to a cold visitor who has never heard of them. 
            They know how to build trust fast. They know how to make the next step feel obvious — not pushy.
          </p>
          <p className="text-body text-base md:text-lg leading-relaxed mb-6">
            A website built this way is not a cost. It is infrastructure. It keeps working 
            while you sleep, while you are with a client, while you are on holiday. 
            It qualifies leads, handles objections, and books appointments — without you lifting a finger.
          </p>
          <p
            className="text-accent font-bold text-lg tracking-wide"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            That is what we build.
          </p>
        </FadeUpSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {callouts.map((callout, index) => (
            <FadeUpSection key={index} delay={0.2 + index * 0.1}>
              <div className="text-center md:text-left">
                <h3
                  className="text-heading font-bold text-xl mb-3"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {callout.title}
                </h3>
                <p className="text-body text-sm leading-relaxed">
                  {callout.text}
                </p>
              </div>
            </FadeUpSection>
          ))}
        </div>
      </div>
    </section>
  );
}
