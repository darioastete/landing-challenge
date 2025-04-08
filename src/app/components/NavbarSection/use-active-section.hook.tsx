import { useEffect, useState } from "react";
import { LinkItem } from "@/app/types";

export function useActiveSection(links: LinkItem[]) {
  const [hash, setHash] = useState("");
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const threshold = 0.5;

    links.forEach((link) => {
      const id = link.href.replace("#", "");
      if (!id) return

      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setHash(link.href);
          }
        },
        { threshold }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [links]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setHash("#");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return hash;

}
