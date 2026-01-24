import type { Variants } from 'framer-motion'

/**
 * Animation timing constants
 */
export const ANIMATION = {
  STAGGER_DELAY: 0.15,
  ITEM_DURATION: 0.6,
  DELAY_CHILDREN: 0.2,
  EASE: [0.25, 0.1, 0.25, 1] as const,
} as const

/**
 * Scroll behavior constants
 */
export const SCROLL = {
  SECTION_OFFSET: 100,
  HERO_THRESHOLD: 300,
} as const

/**
 * Create container variants with optional reduced motion support
 */
export const createContainerVariants = (prefersReducedMotion: boolean): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: prefersReducedMotion ? 0 : ANIMATION.STAGGER_DELAY,
      delayChildren: prefersReducedMotion ? 0 : ANIMATION.DELAY_CHILDREN,
    },
  },
})

/**
 * Create item variants with optional reduced motion support
 */
export const createItemVariants = (prefersReducedMotion: boolean): Variants => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: prefersReducedMotion ? 0 : ANIMATION.ITEM_DURATION,
      ease: ANIMATION.EASE,
    },
  },
})

/**
 * Fade in from bottom animation
 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: ANIMATION.EASE },
  },
}

/**
 * Fade in animation
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
}

/**
 * Scale up animation
 */
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: ANIMATION.EASE },
  },
}

/**
 * Slide in from left animation
 */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: ANIMATION.EASE },
  },
}

/**
 * Slide in from right animation
 */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: ANIMATION.EASE },
  },
}

/**
 * Hover lift animation for cards
 */
export const hoverLift = {
  y: -8,
  scale: 1.02,
  transition: { duration: 0.2 },
}

/**
 * Tap scale animation for buttons
 */
export const tapScale = {
  scale: 0.98,
}

/**
 * Scroll indicator bounce animation
 */
export const scrollBounce = {
  y: [0, 8, 0],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

/**
 * Create staggered children animation
 */
export const createStaggerChildren = (
  staggerDelay: number = ANIMATION.STAGGER_DELAY
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
    },
  },
})

/**
 * Mobile menu animation
 */
export const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
}
