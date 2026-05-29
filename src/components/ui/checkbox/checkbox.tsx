import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'
import { Check } from 'lucide-react'
import {
  Checkbox as CheckboxPrimitive,
  CheckboxIndicator as CheckboxIndicatorPrimitive,
} from '@radix-ui/react-checkbox'
import { cn } from '@/lib/utils'
import { checkboxVariants, checkboxIndicatorVariants } from './checkbox-variants'

export interface CheckboxProps
  extends
    ComponentPropsWithoutRef<typeof CheckboxPrimitive>,
    VariantProps<typeof checkboxVariants> {}

export const Checkbox = forwardRef<ElementRef<typeof CheckboxPrimitive>, CheckboxProps>(
  ({ className, error, size, ...props }, ref) => {
    return (
      <CheckboxPrimitive
        ref={ref}
        className={cn(checkboxVariants({ className, error, size }))}
        {...props}
      >
        <CheckboxIndicatorPrimitive className={cn(checkboxIndicatorVariants({ size }))}>
          <Check strokeWidth={4.5} className="size-full" />
        </CheckboxIndicatorPrimitive>
      </CheckboxPrimitive>
    )
  },
)

Checkbox.displayName = 'Checkbox'
