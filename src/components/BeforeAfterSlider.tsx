import { useState } from 'react';
export type BeforeAfterPair = {
    before: string;
    after: string;
    beforeAlt: string;
    afterAlt: string;
};
export default function BeforeAfterSlider({ pair }: {
    pair: BeforeAfterPair;
}) { const [value, setValue] = useState(50); return <figure className="before-after"><div><img src={pair.before} alt={pair.beforeAlt}/><img className="after" src={pair.after} alt={pair.afterAlt} style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}/><span className="comparison-divider" style={{ left: `${value}%` }}/></div><label>Before / after comparison<input type="range" min="0" max="100" value={value} onChange={e => setValue(Number(e.target.value))} aria-label="Reveal after image" aria-valuetext={`${value}% after image revealed`}/></label></figure>; }
