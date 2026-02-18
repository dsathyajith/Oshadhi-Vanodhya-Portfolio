import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { LoadingScreen } from "./components/LoadingScreen";
import { AuthProvider } from "./contexts/AuthContext";
import { CustomCursor } from "./components/CustomCursor";

import { PageTransition } from "./components/PageTransition";

// Pages
import { Home } from "./components/Home";
import { AboutPage } from "./components/AboutPage";
import { SpeakingJournalPage } from "./components/SpeakingJournalPage";
import { ResourcesPage } from "./components/ResourcesPage";
import { DownloadResume } from "./components/DownloadResume";
import { ContactPage } from "./components/ContactPage";
import { WorkPage } from "./components/WorkPage";
import { AccessLogsPage } from "./components/AccessLogsPage";

// Case Studies
import { IfsAiCaseStudy } from "./components/case-studies/IfsAiCaseStudy";
import { IfsSustainabilityCaseStudy } from "./components/case-studies/IfsSustainabilityCaseStudy";
import { BleepMedCaseStudy } from "./components/case-studies/BleepMedCaseStudy";
import { ExpertRepublicCaseStudy } from "./components/case-studies/ExpertRepublicCaseStudy";
import { ExpertRepublicGuestOverview } from "./components/case-studies/ExpertRepublicGuestOverview";
import { AutoMlCaseStudy } from "./components/case-studies/AutoMlCaseStudy";
import { LeadershipCaseStudy } from "./components/case-studies/LeadershipCaseStudy";
import { AiWaysOfWorkingCaseStudy } from "./components/case-studies/AiWaysOfWorkingCaseStudy";
import { BrpSystemsCaseStudy } from "./components/case-studies/BrpSystemsCaseStudy";
import { SwedishFitnessGuestOverview } from "./components/case-studies/SwedishFitnessGuestOverview";
import { IfsSustainabilityGuestOverview } from "./components/case-studies/IfsSustainabilityGuestOverview";
import { IfsAiGuestOverview } from "./components/case-studies/IfsAiGuestOverview";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {}, []);

  return (
    <AuthProvider>
      <Router>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
        <ScrollToTop />
        <CustomCursor />
        <div className="min-h-screen bg-[#020617] text-slate-50 font-sans selection:bg-violet-500/30 selection:text-violet-200 [overflow-x:clip] relative">
          {/* Global Background Effects */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-[#020617] to-[#020617]"></div>
          </div>

          {/* Content */}
          <div className="relative z-20 mt-0 pt-0">
            <Navbar />
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/journal" element={<SpeakingJournalPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/resume" element={<DownloadResume />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/work" element={<WorkPage />} />
                <Route path="/access-logs" element={<AccessLogsPage />} />

                {/* Case Studies */}
                <Route path="/work/ifs-ai" element={<IfsAiCaseStudy />} />
                <Route
                  path="/work/ifs-sustainability"
                  element={<IfsSustainabilityCaseStudy />}
                />
                <Route path="/work/bleep-med" element={<BleepMedCaseStudy />} />
                <Route
                  path="/work/expert-republic"
                  element={<ExpertRepublicCaseStudy />}
                />
                <Route
                  path="/work/expert-republic-guest-overview"
                  element={<ExpertRepublicGuestOverview />}
                />
                <Route
                  path="/work/swedish-fitness-guest-overview"
                  element={<SwedishFitnessGuestOverview />}
                />
                <Route
                  path="/work/ifs-sustainability-guest-overview"
                  element={<IfsSustainabilityGuestOverview />}
                />
                <Route
                  path="/work/ifs-ai-guest-overview"
                  element={<IfsAiGuestOverview />}
                />
                <Route path="/work/auto-ml" element={<AutoMlCaseStudy />} />
                <Route
                  path="/work/leadership"
                  element={<LeadershipCaseStudy />}
                />
                <Route
                  path="/work/ai-ways-of-working"
                  element={<AiWaysOfWorkingCaseStudy />}
                />
                <Route
                  path="/work/brp-systems"
                  element={<BrpSystemsCaseStudy />}
                />
              </Routes>
            </PageTransition>
            <Footer />
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}
