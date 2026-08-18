"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  staggerDelay?: number;
  initialDelay?: number;
  className?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  initialDelay = 0,
  className,
  ...props
}: StaggerContainerProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
