import { forwardRef, ReactNode, ButtonHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  // Base styles - accessibility compliant (min 44px touch target)
  'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none min-h-[44px]',
  {
    variants: {
      variant: {
        // Primary accent button
        accent: 'bg-[var(--hawk-accent)] text-slate-900 hover:bg-amber-400 focus-visible:ring-amber-500 shadow-lg shadow-amber-500/20',
        // Ghost button
        ghost: 'bg-white/10 text-white hover:bg-white/20 border border-white/10 focus-visible:ring-white/50',
        // Outline button
        outline: 'bg-transparent border-2 border-[var(--hawk-accent)] text-[var(--hawk-accent)] hover:bg-[var(--hawk-accent)] hover:text-slate-900 focus-visible:ring-amber-500',
        // Glow button with animation
        glow: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-400 hover:to-orange-400 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 focus-visible:ring-amber-500',
        // Secondary subtle button
        secondary: 'bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700 focus-visible:ring-slate-500',
        // Link style button
        link: 'text-[var(--hawk-accent)] hover:text-amber-400 underline-offset-4 hover:underline min-h-0 p-0',
        // Destructive button
        destructive: 'bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500',
      },
      size: {
        sm: 'px-4 py-2 text-sm rounded-lg min-h-[36px]',
        md: 'px-6 py-3 text-base rounded-xl',
        lg: 'px-8 py-4 text-lg rounded-xl',
        xl: 'px-10 py-5 text-xl rounded-2xl',
        icon: 'p-3 rounded-xl w-11 h-11',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'accent',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      children,
      leftIcon,
      rightIcon,
      loading,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          leftIcon
        )}
        {children}
        {rightIcon}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
