"use client";

import { FadeUpSection } from "../components/FadeUpSection";
import { EyebrowLabel } from "../components/EyebrowLabel";

const forYou = [
  "You are a service-based business owner (consultant, coach, agency, contractor, healthcare, law, finance, real estate, etc.)",
  "You currently have a website that gets little to no enquiries",
  "You are running or planning to run paid ads and need a page worth sending traffic to",
  "You know your service is good but your online presence does not reflect that",
  'You are tired of hearing "just get more followers" when what you actually need is a sales system',
  "You want to stop relying on referrals and build a predictable, online lead pipeline",
];

const notForYou = [
  "You are looking for the cheapest possible option (we do not build cheap websites — we build effective ones)",
  "You want a 5-page template site with stock photos and zero strategy",
  "You are not willing to invest in your business's growth",
  "You expect overnight results from a single page with no traffic",
];

export function WhoThisIsFor() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-[1100px] mx-auto">
        <FadeUpSection className="text-center mb-16">
          <EyebrowLabel text="Is This For You?" />
          <h2
            className="text-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            This is for you if…
          </h2>
        </FadeUpSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {forYou.map((item, index) => (
            <FadeUpSection key={index} delay={0.1 + index * 0.05}>
              <div className="flex gap-4 items-start p-5 bg-surface/50 border border-border/50 rounded-lg">
                <span className="text-accent text-lg shrink-0 mt-0.5">&#10003;</span>
                <p className="text-body text-sm leading-relaxed">{item}</p>
              </div>
            </FadeUpSection>
          ))}
        </div>

        <FadeUpSection className="text-center mb-12">
          <h2
            className="text-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            This is NOT for you if…
          </h2>
        </FadeUpSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {notForYou.map((item, index) => (
            <FadeUpSection key={index} delay={0.1 + index * 0.05}>
              <div className="flex gap-4 items-start p-5 bg-surface/30 border border-border/30 rounded-lg">
                <span className="text-red-500 text-lg shrink-0 mt-0.5">&#10005;</span>
                <p className="text-body text-sm leading-relaxed">{item}</p>
              </div>
            </FadeUpSection>
          ))}
        </div>
      </div>
    </section>
  );
}
