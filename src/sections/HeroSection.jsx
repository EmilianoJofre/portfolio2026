import { ArrowRight, Code2 } from 'lucide-react';
import HeroGlobe from '../components/HeroGlobe';
import Reveal from '../components/Reveal';
import { heroSignals } from '../data/portfolio';

export default function HeroSection() {
  return (
    <section id="hero" className="section section--hero">
      <div className="section__inner">
        <div className="hero__layout">
          <div className="hero__content">
            <Reveal>
              <div className="hero__eyebrow">
                <span className="section-eyebrow__line" />
                Emiliano Jofré
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1>Arquitecto de Sistemas & Ing. Full-Stack.</h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="hero__lede">
                Construyo sistemas digitales resilientes, enfocándome en arquitectura escalable, despliegues en la nube y la creación de plataformas modulares impulsadas por las mejores prácticas del ciclo de vida del software.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="hero__actions">
                <a href="#experience" className="button button--primary">
                  Ver Experiencia <ArrowRight size={18} />
                </a>
                <a href="#contact" className="button button--ghost">
                  <Code2 size={18} /> Iniciar Conversación
                </a>
              </div>
            </Reveal>

            <div className="hero__signal-grid">
              {heroSignals.map((signal, idx) => (
                <Reveal key={idx} delay={0.4 + idx * 0.1}>
                  <div className="signal-card">
                    <strong>{signal.title}</strong>
                    <p>{signal.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="hero__visual">
            <Reveal delay={0.5}>
              <HeroGlobe />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
