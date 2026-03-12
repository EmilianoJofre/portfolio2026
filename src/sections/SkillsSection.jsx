import SectionEyebrow from '../components/SectionEyebrow';
import Reveal from '../components/Reveal';
import { skillsGroups } from '../data/portfolio';

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="section__inner">
        <Reveal>
          <div className="section__intro">
            <SectionEyebrow>Habilidades Core</SectionEyebrow>
            <h2>Dominio técnico.</h2>
            <p>
              No me ato a un solo framework; elijo herramientas que resuelven
              problemas de ingeniería del mundo real de forma limpia y mantenible.
            </p>
          </div>
        </Reveal>

        <div className="capabilities-grid">
          {skillsGroups.map((group, idx) => (
            <Reveal key={group.id} delay={idx * 0.1}>
              <div className="capability-card">
                <span className="capability-card__id">{group.id}</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul>
                  {group.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
