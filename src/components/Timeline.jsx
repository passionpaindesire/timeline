import EventItem from './EventItem.jsx';

export default function Timeline({ config, events }) {
  return (
    <section id="timeline" className="timeline-section" aria-labelledby="timeline-heading">
      <header className="timeline-section__header">
        <div className="timeline-section__bar" aria-hidden="true" />
        <p className="timeline-section__label">{config.sectionLabel}</p>
        <h2 className="timeline-section__heading" id="timeline-heading">
          {config.sectionHeading}
        </h2>
      </header>

      <ol className="timeline-list" aria-label="Timeline of upcoming events">
        {events.map((event, index) => (
          <EventItem key={event.id} event={event} index={index} />
        ))}
      </ol>
    </section>
  );
}
