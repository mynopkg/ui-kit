import { cva } from 'class-variance-authority'

export const inputVariants = cva(
  'w-full border px-2 py-1 rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary',
  {
    variants: {
      variant: {
        default: 'border-gray-600/85 focus:border-primary',
        error: 'border-error/85 focus:border-error focus-visible:ring-error',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)
