import type { ComponentPropsWithoutRef, ElementRef, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import { buttonVariants } from './button-variants'

export interface ButtonProps
  extends ComponentPropsWithoutRef<'button'>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

export const Button = forwardRef<ElementRef<'button'>, ButtonProps>(
  (
    {
      asChild = false,
      variant,
      className,
      children,
      type,
      leftIcon,
      rightIcon,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : 'button'

    return (
      <Component
        type={asChild ? undefined : type || 'button'}
        ref={ref}
        className={cn(buttonVariants({ variant, className }))}
        {...props}
      >
        {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <Slottable>{children}</Slottable>
        {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </Component>
    )
  },
)

Button.displayName = 'Button'
