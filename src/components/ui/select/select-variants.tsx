import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const selectTriggerVariants = cva(
  [
    'w-full inline-flex items-center justify-between border px-3 py-2 rounded-xl text-sm font-medium',
    'transition-all duration-300 ease-in-out hover:shadow-base',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
    'disabled:bg-disabled/25 disabled:border-ground/25 disabled:pointer-events-none disabled:cursor-not-allowed',
    'data-[placeholder]:text-foreground/50',
  ],
  {
    variants: {
      variant: {
        default: 'border-ground/25 focus-visible:border-primary',
        error: 'border-error/85 focus-visible:border-error focus-visible:ring-error',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export const selectContentVariants = cva(
  [
    'relative z-50 max-h-96 min-w-32 overflow-hidden rounded-xl border border-ground/25',
    'bg-white shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
  ],
  {
    variants: {
      variant: {
        default: 'bg-white',
        error: 'border-error/85 bg-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export const selectItemVariants = cva(
  [
    'relative flex cursor-pointer select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm font-medium outline-none',
    'transition-all duration-150 ease-in-out',
    'hover:bg-primary/10 hover:text-primary',
    'focus-visible:bg-primary/10 focus-visible:text-primary focus-visible:outline-none',
    'data-[state=checked]:bg-primary/15 data-[state=checked]:text-primary data-[state=checked]:font-semibold',
    'disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed',
  ],
  {
    variants: {
      variant: {
        default: 'text-foreground',
        error: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export const selectItemIndicatorVariants = cva(
  'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
)

export const selectGroupVariants = cva('overflow-hidden', {
  variants: {
    variant: {
      default: 'p-1',
      error: 'p-1',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export const selectLabelVariants = cva(
  'py-1.5 pl-8 pr-2 text-xs font-semibold uppercase tracking-wide text-foreground/50',
)

export const selectSeparatorVariants = cva('my-1 -mx-1 h-px bg-ground/25')

export type SelectVariant = VariantProps<typeof selectTriggerVariants>['variant']
