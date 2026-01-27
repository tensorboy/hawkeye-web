import { forwardRef, ReactNode, HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const cardVariants = cva(
  // Base card styles
  'rounded-2xl transition-all duration-300',
  {
    variants: {
      variant: {
        // Default flat card
        default: 'bg-white/5 border border-white/10',
        // Elevated card with shadow
        elevated: 'bg-white/5 border border-white/10 shadow-xl shadow-black/20',
        // Glass morphism card
        glass: 'bg-white/5 backdrop-blur-xl border border-white/10',
        // 3D effect card
        '3d': 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 shadow-2xl',
        // iOS style card
        ios: 'bg-[var(--color-grouped-background-secondary)] border border-[var(--color-separator)]',
        // Feature card with gradient support
        feature: 'bg-white/5 border border-white/10 overflow-hidden relative',
        // Solid card for light backgrounds
        solid: 'bg-white border border-gray-200 shadow-sm',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
        xl: 'p-10',
      },
      hover: {
        true: 'hover:bg-white/10 hover:border-white/20 cursor-pointer',
        lift: 'hover:-translate-y-1 hover:shadow-2xl cursor-pointer',
        glow: 'hover:shadow-lg hover:shadow-amber-500/10 cursor-pointer',
        scale: 'hover:scale-[1.02] cursor-pointer',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
    },
  }
)

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  children: ReactNode
  gradient?: string // For feature cards with gradient overlays
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, hover, gradient, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, padding, hover, className }))}
        {...props}
      >
        {gradient && variant === 'feature' && (
          <div
            className={cn(
              'absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity',
              gradient
            )}
          />
        )}
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

// Card subcomponents for compound pattern
const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('mb-4', className)} {...props} />
  )
)
CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-xl font-semibold text-white', className)}
      {...props}
    />
  )
)
CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-slate-400 text-sm', className)} {...props} />
  )
)
CardDescription.displayName = 'CardDescription'

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('', className)} {...props} />
  )
)
CardContent.displayName = 'CardContent'

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('mt-4 flex items-center', className)} {...props} />
  )
)
CardFooter.displayName = 'CardFooter'

const CardIcon = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { gradient?: string }
>(({ className, gradient, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'w-14 h-14 rounded-2xl flex items-center justify-center',
      gradient ? `bg-gradient-to-br ${gradient}` : 'bg-white/10',
      className
    )}
    {...props}
  >
    {children}
  </div>
))
CardIcon.displayName = 'CardIcon'

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardIcon, cardVariants }
