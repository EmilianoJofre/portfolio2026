import SectionEyebrow from '../components/SectionEyebrow';
import Reveal from '../components/Reveal';
import { aboutHighlights } from '../data/portfolio';

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="section__inner">
        <div className="section__split">
          <div className="section-heading">
            <Reveal>
              <SectionEyebrow>Sobre mí</SectionEyebrow>
              <h2>De automatizaciones complejas a código desplegable.</h2>
            </Reveal>
          </div>

          <div className="about-copy">
            <Reveal delay={0.1}>
              <p>
                A lo largo de mi carrera en plataformas operativas, automatización logística e inversiones wealthtech, he aprendido que el código confiable es la base, pero el verdadero valor proviene de <strong>sistemas que pueden escalar con los requerimientos cambiantes del negocio</strong>.
              </p>
              <p style={{ marginTop: '1.25rem' }}>
                Me enfoco en domar procesos complejos: conectar fronteras de base de datos distribuidas con interfaces claras y usables (React, Vite, Node) mientras mantengo la infraestructura robusta por debajo del capó (AWS, Docker, CI/CD).
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="about-highlights">
                {aboutHighlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
