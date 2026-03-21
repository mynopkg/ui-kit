import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center rounded-xl px-4 py-2 min-w-18 min-h-9 text-sm font-medium gap-2',
    'transition-all duration-300 ease-in-out hover:shadow-base',
    'focus-visible:outline-none focus-visible:ring-2 cursor-pointer',
    'disabled:bg-disabled/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:text-white',
  ],
  {
    variants: {
      variant: {
        primary:
          'bg-primary/85 text-white/85 hover:bg-primary hover:text-white focus-visible:ring-primary',
        secondary:
          'bg-secondary/85 text-primary/85 hover:bg-secondary hover:text-primary focus-visible:ring-secondary',
        outline:
          'border border-primary/85 text-primary/85 hover:border-primary hover:text-primary disabled:border-none',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
)
