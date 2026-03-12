import BackgroundCanvas from './components/BackgroundCanvas';
import FloatingNav from './components/FloatingNav';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';
import HeroSection from './sections/HeroSection';
import PhilosophySection from './sections/PhilosophySection';
import TechnologySection from './sections/TechnologySection';
import { navigationItems } from './data/portfolio';

export default function App() {
  return (
    <div className="app-shell">
      <BackgroundCanvas />
      <div className="ambient ambient--north" aria-hidden="true" />
      <div className="ambient ambient--south" aria-hidden="true" />
      <div className="grain-overlay" aria-hidden="true" />
      <FloatingNav items={navigationItems} />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <PhilosophySection />
        <TechnologySection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
}
