import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { services, staff, gallery, salon, textures, photo, heroPhoto } from '../data';
import Label from './Label';
export default function Actions() { return <div className="actions"><Link className="button" to="/book">Book an appointment <span>↗</span></Link><Link className="text-link" to="/services">Explore services <span>↗</span></Link></div>; }
