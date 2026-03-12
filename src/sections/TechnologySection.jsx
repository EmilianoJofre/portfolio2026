import SectionEyebrow from '../components/SectionEyebrow';
import Reveal from '../components/Reveal';
import TechConstellation from '../components/TechConstellation';
import { technologyGroups } from '../data/portfolio';

export default function TechnologySection() {
  return (
    <section id="technology" className="section">
      <div className="section__inner">
        <div className="technology-layout">
          <div className="technology-copy">
            <Reveal>
              <SectionEyebrow>Herramientas Específicas</SectionEyebrow>
              <h2>Un ecosistema elegido deliberadamente.</h2>
              <p>
                Para lograr ciclos de desarrollo ágiles y sistemas robustos en producción, 
                confío en stacks probados y patrones de infraestructura modernos.
              </p>
            </Reveal>

            <div className="technology-grid">
              {technologyGroups.map((group, idx) => (
                <Reveal key={idx} delay={0.1 + idx * 0.1}>
                  <div className="technology-card">
                    <h3>{group.title}</h3>
                    <ul>
                      {group.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="technology-visual">
            <Reveal delay={0.3}>
              <TechConstellation />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
