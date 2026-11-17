/// <reference types="vite/client" />
import { gallery, photo } from './data';
export type EditorialPhoto = typeof gallery[number] & { asset?: string; width: number; height: number; photographer?: string; source?: string };
const source = (slug:string) => `https://unsplash.com/photos/${slug}`;
export const makeoverGallery: EditorialPhoto[] = [
    {...gallery[0],width:960,height:1200},
    {image:'curls',asset:'curls',category:'Hair',title:'Texture, celebrated',alt:'Editorial stock photograph of naturally curly hair',width:960,height:1200,photographer:'Honey Yanibel Minaya Cruz',source:source('woman-with-curly-hair-gm5naIg3Fvo')},
    {...gallery[1],width:960,height:1200},
    {image:'bridal',asset:'bridal',category:'Bridal',title:'Before the occasion',alt:'Editorial stock photograph of an Indian bride having makeup applied',width:960,height:1200,photographer:'Raju Kumar',source:source('a-bride-is-having-her-makeup-applied-gkLzTqe2aoE')},
    {image:'skin',asset:'skin',category:'Skin',title:'A moment of care',alt:'Editorial stock photograph of a woman receiving a facial treatment',width:960,height:768,photographer:'Iwaria Inc.',source:source('a-woman-getting-a-facial-mask-on-her-face-TLLro7iVLtk')},
    {...gallery[2],width:960,height:960},
    {image:'makeup',asset:'makeup',category:'Makeup',title:'Colour, considered',alt:'Editorial stock portrait featuring pink and purple eye makeup',width:960,height:1200,photographer:'hosein zanbori',source:source('a-woman-with-a-pink-and-purple-make-up-on-her-face-0o4QY48B-r0')},
    {image:'nail-art',asset:'nail-art',category:'Nails',title:'Art in miniature',alt:'Editorial stock close-up of decorative nail art',width:960,height:960,photographer:'Budka Damdinsuren',source:source('womans-nails-with-manicure-jRXxNpA6d_k')},
    {...gallery[3],width:960,height:1200},
    {image:'manicure',asset:'manicure',category:'Nails',title:'The softest finish',alt:'Editorial stock photograph of a pale pink manicure',width:960,height:960,photographer:'Chelson Tamares',source:source('hand-with-light-pink-manicured-nails-vtQHwU4F13s')},
];
export function editorialPhoto(item:EditorialPhoto,width=960) {
    if(item.asset) return `${import.meta.env.BASE_URL}images/editorial/${item.asset}-${width}.webp`;
    return `${photo(item.image,width)}&h=${Math.round(width*item.height/item.width)}`;
}
