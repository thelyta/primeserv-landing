"use client";

import { FadeUpSection } from "../components/FadeUpSection";
import { EyebrowLabel } from "../components/EyebrowLabel";
import { CTAButton } from "../components/CTAButton";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6">
      <div className="max-w-[1100px] mx-auto text-center">
        <FadeUpSection>
          <EyebrowLabel text="For Service Business Owners" />
        </FadeUpSection>

        <FadeUpSection delay={0.1}>
          <h1
            className="text-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Your Website Is Costing You
            <br />
            Clients Every Single Day.
          </h1>
        </FadeUpSection>

        <FadeUpSection delay={0.2}>
          <p className="text-body text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Most business websites look decent enough. The problem is they are not built to sell. 
            No structure. No strategy. No system. They sit there, collecting dust, while your competitors 
            with uglier businesses quietly win the clients that should have been yours.
            <br />
            <br />
            <span className="text-heading font-semibold">We fix that.</span>
          </p>
        </FadeUpSection>

        <FadeUpSection delay={0.3}>
          <CTAButton href="#final-cta" size="large">
            Book Your Free Website Audit →
          </CTAButton>
        </FadeUpSection>

        <FadeUpSection delay={0.4}>
          <p className="text-muted text-sm mt-6">
            No pitch. No pressure. We will show you exactly what is broken — and what it would take to fix it.
          </p>
        </FadeUpSection>
      </div>
    </section>
  );
}
