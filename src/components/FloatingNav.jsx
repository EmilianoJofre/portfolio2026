import { useEffect, useState } from 'react';

export default function FloatingNav({ items }) {
  const [activeSection, setActiveSection] = useState(items[0]?.id ?? 'hero');

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-35% 0px -50% 0px',
        threshold: [0.2, 0.5, 0.8],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [items]);

  return (
    <header className="floating-nav">
      <a className="floating-nav__brand" href="#hero" aria-label="Go to hero section">
        <span className="floating-nav__mark">EJ</span>
        <span className="floating-nav__copy">
          <strong>Emiliano Jofre</strong>
          <span>Digital Systems Architect</span>
        </span>
      </a>

      <nav className="floating-nav__links" aria-label="Primary">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={item.id === activeSection ? 'is-active' : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a className="button button--small button--ghost" href="#contact">
        Work With Me
      </a>
    </header>
  );
}
