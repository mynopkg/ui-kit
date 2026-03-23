import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'
import { Switch as SwitchPrimitive, SwitchThumb } from '@radix-ui/react-switch'
import { cn } from '@/lib/utils'
import { switchVariants, switchThumbVariants } from './switch-variants'

export interface SwitchProps
  extends
    ComponentPropsWithoutRef<typeof SwitchPrimitive>,
    /**
     * @description 현재 기본 스타일(default)만 제공하므로 variant, size를 캡슐화하여 외부 노출을 제한합니다.
     */
    Omit<VariantProps<typeof switchVariants>, 'variant' | 'size'> {}

export const Switch = forwardRef<
  ElementRef<typeof SwitchPrimitive>,
  SwitchProps & VariantProps<typeof switchThumbVariants>
>(({ className, thumbShape, ...props }, ref) => {
  return (
    <SwitchPrimitive ref={ref} className={cn(switchVariants({ className }))} {...props}>
      <SwitchThumb className={cn(switchThumbVariants({ thumbShape }))}></SwitchThumb>
    </SwitchPrimitive>
  )
})

Switch.displayName = 'Switch'
