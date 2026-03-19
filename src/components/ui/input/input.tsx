import type { InputHTMLAttributes } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { forwardRef, useId } from 'react'
import { Label } from '@radix-ui/react-label'
import { cn } from '@/lib/utils'
import { inputVariants } from './input-variants'

type InputVariantProps = VariantProps<typeof inputVariants>

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>, Omit<InputVariantProps, 'variant'> {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const generatedId = useId()
    const inputId = id ?? generatedId
    const currentVariant = error ? 'error' : 'default'

    return (
      <div className={cn('flex w-full flex-col gap-1', className)}>
        {label && (
          <Label htmlFor={inputId} className="text-sm font-semibold">
            {label}
          </Label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={cn(inputVariants({ variant: currentVariant }))}
          {...props}
        />
        {error && <p className={cn('text-error text-xs font-semibold')}>{error}</p>}
      </div>
    )
  },
)

Input.displayName = 'Input'
