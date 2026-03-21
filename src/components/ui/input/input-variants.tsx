import { cva } from 'class-variance-authority'

export const inputVariants = cva(
  [
    'w-full border px-2 py-1 rounded-xl text-sm font-medium',
    'transition-all duration-300 ease-in-out hover:shadow-base',
    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary',
    'disabled:bg-disabled/25 disabled:pointer-events-none disabled:cursor-not-allowed disabled:text-white',
  ],
  {
    variants: {
      variant: {
        info: 'border-ground/25 focus:border-primary',
        error: 'border-error/85 focus:border-error focus-visible:ring-error',
        success: 'border-success/85 focus:border-success focus-visible:ring-success',
        warning: 'border-warning/85 focus:border-warning focus-visible:ring-warning',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  },
)
