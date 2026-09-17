import { useScrollReveal } from '../hooks/useScrollReveal.js';

export default function EventItem({ event, index }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <li
      ref={ref}
      className={`event${isVisible ? ' event--visible' : ''}`}
      style={{ transitionDelay: isVisible ? `${index * 90}ms` : '0ms' }}
      tabIndex={0}
      aria-label={`${event.date}: ${event.title}`}
    >
      {/* Date — desktop only (hidden on mobile via CSS) */}
      <div className="event__date-col" aria-hidden="true">
        <time className="event__date">{event.date}</time>
      </div>

      {/* Dot sits on the shared timeline spine line */}
      <div className="event__spine" aria-hidden="true">
        <span className="event__dot" />
      </div>

      {/* Content */}
      <div className="event__content">
        {/* Date — mobile only (hidden on desktop via CSS) */}
        <time className="event__mobile-date" aria-hidden="true">
          {event.date}
        </time>
        <h3 className="event__title">{event.title}</h3>
        <p className="event__desc">{event.description}</p>
      </div>
    </li>
  );
}
