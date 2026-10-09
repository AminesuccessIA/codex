import Image from 'next/image';
import Link from 'next/link';
import { Arrow } from './button';
import {
  clientSectors,
  featuredClients,
  type ClientReference,
} from '@/lib/clients';

function ClientMark({ client }: { client: ClientReference }) {
  return (
    <li className="client-reference">
      <div
        className={`client-mark${client.logo?.dark ? ' client-mark-dark' : ''}`}
      >
        {client.logo ? (
          <Image
            src={client.logo.src}
            width={client.logo.width}
            height={client.logo.height}
            alt=""
            unoptimized
          />
        ) : (
          <span className="client-name-mark">{client.name}</span>
        )}
      </div>
      <p className="client-caption">{client.name}</p>
    </li>
  );
}

export function ClientReferences({ compact = false }: { compact?: boolean }) {
  if (compact)
    return (
      <section
        className="shell client-preview"
        aria-labelledby="client-preview-title"
      >
        <div className="client-preview-heading">
          <div>
            <h2 id="client-preview-title">Ils nous font confiance.</h2>
          </div>
          <Link href="/references" className="text-link">
            Toutes nos références <Arrow diagonal />
          </Link>
        </div>
        <ul className="client-preview-grid">
          {featuredClients.map((client) => (
            <ClientMark key={client.slug} client={client} />
          ))}
        </ul>
      </section>
    );
  return (
    <div className="shell client-sector-list">
      {clientSectors.map((sector, index) => (
        <section
          className="client-sector"
          key={sector.slug}
          aria-labelledby={`sector-${sector.slug}`}
        >
          <div className="client-sector-heading">
            <span className="mono">0{index + 1} /</span>
            <h2 id={`sector-${sector.slug}`}>{sector.name}</h2>
          </div>
          <ul className="client-sector-grid">
            {sector.clients.map((client) => (
              <ClientMark key={client.slug} client={client} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
