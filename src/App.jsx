import Timeline from './components/Timeline.jsx';
import { siteConfig, events } from './data/events.js';

export default function App() {
  return (
    <>
      <Timeline config={siteConfig} events={events} />
      <footer className="site-footer">
        <p className="site-footer__text">{siteConfig.footerText}</p>
      </footer>
    </>
  );
}
