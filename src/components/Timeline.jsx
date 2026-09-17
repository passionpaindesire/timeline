import EventItem from './EventItem.jsx';

export default function Timeline({ events }) {
  return (
    <ol className="timeline-list" aria-label="Timeline events">
      {events.map((event, index) => (
        <EventItem key={event.id} event={event} index={index} />
      ))}
    </ol>
  );
}
