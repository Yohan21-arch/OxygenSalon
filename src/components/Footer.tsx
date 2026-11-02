import { Link } from 'react-router-dom';
import Label from './Label';
import Actions from './Actions';
import SpreadWordmark from './SpreadWordmark';
export default function Footer() { return <footer><div className="closing"><Label>Oxygen / makeover matters</Label><div className="section-heading"><h2>Good beauty doesn’t hide you.<br /><em>It reveals you.</em></h2><Actions /></div></div><div className="footer-strip"><span>© {new Date().getFullYear()} OXYGEN</span><span>EXCLUSIVELY FOR WOMEN</span><Link to="/">Back to top ↑</Link></div><SpreadWordmark /></footer>; }
