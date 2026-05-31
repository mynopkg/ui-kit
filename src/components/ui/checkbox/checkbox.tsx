import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'
import { Check, Minus } from 'lucide-react'
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
  ({ className, size, checked, defaultChecked, ...props }, ref) => {
    return (
      <CheckboxPrimitive
        ref={ref}
        checked={checked}
        defaultChecked={defaultChecked}
        className={cn(checkboxVariants({ className, size }))}
        {...props}
      >
        <CheckboxIndicatorPrimitive className={cn(checkboxIndicatorVariants({ size }))}>
          {checked === 'indeterminate' || defaultChecked === 'indeterminate' ? (
            <Minus strokeWidth={4} className="size-full" />
          ) : (
            <Check strokeWidth={4} className="size-full" />
          )}
        </CheckboxIndicatorPrimitive>
      </CheckboxPrimitive>
    )
  },
)

Checkbox.displayName = 'Checkbox'
