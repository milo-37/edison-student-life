"use client";

import { motion, useReducedMotion } from "motion/react";
import { CSSProperties, ReactNode } from "react";

interface RevealTextProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
}

export function RevealText({
  children,
  className,
  style,
  delay = 0,
}: RevealTextProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : 0.65,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

interface RevealLineProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  style?: CSSProperties;
  baseDelay?: number;
}

export function RevealLines({
  lines,
  className,
  lineClassName,
  style,
  baseDelay = 0,
}: RevealLineProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={className}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.div
            initial={{ y: shouldReduceMotion ? 0 : "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.65,
              delay: shouldReduceMotion ? 0 : baseDelay + i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={lineClassName}
            style={style}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
