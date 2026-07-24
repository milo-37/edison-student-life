"use client";

import { motion } from "motion/react";
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay,
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
  return (
    <div className={className}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: baseDelay + i * 0.12,
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
