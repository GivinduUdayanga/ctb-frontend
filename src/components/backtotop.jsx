import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 
                    z-50 bg-lime-900 text-white 
                    px-2 py-1 sm:px-4 sm:py-3
                    rounded-full shadow-lg hover:bg-lime-700 transition
                    rotate-[270deg]"
      >
        ➜
      </button>
    )
  );
}