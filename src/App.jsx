import SectionPanel from './components/SectionPanel.jsx';
import { siteConfig, personalEvents, studiesEvents } from './data/events.js';

export default function App() {
  return (
    <>
      <div className="bg-canvas" aria-hidden="true">
        <span className="bg-orb bg-orb--1" />
        <span className="bg-orb bg-orb--2" />
        <span className="bg-orb bg-orb--3" />
        <span className="bg-orb bg-orb--4" />
        <span className="bg-orb bg-orb--5" />
      </div>

      <div className="page-content">
        <main className="sections-wrapper">
          <header className="page-header">
            <p className="page-header__label">Overview</p>
            <h1 className="page-header__title">{siteConfig.title}</h1>
          </header>

          <div className="sections-list">
            <SectionPanel
              id="personal"
              title="Personal"
              accentColor="#007AFF"
              events={personalEvents}
            />
            <SectionPanel
              id="studies"
              title="Studies"
              accentColor="#7C5CFC"
              events={studiesEvents}
            />
          </div>
        </main>

        <footer className="site-footer">
          <p className="site-footer__text">{siteConfig.footerText}</p>
        </footer>
      </div>
    </>
  );
}
