"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimation } from "framer-motion";
import { cn } from "@/libs/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const animationControls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          animationControls.start("visible");
        }
      },
      { threshold: 0 } // Adjust threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animationControls]);

  let wordsArray = words.split(" ");

  return (
    <div className={cn("font-bold", className)} ref={sectionRef}>
      <div className="mt-4">
        <div className="text-lg lg:text-5xl md:text-2xl leading-snug tracking-wide text-white">
          <motion.div
            animate={animationControls}
            initial="hidden"
            variants={{
              visible: {
                transition: { staggerChildren: 0.25 },
              },
              hidden: {},
            }}
          >
            {wordsArray.map((word, idx) => (
              <motion.span
                key={word + idx}
                className={`opacity-0 dark:text-white ${
                  ["Institut", "Teknologi", "Sepuluh", "Nopember"].some(
                    (specialWord) => word.includes(specialWord)
                  )
                    ? "animate-gradient-its bg-clip-text text-transparent"
                    : ["Informatics","Engineering","Front", "-", "End", "Back", "Development", "UI/UX","Design"].some(
                        (specialWord) => word.includes(specialWord)
                      )
                    ? "animate-gradient-text-1"
                    : word.includes("Awan")
                    ? "animate-gradient-text-1"
                    : ""
                }`}
                variants={{
                  visible: { opacity: 1 },
                  hidden: { opacity: 0 },
                }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
