"use client";

import { FadeUpSection } from "../components/FadeUpSection";
import { EyebrowLabel } from "../components/EyebrowLabel";
import { CTAButton } from "../components/CTAButton";

export function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="py-24 md:py-32 px-6 bg-surface/50 border-y border-border/50"
    >
      <div className="max-w-[800px] mx-auto text-center">
        <FadeUpSection>
          <EyebrowLabel text="Ready to Stop Leaving Money on the Table?" />
        </FadeUpSection>

        <FadeUpSection delay={0.1}>
          <h2
            className="text-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Book your free
            <br />
            Website Audit.
          </h2>
        </FadeUpSection>

        <FadeUpSection delay={0.2}>
          <p className="text-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            In 30 minutes, we will show you exactly what is wrong with your current website
            (or why you do not have one yet), what a sales-optimised version would look like,
            and what it would cost to build it.
            <br />
            <br />
            No fluff. No pitch decks. Just an honest conversation and a clear plan.
          </p>
        </FadeUpSection>

        <FadeUpSection delay={0.3}>
          <CTAButton href="https://calendly.com/samuel-primeservagency/30min" size="large">
            Book Your Free Audit →
          </CTAButton>
        </FadeUpSection>

        <FadeUpSection delay={0.4}>
          <p className="text-gold text-sm font-medium mt-6 mb-8">
            We only take on a limited number of new projects each month. Spots fill fast.
          </p>
        </FadeUpSection>

        <FadeUpSection delay={0.5}>
          <div className="flex flex-wrap items-center justify-center gap-6 text-muted text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              100% Confidential
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              No Commitment
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              30 Minutes Max
            </span>
          </div>
        </FadeUpSection>
      </div>
    </section>
  );
}
