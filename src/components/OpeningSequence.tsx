import { useEffect, useState } from 'react';
import useReducedMotion from '../hooks/useReducedMotion';
export default function OpeningSequence() {
    const reduced = useReducedMotion();
    const [show, setShow] = useState(() => { try {
        return !sessionStorage.getItem('oxygen-opening');
    }
    catch {
        return false;
    } });
    useEffect(() => { try {
        sessionStorage.setItem('oxygen-opening', 'seen');
    }
    catch { } const timer = setTimeout(() => setShow(false), 2100); return () => clearTimeout(timer); }, []);
    return show && !reduced ? <div className="opening" aria-hidden="true"><div><strong>OXYGEN.</strong><p>makeover matters</p><span /></div></div> : null;
}
