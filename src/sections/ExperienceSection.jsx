import SectionEyebrow from '../components/SectionEyebrow';
import Reveal from '../components/Reveal';
import { experienceTimeline } from '../data/portfolio';
import './ExperienceTimeline.css';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="section__inner">
        <Reveal>
          <div className="section__intro">
            <SectionEyebrow>Trayectoria</SectionEyebrow>
            <h2>Experiencia Profesional.</h2>
            <p>
              Donde he construido sistemas y ayudado a equipos a escalar sus plataformas.
            </p>
          </div>
        </Reveal>

        <div className="timeline">
          {experienceTimeline.map((exp, idx) => (
            <Reveal key={idx} delay={idx * 0.15}>
              <div className="timeline__item">
                <div className="timeline__marker"></div>
                <div className="timeline__content capability-card">
                  <div className="timeline__header">
                    <img src={exp.logo} alt={`Logo ${exp.company}`} className="timeline__logo" />
                    <div>
                      <h3>{exp.role}</h3>
                      <span className="timeline__company">{exp.company}</span>
                      <span className="timeline__period">{exp.period}</span>
                    </div>
                  </div>
                  <p>{exp.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
