import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Hero } from "./Hero";
import { ImpactMetrics } from "./ImpactMetrics";
import { HowIWork } from "./HowIWork";
import { WorkPreview } from "./WorkPreview";
import { SpeakingAndJournal } from "./SpeakingAndJournal";
import { Testimonials } from "./Testimonials";
import { ContactTeaser } from "./ContactTeaser";

export function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scrollTo");
    if (!scrollTo) return;

    // Clean the query param from the URL immediately
    navigate("/", { replace: true });

    // Wait for the page to fully render then scroll
    const attemptScroll = (attemptsLeft) => {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (attemptsLeft > 0) {
        setTimeout(() => attemptScroll(attemptsLeft - 1), 100);
      }
    };

    // Start trying after a short delay to let components mount
    setTimeout(() => attemptScroll(10), 100);
  }, [location.search]);

  return (
    <main>
      <Hero />
      <ImpactMetrics />
      <HowIWork />
      <WorkPreview />
      <SpeakingAndJournal />
      <Testimonials />
      <ContactTeaser />
    </main>
  );
}
