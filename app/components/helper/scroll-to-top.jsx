"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const DEFAULT_BTN_CLS =
  "fixed bottom-8 right-6 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:text-xl transition-all duration-300 ease-out";
const SCROLL_THRESHOLD = 50;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, []);

  const onClickBtn = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <button 
      className={`${DEFAULT_BTN_CLS} ${!isVisible ? "hidden" : ""}`} 
      onClick={onClickBtn}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
