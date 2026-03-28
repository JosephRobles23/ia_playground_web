"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import type { Variants, Transition } from "framer-motion"

export type RevealVariant = "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale-up"

const EASE_OUT_QUART: Transition = { ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }

const variantMap: Record<RevealVariant, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: -28 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: 28 },
    visible: { opacity: 1, x: 0 },
  },
  "scale-up": {
    hidden: { opacity: 0, scale: 0.93 },
    visible: { opacity: 1, scale: 1 },
  },
}

interface ScrollRevealProps {
  children: React.ReactNode
  variant?: RevealVariant
  delay?: number
  duration?: number
  className?: string
}

/**
 * Scroll-triggered reveal wrapper.
 * Respects prefers-reduced-motion.
 */
export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.55,
  className,
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={variantMap[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        ...EASE_OUT_QUART,
        duration,
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

interface ScrollRevealGroupProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  variant?: RevealVariant
  duration?: number
}

/**
 * Staggered reveal container. Each direct child animates in sequentially.
 */
export function ScrollRevealGroup({
  children,
  className,
  staggerDelay = 0.1,
  variant = "fade-up",
  duration = 0.5,
}: ScrollRevealGroupProps) {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
        delayChildren: 0.05,
      },
    },
  }

  const baseVariant = variantMap[variant]
  const childVariants: Variants = {
    hidden: baseVariant.hidden,
    visible: {
      ...(baseVariant.visible as object),
      transition: {
        ...EASE_OUT_QUART,
        duration,
      },
    },
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial={prefersReducedMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={childVariants}>{child}</motion.div>
      ))}
    </motion.div>
  )
}
