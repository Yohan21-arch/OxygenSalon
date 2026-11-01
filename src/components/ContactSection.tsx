import { useEffect, useRef, useState } from 'react';
import { services, staff, gallery, salon, textures, photo, heroPhoto } from '../data';
import Label from './Label';
export default function ContactSection() { return <section className="section contact-section"><div className="section-index">08 / COME AS YOU ARE</div><div className="contact-grid"><h2>Find your<br /><em>moment.</em></h2>{[['Visit us', salon.address ?? 'Address coming soon'], ['Say hello', salon.phone ?? 'Phone coming soon'], ['Opening hours', salon.openingHours ?? 'Hours coming soon']].map(([label, value]) => <div key={label}><Label>{label}</Label><p>{value}</p>{label === 'Say hello' && <p className="small">Instagram & WhatsApp<br />Links coming soon</p>}</div>)}</div></section>; }
