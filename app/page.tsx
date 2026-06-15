import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { ProblemAgitation } from "./sections/ProblemAgitation";
import { ParadigmShift } from "./sections/ParadigmShift";
import { Solution } from "./sections/Solution";
import { Results } from "./sections/Results";
import { WhoThisIsFor } from "./sections/WhoThisIsFor";
import { HowItWorks } from "./sections/HowItWorks";
import { FAQ } from "./sections/FAQ";
import { FinalCTA } from "./sections/FinalCTA";
import { Footer } from "./sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemAgitation />
      <ParadigmShift />
      <Solution />
      <Results />
      <WhoThisIsFor />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
