import { cva } from 'class-variance-authority'

export type CheckboxSize = 'sm' | 'md' | 'lg'

export const checkboxVariants = cva(
  [
    'peer shrink-0 flex items-center justify-center rounded-md border-2 cursor-pointer',
    'transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary',
    'data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=checked]:text-white',
    'disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none',
  ],
  {
    variants: {
      size: {
        sm: 'size-4',
        md: 'size-5',
        lg: 'size-6',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export const checkboxIndicatorVariants = cva(
  'flex items-center justify-center text-white',
  {
    variants: {
      size: {
        sm: 'size-3',
        md: 'size-3.5',
        lg: 'size-4',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)
