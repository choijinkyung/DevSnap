import { useEffect, useRef } from "react";
export function useInfiniteScroll(onIntersect: () => void) {
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver( //targetRef div가 화면에 나타났는지 감시
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          onIntersect();
        }
      },
      {
        root: null,
        rootMargin: "100px",
        threshold: 0.1,
      }
    );
    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [onIntersect]);

  return targetRef;
}
