import { Arrow } from './button';
export function Ecosystem({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`ecosystem-visual ${compact ? 'compact' : ''}`}
      role="img"
      aria-label="Schéma de l’écosystème Microsoft : collaboration, cloud, IA et automatisation, reliés par les identités et la sécurité."
    >
      <div className="visual-top">
        <span className="visual-corner" /> MICROSOFT ECOSYSTEM{' '}
        <span className="visual-index">01 — 04</span>
      </div>
      <div className="system-map">
        <svg
          className="system-lines"
          viewBox="0 0 440 340"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M100 75H220V170M340 75H220M100 265H220V170M340 265H220" />
          <circle cx="220" cy="170" r="68" />
          <circle cx="220" cy="170" r="102" strokeDasharray="3 7" />
        </svg>
        <div className="map-core">
          <span className="core-mark" aria-hidden="true">
            p.
          </span>
          <small>VOTRE ENTREPRISE</small>
        </div>
        <div className="map-node node-one">
          <span>01 / COLLABORER</span>
          <strong>Microsoft 365</strong>
          <small>Teams · SharePoint</small>
        </div>
        <div className="map-node node-two">
          <span>02 / CONSTRUIRE</span>
          <strong>Azure</strong>
          <small>Cloud · Infrastructure</small>
        </div>
        <div className="map-node node-three">
          <span>03 / ASSISTER</span>
          <strong>Copilot & IA</strong>
          <small>Usages · Données</small>
        </div>
        <div className="map-node node-four">
          <span>04 / AUTOMATISER</span>
          <strong>Power Platform</strong>
          <small>Applications · Flux</small>
        </div>
      </div>
      <div className="visual-base">
        <span>
          <i /> IDENTITÉS & CYBERSÉCURITÉ
        </span>
        <span>Entra ID / Defender</span>
      </div>
      <div className="visual-foot">
        <span>Une architecture cohérente, de bout en bout.</span>
        <span>
          <Arrow diagonal />
        </span>
      </div>
    </div>
  );
}
