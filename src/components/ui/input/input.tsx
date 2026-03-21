import type { InputHTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { forwardRef, useId } from 'react'
import { cn } from '@/lib/utils'
import { inputVariants } from './input-variants'

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  isInvalid?: boolean
  rightIcon?: ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, id, isInvalid, rightIcon, ...props }, ref) => {
    const generatedId = useId()
    const inputId = id ?? generatedId
    const errorId = `${inputId}-error`

    return (
      <div className={cn('relative')}>
        <input
          ref={ref}
          id={inputId}
          aria-invalid={isInvalid}
          aria-describedby={isInvalid ? errorId : undefined}
          className={cn(
            inputVariants({ variant: isInvalid ? 'error' : variant, className }),
          )}
          {...props}
        />
        {rightIcon && (
          <div className="absolute top-1/2 right-3 flex -translate-y-1/2 items-center justify-center">
            {rightIcon}
          </div>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
