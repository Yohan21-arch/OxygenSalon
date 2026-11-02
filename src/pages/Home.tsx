import { Link } from 'react-router-dom';
import Hero from '../sections/Hero';
import ServiceSlider from '../components/ServiceSlider';
import PhilosophySection from '../components/PhilosophySection';
import MakeoverGallery from '../components/MakeoverGallery';
import TextureDemo from '../components/TextureDemo';

import TravellingSalonObject from '../components/TravellingSalonObject';
export default function Home() { return <><Hero /><div className="marquee" aria-label="Hair, nails, hands, skin, makeup, bridal"><span aria-hidden="true">HAIR · NAILS · HANDS · SKIN · MAKEUP · BRIDAL · HAIR · NAILS · HANDS · SKIN · MAKEUP · BRIDAL · </span></div><PhilosophySection /><div className="section-tail"><Link to="/about">The Oxygen philosophy ↗</Link></div><ServiceSlider /><MakeoverGallery /><div className="section-tail"><Link to="/makeovers">Explore the full edit ↗</Link></div><TextureDemo /><section className="section booking-callout"><p className="section-index">05 / A MOMENT FOR YOU</p><h2>Your next look<br /><em>starts here.</em></h2><Link className="button" to="/book">Begin your appointment request ↗</Link><p>Online appointment requests are not yet connected.</p></section><TravellingSalonObject /></>; }
