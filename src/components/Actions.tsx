import { Link } from 'react-router-dom';
export default function Actions() { return <div className="actions"><Link className="button" to="/book">Book an appointment <span>↗</span></Link><Link className="text-link" to="/services">Explore services <span>↗</span></Link></div>; }
