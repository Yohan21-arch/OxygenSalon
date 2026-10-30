// All illustrative content lives here. Replace with approved salon details before launch.
export type Service = { name: string; description: string; duration: string; price: number | null };
export const services: {id:string; title:string; description:string; items:Service[]}[] = [
 {id:'hair',title:'Hair',description:'Cuts, colour & a little confidence.',items:[{name:'Signature Cut',description:'Consultation, cut and finish',duration:'60 min',price:null},{name:'Hair Spa',description:'Treatment and a considered finish',duration:'60 min',price:null},{name:'Colour',description:'A colour consultation shaped around you',duration:'Varies',price:null}]},
 {id:'nails',title:'Nails',description:'Small canvases. Beautiful details.',items:[{name:'Manicure & Polish',description:'Shaping, care and polish',duration:'To be confirmed',price:null},{name:'Nail Art',description:'An individual finishing touch',duration:'Varies',price:null}]},
 {id:'hands',title:'Hands',description:'Care that goes beyond the surface.',items:[{name:'Hand Care Ritual',description:'Gentle grooming and finishing',duration:'To be confirmed',price:null}]},
 {id:'skin',title:'Skin',description:'A fresh start for your skin.',items:[{name:'Skin Consultation',description:'A conversation about your skin and care',duration:'To be confirmed',price:null},{name:'Facial Care',description:'Treatment selected after consultation',duration:'Varies',price:null}]},
 {id:'makeup',title:'Makeup',description:'Your features, thoughtfully illuminated.',items:[{name:'Occasion Makeup',description:'A considered look for your occasion',duration:'Varies',price:null}]},
 {id:'bridal',title:'Bridal / occasion',description:'For the moments you will remember.',items:[{name:'Bridal Consultation',description:'Plan your look, from first idea to final detail',duration:'To be confirmed',price:null}]}
];
export const photo = (id:string,w=900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
export const heroPhoto='photo-1524504388940-b1c1722653e1';
export const gallery = [
 {image:'photo-1524504388940-b1c1722653e1',category:'Makeup',title:'Quiet confidence',alt:'Editorial reference portrait with natural makeup'},
 {image:'photo-1522337360788-8b13dee7a37e',category:'Hair',title:'A softer silhouette',alt:'Reference photograph of hair styling in a salon'},
 {image:'photo-1519014816548-bf5fe059798b',category:'Nails',title:'The smallest details',alt:'Reference photograph of a polished manicure'},
 {image:'photo-1487412947147-5cebf100ffc2',category:'Beauty',title:'Beautifully yourself',alt:'Editorial beauty portrait used as a placeholder'}
];
export const staff = [
 {id:'hair-artist',name:'Meet your hair artist',role:'Senior Hair Artist',specialisation:'Cut · colour · texture',description:'An individual approach to shape, movement and everyday wear.',image:'photo-1580489944761-15a19d654956'},
 {id:'nail-artist',name:'Meet your nail artist',role:'Nail Artist',specialisation:'Precision · polish · art',description:'Careful preparation and a thoughtful eye for the smallest details.',image:'photo-1534528741775-53994a69daeb'},
 {id:'makeup-artist',name:'Meet your makeup artist',role:'Makeup Artist',specialisation:'Beauty · bridal · occasion',description:'Soft definition and expressive looks that still feel like you.',image:'photo-1531123897727-8f129e1688ce'},
 {id:'skin-specialist',name:'Meet your skin specialist',role:'Skin Specialist',specialisation:'Consultation · personalised care',description:'Considered rituals with comfort and healthy skin at their heart.',image:'photo-1551836022-d5d88e9218df'}
];
export const salon = {name:'Oxygen',tagline:'makeover matters',address:null,phone:null,instagram:null,whatsapp:null,openingHours:null};
export const textures = {
 straight:{path:'M70 180 C180 155 250 170 350 150 S540 112 650 120',finish:'Sleek / polished',care:'Gentle smoothing & protection',approach:'Healthy hair first'},
 wavy:{path:'M70 160 C130 65 200 65 260 160 S390 255 450 160 S580 65 650 160',finish:'Soft / flowing',care:'Texture-conscious styling',approach:'Work with your natural movement'},
 curly:{path:'M65 160 C65 50 180 50 180 150 C180 240 90 240 105 155 C120 65 290 65 290 150 C290 240 200 240 215 155 C230 65 400 65 400 150 C400 240 310 240 325 155 C340 65 510 65 510 150 C510 240 420 240 435 155 C450 65 620 65 650 160',finish:'Defined / expressive',care:'Moisture & curl-conscious care',approach:'Celebrate your natural pattern'}
};
