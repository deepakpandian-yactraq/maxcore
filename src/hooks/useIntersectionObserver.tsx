import { useEffect, useState, useRef, RefObject } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export function useIntersectionObserver(
  options: IntersectionObserverOptions = {},
  once = true
): [boolean, RefObject<HTMLDivElement>] {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (once && ref.current) {
          observer.unobserve(ref.current);
        }
      } else if (!once) {
        setIsVisible(false);
      }
    }, options);

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options, once]);

  return [isVisible, ref];
}