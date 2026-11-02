import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { services, gallery, photo } from '../data';
export default function ServiceSlider() { const [index, setIndex] = useState(0); const start = useRef(0); const service = services[index]; const move = (delta: number) => setIndex(i => (i + delta + services.length) % services.length); return <section className="section discovery" aria-label="Discover services" aria-roledescription="carousel"><p className="section-index">02 / OUR SERVICES</p><div className="section-heading"><h2>A little care.<br /><em>A beautiful difference.</em></h2><div className="slider-controls"><button aria-label="Previous service" onClick={() => move(-1)}>←</button><span>0{index + 1} / 06</span><button aria-label="Next service" onClick={() => move(1)}>→</button></div></div><div className="service-spread" tabIndex={0} aria-label="Service discovery; use left and right arrows" onKeyDown={e => { if (e.key === 'ArrowRight') {
    e.preventDefault();
    move(1);
} if (e.key === 'ArrowLeft') {
    e.preventDefault();
    move(-1);
} }} onPointerDown={e => { start.current = e.clientX; }} onPointerUp={e => { if (Math.abs(e.clientX - start.current) > 50)
    move(e.clientX < start.current ? 1 : -1); }}><div key={service.id}><p className="eyebrow">← Drag or swipe →</p><h3>{service.title}</h3><p>{service.description}</p><Link className="text-link" to={`/services/${service.id}`}>Explore {service.title} ↗</Link></div><img draggable={false} src={photo(gallery[index % gallery.length].image, 700)} alt="Editorial service inspiration placeholder" loading="lazy"/></div></section>; }
