import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
const links = [['Home', '/'], ['Services', '/services'], ['Makeovers', '/makeovers'], ['About', '/about'], ['Book', '/book']];
export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [progress, setProgress] = useState(0);
    const panel = useRef<HTMLDialogElement>(null);
    const toggle = useRef<HTMLButtonElement>(null);
    const location = useLocation();
    useEffect(() => { setOpen(false); }, [location]);
    useEffect(() => { let frame = 0; const update = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(() => { const total = document.documentElement.scrollHeight - innerHeight; setProgress(total > 0 ? scrollY / total : 0); }); }; window.addEventListener('scroll', update, { passive: true }); window.addEventListener('resize', update); update(); return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', update); window.removeEventListener('resize', update); }; }, [location]);
    useEffect(() => { if (!open)
        return; const dialog = panel.current!; const previous = document.body.style.overflow; document.body.style.overflow = 'hidden'; dialog.showModal(); return () => { dialog.close(); document.body.style.overflow = previous; toggle.current?.focus(); }; }, [open]);
    return <header className={`nav ${progress > 0 ? 'scrolled' : ''}`}><Link className="logo" to="/">OXYGEN<span>.</span><small>makeover matters</small></Link><nav aria-label="Main navigation">{links.map(([name, to]) => <NavLink key={to} end={to === '/'} to={to} className={to === '/book' ? 'nav-book' : ''}>{name}</NavLink>)}</nav><button ref={toggle} className="menu-toggle" aria-expanded={open} onClick={() => setOpen(true)}>Menu +</button><span className="scroll-progress" style={{ transform: `scaleX(${progress})` }}/><dialog ref={panel} className="mobile-menu" aria-label="Navigation" onCancel={() => setOpen(false)}><button className="menu-close" onClick={() => setOpen(false)}>Close ×</button><nav aria-label="Mobile navigation">{links.map(([name, to], i) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}><small>0{i + 1}</small>{name}</NavLink>)}</nav><div className="logo">OXYGEN<span>.</span><small>makeover matters</small></div></dialog></header>;
}
