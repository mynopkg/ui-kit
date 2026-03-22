import type { ComponentPropsWithoutRef, ReactNode, ElementRef } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'
import { Label as LabelPrimitive } from '@radix-ui/react-label'
import { cn } from '@/lib/utils'
import { labelVariants } from './label-variants'

export interface LabelProps
  extends
    ComponentPropsWithoutRef<typeof LabelPrimitive>,
    VariantProps<typeof labelVariants> {
  htmlFor?: string
  children?: ReactNode
}

export const Label = forwardRef<ElementRef<typeof LabelPrimitive>, LabelProps>(
  ({ className, variant, htmlFor, children, ...props }, ref) => {
    return (
      <LabelPrimitive
        ref={ref}
        htmlFor={htmlFor}
        className={cn(labelVariants({ variant, className }))}
        {...props}
      >
        {children}
      </LabelPrimitive>
    )
  },
)

Label.displayName = 'Label'
