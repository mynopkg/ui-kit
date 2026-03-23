import { cva } from 'class-variance-authority'

export const switchVariants = cva(
  [
    'relative cursor-pointer rounded-xl bg-disabled outline-none',
    'transition-colors duration-200',
    'focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 data-[state=checked]:bg-primary',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      variant: {
        default: '',
      },
      size: {
        default: 'h-6 w-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export const switchThumbVariants = cva(
  [
    'block translate-x-1 rounded-full bg-white shadow-sm',
    'transition-transform duration-200 ease-in-out will-change-transform',
    'data-[state=unchecked]:translate-x-1',
  ],
  {
    variants: {
      thumbShape: {
        pill: 'h-[18px] w-6 data-[state=checked]:translate-x-4',
        circle: 'size-[18px] data-[state=checked]:translate-x-[22px]',
      },
    },
    defaultVariants: {
      thumbShape: 'pill',
    },
  },
)
