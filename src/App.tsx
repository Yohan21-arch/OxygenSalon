import {Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OpeningSequence from './components/OpeningSequence';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Services,{ServiceCategory,NotFound} from './pages/Services';
import Makeovers from './pages/Makeovers';
import Staff from './pages/Staff';
import About from './pages/About';
import Booking from './pages/Booking';
export default function App(){return <><a className="skip-link" href="#main">Skip to content</a><OpeningSequence/><Navbar/><PageTransition><Routes><Route path="/" element={<Home/>}/><Route path="/services" element={<Services/>}/><Route path="/services/:category" element={<ServiceCategory/>}/><Route path="/makeovers" element={<Makeovers/>}/><Route path="/staff" element={<Staff/>}/><Route path="/about" element={<About/>}/><Route path="/book" element={<Booking/>}/><Route path="*" element={<NotFound/>}/></Routes></PageTransition><Footer/></>}
