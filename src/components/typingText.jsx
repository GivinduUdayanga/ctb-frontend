import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TypingText({ text, delay = 0 }) {
  const [showCursor, setShowCursor] = useState(true);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.p
      className="flex flex-wrap leading-6.5 justify-center text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.02,
            delayChildren: delay,
          },
        },
      }}
    >
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="flex text-center">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 1,
                  textShadow: "0px 0px 0px rgba(0,0,0,0)",
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  textShadow: "0px 0px 8px rgba(56,189,248,0.0)",
                },
              }}
              transition={{
                duration: 0.1,
                ease: "easeOut",
              }}
            >
              {char}
            </motion.span>
          ))}

          {/* Space after each word */}
          <span className="flex text-center">&nbsp;</span>
        </span>
      ))}

      {/* Blinking Cursor */}
      <span
        className={`ml-[2px] ${
          showCursor ? "opacity-100" : "opacity-0"
        } text-sky-400`}
      >
        
      </span>
    </motion.p>
  );
}
