import { Mail, Github, Linkedin, MessageSquareCode } from 'lucide-react';
import Reveal from '../components/Reveal';
import { contactDetails } from '../data/portfolio';

export default function ContactSection() {
  return (
    <section id="contact" className="section section--contact">
      <div className="section__inner">
        <div className="contact-panel">
          <Reveal>
            <div className="contact-panel__copy">
              <h2>¿Listo para construir?</h2>
              <p>
                Estoy disponible para roles de ingeniería de software a tiempo completo, arquitectura 
                y trabajo como freelance. Hablemos sobre tu próximo sistema o aplicación web.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="contact-panel__actions">
              <a href={`mailto:${contactDetails.email}`} className="button button--primary">
                <MessageSquareCode size={18} /> {contactDetails.primaryCta}
              </a>
              <div className="contact-panel__socials flex gap-4 mt-6">
                <a href="https://github.com/emilianojofre" target="_blank" rel="noreferrer" className="button button--ghost button--small">
                  <Github size={18} /> GitHub
                </a>
                <a href="https://linkedin.com/in/emiliano-j-b72557121" target="_blank" rel="noreferrer" className="button button--ghost button--small">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
