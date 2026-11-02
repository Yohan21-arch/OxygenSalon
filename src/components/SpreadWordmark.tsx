export default function SpreadWordmark({ hero = false }: {
    hero?: boolean;
}) { return <div className={`wordmark ${hero ? 'hero-wordmark' : ''}`} aria-label="Oxygen">{'OXYGEN'.split('').map((letter, i) => <span key={i} aria-hidden="true" style={{ '--letter': i - 2.5 } as React.CSSProperties}>{letter}</span>)}{!hero && <span className="wordmark-period" aria-hidden="true">.</span>}</div>; }
