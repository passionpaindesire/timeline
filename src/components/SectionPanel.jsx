import { useState, useRef } from 'react';
import Timeline from './Timeline.jsx';

export default function SectionPanel({ id, title, accentColor, events }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);

  function toggle() {
    const opening = !isOpen;
    setIsOpen(opening);
    if (opening) {
      setTimeout(() => {
        panelRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 80);
    }
  }

  return (
    <div
      ref={panelRef}
      className={`section-panel${isOpen ? ' section-panel--open' : ''}`}
    >
      <button
        className="section-panel__trigger"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls={`panel-body-${id}`}
      >
        <div className="section-panel__trigger-left">
          <span
            className="section-panel__dot"
            style={{ background: accentColor }}
          />
          <span className="section-panel__title">{title}</span>
          <span className="section-panel__count">{events.length}</span>
        </div>
        <svg
          className="section-panel__chevron"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        id={`panel-body-${id}`}
        className="section-panel__body"
        role="region"
      >
        <div className="section-panel__body-inner">
          <div className="section-panel__content">
            <Timeline events={events} />
          </div>
        </div>
      </div>
    </div>
  );
}
