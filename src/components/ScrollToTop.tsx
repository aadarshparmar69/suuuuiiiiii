import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, scroll to that element
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return;
      }
    }

    // Otherwise scroll to top on new page navigation
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
};
