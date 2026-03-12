import {
  Atom,
  BarChart3,
  Bot,
  Cloud,
  Database,
  Gem,
  Package,
  Rocket,
  ShieldCheck,
  Waypoints,
  Workflow,
} from 'lucide-react';
import { constellationTech } from '../data/portfolio';

const orbitConfig = {
  1: {
    className: 'tech-constellation__orbit--ring-1',
    duration: '24s',
    reverse: false,
  },
  2: {
    className: 'tech-constellation__orbit--ring-2',
    duration: '34s',
    reverse: true,
  },
  3: {
    className: 'tech-constellation__orbit--ring-3',
    duration: '44s',
    reverse: false,
  },
};

const iconMap = {
  'Ruby on Rails': Gem,
  React: Atom,
  PostgreSQL: Database,
  Docker: Package,
  'AWS EC2': Cloud,
  Amplify: BarChart3,
  GCloud: Cloud,
  'Diseño API': Waypoints,
  DevOps: Workflow,
  Despliegues: Rocket,
  Automatización: Bot,
};

const shortLabelMap = {
  'Ruby on Rails': 'Rails',
  'AWS EC2': 'AWS',
  'Diseño API': 'API',
};

const groupedTech = Object.entries(orbitConfig).map(([ring, config]) => ({
  ring: Number(ring),
  ...config,
  items: constellationTech
    .filter((item) => item.ring === Number(ring))
    .map((item) => ({
      ...item,
      icon: iconMap[item.name] ?? Package,
      shortLabel: shortLabelMap[item.name] ?? item.name,
    })),
}));

export default function TechConstellation() {
  return (
    <div className="tech-constellation" aria-hidden="true">
      <div className="tech-constellation__panel">
        <div className="tech-constellation__heading">
          <span>Stack</span>
          <strong>Arquitectura completa</strong>
        </div>

        <div className="tech-constellation__orbital">
          <div className="tech-constellation__glow" />

          {groupedTech.map((group) => (
            <div
              key={group.ring}
              className={[
                'tech-constellation__orbit',
                group.className,
                group.reverse ? 'is-reverse' : '',
              ].join(' ')}
              style={{ '--orbit-duration': group.duration }}
            >
              {group.items.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.name}
                    className="tech-constellation__satellite"
                    style={{ '--angle': `${item.angle}deg` }}
                  >
                    <div
                      className={[
                        'tech-constellation__satellite-core',
                        group.reverse ? 'is-reverse' : '',
                      ].join(' ')}
                      style={{ '--orbit-duration': group.duration }}
                    >
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                  </div>
                );
              })}
            </div>
          ))}

          <div className="tech-constellation__core">
            <span>Cloud-ready</span>
            <strong>Stack</strong>
            <span>Producto + Infra + Data</span>
          </div>
        </div>

        <div className="tech-constellation__legend">
          {groupedTech.flatMap((group) =>
            group.items.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.name} className="tech-constellation__legend-item">
                  <span className="tech-constellation__legend-icon">
                    <Icon size={14} strokeWidth={1.9} />
                  </span>
                  <span>{item.shortLabel}</span>
                </div>
              );
            }),
          )}
        </div>
      </div>
    </div>
  );
}
