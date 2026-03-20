import { cva } from 'class-variance-authority'

export const inputVariants = cva(
  [
    'w-full border px-2 py-1 rounded-xl text-sm font-medium',
    'transition-all duration-300 ease-in-out hover:shadow-base',
    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary',
  ],
  {
    variants: {
      variant: {
        default: 'border-gray-700/25 focus:border-primary',
        error: 'border-error/85 focus:border-error focus-visible:ring-error',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)
