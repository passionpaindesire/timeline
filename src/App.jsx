import Timeline from './components/Timeline.jsx';
import { siteConfig, events } from './data/events.js';

export default function App() {
  return (
    <>
      {/* Fixed atmospheric gradient canvas — stays behind all content */}
      <div className="bg-canvas" aria-hidden="true">
        <span className="bg-orb bg-orb--1" />
        <span className="bg-orb bg-orb--2" />
        <span className="bg-orb bg-orb--3" />
        <span className="bg-orb bg-orb--4" />
        <span className="bg-orb bg-orb--5" />
      </div>

      <div className="page-content">
        <Timeline config={siteConfig} events={events} />
        <footer className="site-footer">
          <p className="site-footer__text">{siteConfig.footerText}</p>
        </footer>
      </div>
    </>
  );
}
