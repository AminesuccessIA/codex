import Link from 'next/link';
export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? 'M6 18 18 6M6 6h12v12' : 'M4 12h16m-6-6 6 6-6 6'}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function Button({
  children,
  href,
  variant = 'primary',
}: {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'lime';
}) {
  return (
    <Link href={href} className={`button button-${variant}`}>
      {children}
      <Arrow diagonal />
    </Link>
  );
}
export function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <span className="status-dot" />
      {children}
    </p>
  );
}
