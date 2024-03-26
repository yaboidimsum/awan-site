"use client"
import { cn } from "@/libs/utils/cn";
import React from "react";
import { motion } from "framer-motion";

const generateRandomColor = () => {
  const colors = ['#F88379', '#7b61ff', '#CCCCFF','#6495ED','#D8BFD8','#E30B5C', '#7F00FF']; // List of colors: purple, red, blue
  return colors[Math.floor(Math.random() * colors.length)];
};

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  // Generate random colors for the gradient
  const color1 = generateRandomColor();
  const color2 = generateRandomColor();
  const color3 = generateRandomColor();

  const gradientColors = `${color1}, ${color2}, ${color3}`;

  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
          backgroundImage: animate ? `radial-gradient(circle farthest-side at 0 100%, ${gradientColors}, transparent), radial-gradient(circle farthest-side at 100% 0, ${gradientColors}, transparent), radial-gradient(circle farthest-side at 100% 100%, ${gradientColors}, transparent), radial-gradient(circle farthest-side at 0 0, ${color1}, #141316)` : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500",
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
          backgroundImage: animate ? `radial-gradient(circle farthest-side at 0 100%, ${gradientColors}, transparent), radial-gradient(circle farthest-side at 100% 0, ${gradientColors}, transparent), radial-gradient(circle farthest-side at 100% 100%, ${gradientColors}, transparent), radial-gradient(circle farthest-side at 0 0, ${color1}, #141316)` : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1]",
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
