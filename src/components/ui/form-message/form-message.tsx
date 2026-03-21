import type { ComponentPropsWithoutRef, ElementRef, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { formMessageVariants } from './form-message-variants'

export interface FormMessageProps
  extends ComponentPropsWithoutRef<'p'>, VariantProps<typeof formMessageVariants> {
  children?: ReactNode
}

export const FormMessage = forwardRef<ElementRef<'p'>, FormMessageProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <p ref={ref} className={cn(formMessageVariants({ variant, className }))} {...props}>
        {children}
      </p>
    )
  },
)

FormMessage.displayName = 'FormMessage'
