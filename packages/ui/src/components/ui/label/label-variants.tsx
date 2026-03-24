import { cva } from 'class-variance-authority'

export const labelVariants = cva(['text-sm font-semibold'], {
  variants: {
    variant: {
      default: '',
      error: 'text-error',
      success: 'text-success',
      warning: 'text-warning',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
