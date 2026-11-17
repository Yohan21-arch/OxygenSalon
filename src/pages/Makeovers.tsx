import useEditorialEntrance from '../hooks/useEditorialEntrance';
import { useRef, useState } from 'react';
import { makeoverGallery } from '../galleryData';
import EditorialPhotoCard from '../components/EditorialPhotoCard';
import MakeoverLightbox from '../components/MakeoverLightbox';
import BeforeAfterSlider, { type BeforeAfterPair } from '../components/BeforeAfterSlider';
export const beforeAfterPairs: BeforeAfterPair[] = [];
export default function Makeovers() {
    const [filter,setFilter]=useState('All');
    const galleryRef=useRef<HTMLDivElement>(null);
    useEditorialEntrance(galleryRef,filter);
    const [selected,setSelected]=useState<number|null>(null);
    const items=makeoverGallery.filter(item=>filter==='All'||item.category===filter);
    return <section className="section page-section makeover-editorial">
        <p className="eyebrow">The Oxygen edit</p>
        <h1 tabIndex={-1}>Real people.<br/><em>Real makeovers.</em></h1>
        <p>Editorial inspiration, not Oxygen Salon client results. Authentic customer transformations coming soon.</p>
        <div className="tabs" aria-label="Makeover categories">
            {['All','Hair','Nails','Makeup','Bridal','Skin'].map(category=><button key={category} aria-pressed={filter===category} onClick={()=>{setSelected(null);setFilter(category);}}>{category}</button>)}
        </div>
        <p className="gallery-count" role="status">{items.length} editorial {items.length===1?'image':'images'}{filter!=='All'?` in ${filter}`:''}</p>
        <div ref={galleryRef} className="collage gallery-results editorial-collage" key={filter}>
            {items.map((item,index)=><EditorialPhotoCard key={item.image} item={item} onOpen={()=>setSelected(index)}/>)}
        </div>
        {!items.length&&<p className="empty-state">{filter} photographs coming soon.</p>}
        {selected!==null&&<MakeoverLightbox items={items} index={selected} onChange={setSelected} onClose={()=>setSelected(null)}/>}
        {beforeAfterPairs.map(pair=><BeforeAfterSlider pair={pair} key={pair.before}/>)}
    </section>;
}
