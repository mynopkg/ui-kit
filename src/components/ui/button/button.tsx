import type { ButtonHTMLAttributes } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import { buttonVariants } from './button-variants'

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, variant, children, ...props }, ref) => {
    const Component = asChild ? Slot : 'button'

    return (
      <Component
        type={asChild ? undefined : props.type || 'button'}
        ref={ref}
        className={cn(buttonVariants({ variant, className }), className)}
        {...props}
      >
        <Slottable>{children}</Slottable>
      </Component>
    )
  },
)

Button.displayName = 'Button'
