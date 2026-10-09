import Link from 'next/link';
import { Arrow } from './button';
import { findService } from '@/lib/services';
import { solutionGroups } from '@/lib/solution-catalog';

export function SolutionDirectory() {
  return (
    <div className="solution-directory">
      {solutionGroups.map((group, index) => (
        <section
          className="solution-family"
          id={group.id}
          key={group.id}
          aria-labelledby={`family-${group.id}`}
        >
          <div className="solution-family-heading">
            <span className="mono">0{index + 1} /</span>
            <h2 id={`family-${group.id}`}>{group.name}</h2>
            <p>{group.description}</p>
            <p className="solution-products">{group.products}</p>
          </div>
          <div className="solution-family-links">
            {group.slugs.map((slug) => {
              const service = findService(slug)!;
              return (
                <Link href={`/${slug}`} key={slug}>
                  <div>
                    <h3>{service.name}</h3>
                    <p>{service.short}</p>
                  </div>
                  <Arrow diagonal />
                </Link>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
