import { useScrollReveal } from '../hooks/useScrollReveal.js';

export default function EventItem({ event, index }) {
  const [ref, isVisible] = useScrollReveal({ rootMargin: '0px' });

  return (
    <li
      ref={ref}
      className={`event${isVisible ? ' event--visible' : ''}`}
      style={{ transitionDelay: isVisible ? `${Math.min(index, 8) * 55}ms` : '0ms' }}
      tabIndex={0}
      aria-label={`${event.date}: ${event.title}`}
    >
      <div className="event__above">
        <time className="event__date">{event.date}</time>
      </div>

      <div className="event__spine" aria-hidden="true">
        <span className="event__dot" />
      </div>

      <div className="event__below">
        <h3 className="event__title">{event.title}</h3>
        {event.description && event.description !== '-' && (
          <p className="event__desc">{event.description}</p>
        )}
      </div>
    </li>
  );
}
