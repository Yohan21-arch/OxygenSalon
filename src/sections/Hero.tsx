import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { gallery, photo, services } from '../data';
import useReducedMotion from '../hooks/useReducedMotion';
import SpreadWordmark from '../components/SpreadWordmark';
const slides = [['The Oxygen approach', 'Beauty that still', 'feels like you.', 0], ['Hair / texture', 'Your texture.', 'Your way.', 1], ['Occasions', 'For moments', 'worth remembering.', 3]] as const;
export default function Hero() {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const [hovered,setHovered]=useState(false); const [focused,setFocused]=useState(false); const reduced = useReducedMotion(); const stopped=paused||hovered||focused||reduced;
    const slide = slides[index];
    useEffect(() => { if (stopped)
        return; const timer = setInterval(() => { if (!document.hidden)
        setIndex(i => (i + 1) % 3); }, 7000); return () => clearInterval(timer); }, [stopped]);
    useEffect(() => { let frame = 0; const update = () => { frame = requestAnimationFrame(() => { const y = scrollY; document.documentElement.style.setProperty('--scroll', String(Math.min(y, 900))); const object = document.querySelector<HTMLElement>('.traveller'); if (object) {
        const t = Math.min(y / 1450, 1);
        object.style.transform = `translate(${52 + Math.sin(t * Math.PI) * 38}vw,${18 + t * 40}vh) rotate(${-28 + t * 75}deg) scale(${1 - t * .3})`;
        object.style.opacity = String(Math.max(0, 1 - t * 1.2));
        object.style.visibility = t > .84 ? 'hidden' : 'visible';
    } }); }; window.addEventListener('scroll', update, { passive: true }); update(); return () => { window.removeEventListener('scroll', update); cancelAnimationFrame(frame); }; }, []);
    return <section className="hero" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={e => { if (!e.currentTarget.contains(e.relatedTarget))
        setFocused(false); }} aria-roledescription="carousel" aria-label="Oxygen introduction"><div className="hero-main"><div className="hero-copy"><p className="eyebrow">Female beauty & makeover studio / {slide[0]}</p><h1 tabIndex={-1}>{slide[1]}<br /><em>{slide[2]}</em></h1><p className="lede">Hair, hands, nails, skin and finishing touches — thoughtfully brought together under one roof.</p><div className="actions"><Link className="button" to="/book">Book an appointment ↗</Link><Link className="text-link" to="/services">Explore services ↗</Link></div><p className="hero-note">✳ A space for women. A moment for yourself.</p><div className="slider-controls"><button aria-label="Previous hero slide" onClick={() => setIndex((index + 2) % 3)}>←</button><span>0{index + 1} — 03</span><button aria-label="Next hero slide" onClick={() => setIndex((index + 1) % 3)}>→</button><button onClick={() => setPaused(!paused)}>{paused ? 'Play' : 'Pause'}</button></div></div><figure className="hero-portrait slide-image" key={`image-${index}`}><img src={photo(gallery[slide[3]].image)} alt={gallery[slide[3]].alt}/><figcaption>{slide[0]} / EDITORIAL PLACEHOLDER</figcaption><div className="slide-progress" key={index} style={{ animationPlayState: stopped ? 'paused' : 'running' }}/></figure></div><div className="hero-strip">{services.map(s => <Link key={s.id} to={`/services/${s.id}`}>{s.title}</Link>)}</div><SpreadWordmark hero/></section>;
}

