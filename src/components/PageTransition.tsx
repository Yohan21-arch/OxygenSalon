import { useEffect, useRef, useState } from 'react';
import { useLocation, type Location } from 'react-router-dom';
import useReducedMotion from '../hooks/useReducedMotion';

export default function PageTransition({ children }: { children: (location: Location) => React.ReactNode }) {
    const requested = useLocation();
    const reduced = useReducedMotion();
    const [displayed, setDisplayed] = useState(requested);
    const [phase, setPhase] = useState<'idle' | 'closing' | 'opening'>('idle');
    const lastRequest = useRef(requested.key);

    useEffect(() => {
        if (lastRequest.current === requested.key && !reduced) return;
        lastRequest.current = requested.key;
        if (reduced) {
            setDisplayed(requested);
            setPhase('idle');
            return;
        }
        setPhase('closing');
        const switchTimer = setTimeout(() => {
            setDisplayed(requested);
            setPhase('opening');
        }, 350);
        const finishTimer = setTimeout(() => setPhase('idle'), 750);
        return () => { clearTimeout(switchTimer); clearTimeout(finishTimer); };
    }, [requested, reduced]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        const observer = new IntersectionObserver(entries => entries.forEach(entry => {
            if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
        }));
        document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
        return () => observer.disconnect();
    }, [displayed.key]);

    useEffect(() => {
        if (phase !== 'idle') return;
        const frame = requestAnimationFrame(() => document.querySelector<HTMLElement>('main h1')?.focus({ preventScroll: true }));
        return () => cancelAnimationFrame(frame);
    }, [phase, displayed.key]);

    return <>
        <main id="main" className={`route-page route-${phase}`} inert={phase === 'closing'}>{children(displayed)}</main>
        <div className={`split-transition split-${phase}`} aria-hidden="true">
            <div className="split-panel split-top"/><div className="split-panel split-bottom"/>
            <span className="split-rule"/>
        </div>
    </>;
}
