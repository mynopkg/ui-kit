import { cva } from 'class-variance-authority'

export const tabsVariants = cva(['w-full'], {
  variants: {
    variant: {
      default: '',
      underline: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export const tabsListVariants = cva(
  ['inline-flex items-center transition-all duration-200'],
  {
    variants: {
      variant: {
        default: 'rounded-xl bg-secondary/40 p-1 gap-1',
        underline: 'border-b border-foreground/20 gap-0 bg-transparent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export const tabsTriggerVariants = cva(
  [
    'inline-flex items-center justify-center whitespace-nowrap rounded-lg px-4 py-1.5 text-sm font-medium',
    'transition-all duration-200 ease-in-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
    'disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed',
  ],
  {
    variants: {
      variant: {
        default:
          'data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-base data-[state=inactive]:text-foreground/50 hover:data-[state=inactive]:text-foreground',
        underline:
          'border-b-2 border-transparent rounded-none px-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=inactive]:text-foreground/50 hover:data-[state=inactive]:text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export const tabsContentVariants = cva(
  ['focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'],
  {
    variants: {
      variant: {
        default: 'mt-3 rounded-xl',
        underline: 'mt-2 rounded-none',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)
