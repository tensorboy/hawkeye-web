import { forwardRef, ReactNode, HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  // Base badge styles
  'inline-flex items-center gap-1.5 font-medium transition-colors',
  {
    variants: {
      variant: {
        // Default subtle badge
        default: 'bg-white/10 text-white border border-white/10',
        // Accent/primary badge
        accent: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
        // Success badge
        success: 'bg-green-500/10 text-green-400 border border-green-500/20',
        // Warning badge
        warning: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20',
        // Error/destructive badge
        error: 'bg-red-500/10 text-red-400 border border-red-500/20',
        // Info badge
        info: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
        // Purple/special badge
        purple: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
        // Outline badge
        outline: 'bg-transparent border border-white/20 text-white',
        // Solid badges for light backgrounds
        'solid-accent': 'bg-amber-500 text-white',
        'solid-success': 'bg-green-500 text-white',
        'solid-error': 'bg-red-500 text-white',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs rounded-md',
        md: 'px-2.5 py-1 text-sm rounded-lg',
        lg: 'px-3 py-1.5 text-sm rounded-lg',
        xl: 'px-4 py-2 text-base rounded-xl',
      },
      pill: {
        true: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  children: ReactNode
  icon?: ReactNode
  dot?: boolean
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, pill, children, icon, dot, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, size, pill, className }))}
        {...props}
      >
        {dot && (
          <span
            className={cn(
              'w-1.5 h-1.5 rounded-full',
              variant === 'accent' && 'bg-amber-400',
              variant === 'success' && 'bg-green-400',
              variant === 'warning' && 'bg-yellow-400',
              variant === 'error' && 'bg-red-400',
              variant === 'info' && 'bg-blue-400',
              variant === 'purple' && 'bg-purple-400',
              (!variant || variant === 'default' || variant === 'outline') && 'bg-white'
            )}
          />
        )}
        {icon}
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

export { Badge, badgeVariants }
