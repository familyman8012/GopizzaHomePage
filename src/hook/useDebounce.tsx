import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function useDebounce(type = "normal") {
  const [windowWidth, setWindowWidth] = useState(0);
  const [spaceBetween, setSpaceBetween] = useState<number>(0);

  function getSpaceBetween(width: number): number {
    if (width <= 1000) {
      return 10;
    } else if (width > 1000 && width <= 1400) {
      return 20;
    } else {
      return 40;
    }
  }

  const debounce = (func: (...args: any[]) => void, wait: number) => {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  useEffect(() => {
    // Initial width set
    setWindowWidth(window.innerWidth);
    if (type === "spaceBetween") {
      setSpaceBetween(getSpaceBetween(window.innerWidth));
    }

    // Listen for window resize
    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
      if (type === "spaceBetween") {
        setSpaceBetween(getSpaceBetween(window.innerWidth));
      }
    }, 100);

    window.addEventListener("resize", handleResize);
    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { windowWidth, spaceBetween };
}

export default useDebounce;
