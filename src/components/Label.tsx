import { useEffect, useRef, useState } from 'react';
import { services, staff, gallery, salon, textures, photo, heroPhoto } from '../data';
export default function Label({ children }: {
    children: React.ReactNode;
}) { return <p className="eyebrow">{children}</p>; }
