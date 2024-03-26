"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/libs/utils/cn";
import Link from "next/link";


export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? -25 : 10,
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed inset-x-0 top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border border-slate-700/30 bg-slate-700/30 py-4 px-8 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]  backdrop-blur-sm dark:border-white/[0.2] dark:bg-black",
          className
        )}
      >
        <div className="flex flex-wrap flex-row justify-center items-center gap-2 md:gap-8">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative flex items-center space-x-1 text-slate-400 transition duration-300 hover:text-purple-400 dark:text-neutral-50 dark:hover:text-neutral-300"
              )}
            >
              <span className=" text-xs sm:text-sm sm:block">{navItem.name}</span>
            </Link>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
