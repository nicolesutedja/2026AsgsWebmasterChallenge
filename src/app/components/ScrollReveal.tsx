import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}

export default function ScrollReveal({ 
  children, 
  direction = "up", 
  delay = 0 
}: ScrollRevealProps) {
  
  // Define starting positions based on direction
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: delay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Animates when 20% visible
      variants={variants}
    >
      {children}
    </motion.div>
  );
}