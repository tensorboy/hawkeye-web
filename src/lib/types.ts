import type { LucideIcon } from 'lucide-react'

/**
 * Feature item for the features section
 */
export interface Feature {
  icon: LucideIcon
  title: string
  titleEn: string
  description: string
  gradient: string
  glow: string
}

/**
 * Feature item for English version
 */
export interface FeatureEN {
  icon: LucideIcon
  title: string
  description: string
  badge?: string
  badgeColor?: string
}

/**
 * Use case item
 */
export interface UseCase {
  icon: LucideIcon
  title: string
  description: string
  tag: string | null
}

/**
 * Platform item
 */
export interface Platform {
  icon: LucideIcon
  name: string
  desc: string
  gradient: string
}

/**
 * Stat item for stats section
 */
export interface Stat {
  value: string
  label: string
  icon?: LucideIcon
  description?: string
}

/**
 * Testimonial item
 */
export interface Testimonial {
  quote: string
  author: string
  role: string
  avatar: string
}

/**
 * Navigation item
 */
export interface NavItem {
  href: string
  label: string
  id?: string
  icon?: LucideIcon
  external?: boolean
}

/**
 * Status card item for hero preview
 */
export interface StatusCard {
  title: string
  status: string
  color: string
  icon: LucideIcon
}

/**
 * Video chapter item
 */
export interface VideoChapter {
  time: string
  label: string
}

/**
 * Footer link section
 */
export interface FooterSection {
  title: string
  links: {
    label: string
    href: string
    external?: boolean
  }[]
}
