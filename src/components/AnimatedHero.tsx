import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedHeroProps {
  children: ReactNode;
  className?: string;
  variant?: "gradient" | "image" | "simple";
  delay?: number;
}

const AnimatedHero = ({ children, className = "", variant = "gradient", delay = 0 }: AnimatedHeroProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay,
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const getClassName = () => {
    const baseClass = className;
    if (variant === "gradient") {
      return `py-20 bg-gradient-to-r from-primary to-secondary text-white ${baseClass}`;
    } else if (variant === "image") {
      return `relative h-[600px] flex items-center justify-center overflow-hidden ${baseClass}`;
    }
    return baseClass;
  };

  return (
    <motion.section
      className={getClassName()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {children}
    </motion.section>
  );
};

export const AnimatedContent = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={itemVariants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedHero;
