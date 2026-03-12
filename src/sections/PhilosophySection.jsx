import SectionEyebrow from '../components/SectionEyebrow';
import Reveal from '../components/Reveal';
import { philosophyPrinciples } from '../data/portfolio';

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="section">
      <div className="section__inner">
        <div className="philosophy-layout">
          <div className="philosophy-intro">
            <Reveal>
              <SectionEyebrow>Filosofía de Ingeniería</SectionEyebrow>
              <h2>Cómo pienso sobre los sistemas.</h2>
              <p>
                Los sistemas que perduran son los que se diseñan pensando en las
                personas que los operarán y mantendrán a diario.
              </p>
            </Reveal>
          </div>

          <div className="philosophy-list">
            {philosophyPrinciples.map((principle, idx) => (
              <Reveal key={idx} delay={idx * 0.15}>
                <div className="philosophy-card">
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
