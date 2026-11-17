import { useEffect, useLayoutEffect, useRef, type CSSProperties, type PointerEvent } from 'react';
import { editorialPhoto, type EditorialPhoto } from '../galleryData';
import useReducedMotion from '../hooks/useReducedMotion';

export default function EditorialPhotoCard({item,onOpen}:{item:EditorialPhoto;onOpen:()=>void}) {
    const card=useRef<HTMLElement>(null), frame=useRef(0), release=useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    const reduced=useReducedMotion();
    useLayoutEffect(()=>{
        const element=card.current;
        if(!element) return;
        // Natural card height includes caption/credit; row spans reserve its space.
        const size=()=>{const gap=24; element.style.gridRowEnd='span '+Math.ceil((element.getBoundingClientRect().height+gap)/(8+gap));};
        const observer=new ResizeObserver(size);
        observer.observe(element);size();
        return()=>observer.disconnect();
    },[]);
    const reset=()=>{
        cancelAnimationFrame(frame.current);
        card.current?.style.setProperty('--tilt-x','0deg');
        card.current?.style.setProperty('--tilt-y','0deg');
    };
    useEffect(()=>{ if(reduced) reset(); return()=>{cancelAnimationFrame(frame.current);clearTimeout(release.current);}; },[reduced]);
    const move=(e:PointerEvent<HTMLElement>)=>{
        if(reduced || e.pointerType!=='mouse' || !matchMedia('(hover:hover) and (pointer:fine)').matches) return;
        const rect=e.currentTarget.getBoundingClientRect();
        const x=Math.max(-1,Math.min(1,(e.clientX-rect.left)/rect.width*2-1));
        const y=Math.max(-1,Math.min(1,(e.clientY-rect.top)/rect.height*2-1));
        cancelAnimationFrame(frame.current);
        frame.current=requestAnimationFrame(()=>{
            card.current?.style.setProperty('--tilt-x',`${-y*2.2}deg`);
            card.current?.style.setProperty('--tilt-y',`${x*2.2}deg`);
        });
    };
    return <figure ref={card} className="gallery-photo editorial-card" style={{'--photo-ratio':`${item.width} / ${item.height}`} as CSSProperties}
        onPointerEnter={e=>{if(e.pointerType==='mouse'&&!reduced){clearTimeout(release.current);e.currentTarget.dataset.lifted='true';e.currentTarget.dataset.revealed='true';}}}
        onPointerMove={move} onPointerLeave={()=>{reset();release.current=setTimeout(()=>{if(card.current)delete card.current.dataset.lifted;},450);}}
        onPointerCancel={reset} onFocusCapture={e=>{e.currentTarget.dataset.revealed='true';}}
        onAnimationEnd={e=>{if(e.animationName==='gallery-arrival')e.currentTarget.dataset.revealed='true';}}>
        <button className="image-crop gallery-trigger" onClick={onOpen} aria-label={`View ${item.title}`}>
            <span className="photo-float"><img src={editorialPhoto(item)} alt={item.alt} width={item.width} height={item.height}
                loading="lazy" decoding="async" srcSet={[480,960,1440].map(w=>`${editorialPhoto(item,w)} ${w}w`).join(', ')}
                sizes="(max-width:600px) 88vw, (max-width:1000px) 42vw, 40vw"/></span>
        </button>
        <figcaption><span>{item.category} / editorial</span><span>{item.title} ↗</span></figcaption>
        {item.source && <a className="photo-credit" href={item.source} target="_blank" rel="noreferrer">Photo: {item.photographer} / Unsplash ↗</a>}
    </figure>;
}
