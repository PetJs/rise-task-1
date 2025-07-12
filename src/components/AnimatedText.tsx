import { motion } from "framer-motion";
import React from "react";

interface FlipTextProps {
  text: string;
  className?: string;
  topTextClass?: string;
  bottomTextClass?: string;
  delay?: number;
  duration?: number;
}

const FlipText: React.FC<FlipTextProps> = ({
  text,
  className = "",
  topTextClass = "",
  bottomTextClass = "",
  delay = 0.025,
  duration = 0.25,
}) => {
  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={`relative inline-block h-[1em] overflow-hidden ${className}`}
    >
      {/* Top (default) text with border */}
      <div className="flex gap-[0.02em]">
        {text.split("").map((char, i) => (
          <motion.span
            key={`top-${i}`}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration,
              ease: "easeInOut",
              delay: delay * i,
            }}
            className={`inline-block leading-none ${topTextClass}`}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>

      {/* Bottom (hovered) text without border */}
      <div className="absolute top-0 left-0 flex gap-[0.02em] pointer-events-none">
        {text.split("").map((char, i) => (
          <motion.span
            key={`bottom-${i}`}
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration,
              ease: "easeInOut",
              delay: delay * i,
            }}
            className={`inline-block leading-none ${bottomTextClass}`}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </motion.span>
  );
};

export default FlipText;
