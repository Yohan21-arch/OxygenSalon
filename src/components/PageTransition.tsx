import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export default function PageTransition({ children }: {
    children: React.ReactNode;
}) {
    const location = useLocation();
    useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); const frame = requestAnimationFrame(() => { document.querySelector<HTMLElement>('main h1')?.focus({ preventScroll: true }); }); const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
    } })); document.querySelectorAll('.reveal').forEach(e => observer.observe(e)); return () => { cancelAnimationFrame(frame); observer.disconnect(); }; }, [location.pathname]);
    return <main id="main" key={location.pathname} className="route-page"><div className="route-sweep" aria-hidden="true"/>{children}</main>;
}
