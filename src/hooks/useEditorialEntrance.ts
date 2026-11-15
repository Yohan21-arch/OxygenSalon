import { useEffect, type RefObject } from 'react';
import useReducedMotion from './useReducedMotion';

// Observe each new filtered collection once. Content is visible before enhancement.
export default function useEditorialEntrance(root: RefObject<HTMLElement | null>, collection: string) {
    const reduced = useReducedMotion();
    useEffect(() => {
        if (!root.current || reduced || !('IntersectionObserver' in window)) return;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('editorial-entered');
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.08 });
        root.current.querySelectorAll('.gallery-photo').forEach(item => observer.observe(item));
        return () => observer.disconnect();
    }, [root, collection, reduced]);
}
