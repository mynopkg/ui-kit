import { cva } from 'class-variance-authority'

export const formMessageVariants = cva(['text-xs font-semibold'], {
  variants: {
    variant: {
      info: 'text-ground',
      error: 'text-error',
      success: 'text-success',
      warning: 'text-warning',
    },
  },
  defaultVariants: {
    variant: 'info',
  },
})
