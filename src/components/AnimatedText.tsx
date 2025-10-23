import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: string | ReactNode;
  className?: string;
  delay?: number;
  type?: "word" | "line" | "char";
  duration?: number;
}

const AnimatedText = ({ 
  children, 
  className = "", 
  delay = 0, 
  type = "word",
  duration = 0.5 
}: AnimatedTextProps) => {
  // If children is not a string, render as is with simple fade
  if (typeof children !== "string") {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration, delay }}
      >
        {children}
      </motion.div>
    );
  }

  const text = children;
  
  // Split text based on type
  const splitText = () => {
    if (type === "char") {
      return text.split("");
    } else if (type === "line") {
      return text.split("\n");
    } else {
      // word
      return text.split(" ");
    }
  };

  const parts = splitText();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: type === "char" ? 0.03 : type === "line" ? 0.2 : 0.08,
        delayChildren: delay,
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      filter: "blur(4px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: duration,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {parts.map((part, index) => (
        <motion.span
          key={index}
          variants={itemVariants}
          style={{ display: "inline-block" }}
        >
          {part}
          {type !== "line" && index < parts.length - 1 && (
            type === "char" ? "" : "\u00A0"
          )}
          {type === "line" && index < parts.length - 1 && <br />}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
