import { useScrollReveal } from '../hooks/useScrollReveal.js';

const ACCENTS = [
  { color: '#007AFF', glow: 'rgba(0,122,255,0.22)' },    // blue
  { color: '#7C5CFC', glow: 'rgba(124,92,252,0.22)' },   // violet
  { color: '#F45B8A', glow: 'rgba(244,91,138,0.22)' },   // pink
  { color: '#FF8A4C', glow: 'rgba(255,138,76,0.22)' },   // orange
  { color: '#52C7A3', glow: 'rgba(82,199,163,0.22)' },   // mint
  { color: '#F4C95D', glow: 'rgba(244,201,93,0.22)' },   // gold
];

export default function EventItem({ event, index }) {
  const [ref, isVisible] = useScrollReveal();
  const accent = ACCENTS[index % ACCENTS.length];

  return (
    <li
      ref={ref}
      className={`event${isVisible ? ' event--visible' : ''}`}
      style={{
        transitionDelay: isVisible ? `${index * 90}ms` : '0ms',
        '--accent': accent.color,
        '--accent-glow': accent.glow,
      }}
      tabIndex={0}
      aria-label={`${event.date}: ${event.title}`}
    >
      <div className="event__date-col" aria-hidden="true">
        <time className="event__date">{event.date}</time>
      </div>

      <div className="event__spine" aria-hidden="true">
        <span className="event__dot" />
      </div>

      <div className="event__content">
        <time className="event__mobile-date" aria-hidden="true">
          {event.date}
        </time>
        <h3 className="event__title">{event.title}</h3>
        {event.description && event.description !== '-' && (
          <p className="event__desc">{event.description}</p>
        )}
      </div>
    </li>
  );
}
