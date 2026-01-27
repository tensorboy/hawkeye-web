import { forwardRef, ReactNode, HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

// Display - Large hero text
const displayVariants = cva('font-display font-bold tracking-tight', {
  variants: {
    size: {
      xl: 'text-5xl md:text-6xl lg:text-7xl',
      lg: 'text-4xl md:text-5xl lg:text-6xl',
      md: 'text-3xl md:text-4xl lg:text-5xl',
      sm: 'text-2xl md:text-3xl lg:text-4xl',
    },
    color: {
      default: 'text-white',
      muted: 'text-slate-300',
      gradient: 'text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400',
    },
  },
  defaultVariants: {
    size: 'lg',
    color: 'default',
  },
})

export interface DisplayProps
  extends Omit<HTMLAttributes<HTMLHeadingElement>, 'color'>,
    VariantProps<typeof displayVariants> {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'div'
}

const Display = forwardRef<HTMLHeadingElement, DisplayProps>(
  ({ className, size, color, as: Component = 'h1', children, ...props }, ref) => (
    <Component
      ref={ref}
      className={cn(displayVariants({ size, color, className }))}
      {...props}
    >
      {children}
    </Component>
  )
)
Display.displayName = 'Display'

// Heading - Section headings
const headingVariants = cva('font-semibold', {
  variants: {
    size: {
      h1: 'text-3xl md:text-4xl',
      h2: 'text-2xl md:text-3xl',
      h3: 'text-xl md:text-2xl',
      h4: 'text-lg md:text-xl',
      h5: 'text-base md:text-lg',
      h6: 'text-sm md:text-base',
    },
    color: {
      default: 'text-white',
      muted: 'text-slate-300',
      accent: 'text-amber-400',
    },
  },
  defaultVariants: {
    size: 'h2',
    color: 'default',
  },
})

export interface HeadingProps
  extends Omit<HTMLAttributes<HTMLHeadingElement>, 'color'>,
    VariantProps<typeof headingVariants> {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, color, as, children, ...props }, ref) => {
    // Default component based on size
    const defaultComponent = size ? size.replace('h', 'h') as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' : 'h2'
    const Component = as || defaultComponent

    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ size, color, className }))}
        {...props}
      >
        {children}
      </Component>
    )
  }
)
Heading.displayName = 'Heading'

// Text - Body text
const textVariants = cva('', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    color: {
      default: 'text-slate-300',
      muted: 'text-slate-400',
      faint: 'text-slate-500',
      white: 'text-white',
      accent: 'text-amber-400',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    leading: {
      tight: 'leading-tight',
      normal: 'leading-normal',
      relaxed: 'leading-relaxed',
      loose: 'leading-loose',
    },
  },
  defaultVariants: {
    size: 'base',
    color: 'default',
    weight: 'normal',
    leading: 'relaxed',
  },
})

export interface TextProps
  extends Omit<HTMLAttributes<HTMLParagraphElement>, 'color'>,
    VariantProps<typeof textVariants> {
  children: ReactNode
  as?: 'p' | 'span' | 'div'
}

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, color, weight, leading, as: Component = 'p', children, ...props }, ref) => (
    <Component
      ref={ref}
      className={cn(textVariants({ size, color, weight, leading, className }))}
      {...props}
    >
      {children}
    </Component>
  )
)
Text.displayName = 'Text'

// Label - Form labels and small text
const labelVariants = cva('font-medium', {
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
    color: {
      default: 'text-slate-300',
      muted: 'text-slate-400',
      white: 'text-white',
      accent: 'text-amber-400',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'default',
  },
})

export interface LabelProps
  extends Omit<HTMLAttributes<HTMLLabelElement>, 'color'>,
    VariantProps<typeof labelVariants> {
  children: ReactNode
  htmlFor?: string
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, size, color, children, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(labelVariants({ size, color, className }))}
      {...props}
    >
      {children}
    </label>
  )
)
Label.displayName = 'Label'

export { Display, Heading, Text, Label, displayVariants, headingVariants, textVariants, labelVariants }
