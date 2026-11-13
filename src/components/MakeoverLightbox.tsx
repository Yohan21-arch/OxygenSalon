import { useEffect, useRef } from 'react';
import { gallery, photo } from '../data';
export default function MakeoverLightbox({ items, index, onChange, onClose }: {
    items: typeof gallery;
    index: number;
    onChange: (n: number) => void;
    onClose: () => void;
}) { const dialog = useRef<HTMLDialogElement>(null); const start = useRef(0); const item = items[index]; const move = (n: number) => onChange((index + n + items.length) % items.length); useEffect(() => { const previous = document.activeElement as HTMLElement; const overflow = document.body.style.overflow; document.body.style.overflow = 'hidden'; dialog.current?.showModal(); return () => { document.body.style.overflow = overflow; previous?.focus(); }; }, []); return <dialog ref={dialog} className="lightbox" aria-label={item.title} onCancel={onClose} onKeyDown={e => { if (e.key === 'ArrowLeft') { e.preventDefault(); move(-1); } if (e.key === 'ArrowRight') { e.preventDefault(); move(1); } }}><button className="lightbox-close" onClick={onClose}>Close ×</button><img src={photo(item.image, 1600)} alt={item.alt} onTouchStart={e => { start.current = e.touches[0].clientX; }} onTouchEnd={e => { const d = e.changedTouches[0].clientX - start.current; if (Math.abs(d) > 50)
    move(d < 0 ? 1 : -1); }}/><div className="lightbox-caption" aria-live="polite" aria-atomic="true"><button aria-label="Previous image" onClick={() => move(-1)}>←</button><div><p>{item.category} / EDITORIAL PLACEHOLDER</p><h2>{item.title}</h2></div><button aria-label="Next image" onClick={() => move(1)}>→</button></div></dialog>; }
