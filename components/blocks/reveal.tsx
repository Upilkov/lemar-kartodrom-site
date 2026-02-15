"use client";

import { useEffect, useRef } from "react";
import { ensureGsap } from "@/lib/gsap";

export function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const { gsap } = ensureGsap();

    const q = gsap.utils.selector(el);
    const items = q("[data-reveal]");

    gsap.set(items, { opacity: 0, y: 18, filter: "blur(8px)" });

    const ctx = gsap.context(() => {
      items.forEach((item: Element) => {
        gsap.to(item, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return <div ref={ref}>{children}</div>;
}
