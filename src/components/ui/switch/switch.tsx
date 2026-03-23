import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'
import { Switch as SwitchPrimitive, SwitchThumb } from '@radix-ui/react-switch'
import { cn } from '@/lib/utils'
import { switchVariants, switchThumbVariants } from './switch-variants'

/**
 * @description
 * - 일관된 UI 제공을 위해 `Switch` 컴포넌트 수준에서는 `variant`, `size`를 `default`로 고정합니다.
 * - 개별 스타일 확장으로 다른 사이즈나 스타일이 필요할 경우, 해당 키를 제거하여 사용하세요.
 */
export interface SwitchProps
  extends
    ComponentPropsWithoutRef<typeof SwitchPrimitive>,
    Omit<VariantProps<typeof switchVariants>, 'variant' | 'size'>,
    VariantProps<typeof switchThumbVariants> {}

export const Switch = forwardRef<ElementRef<typeof SwitchPrimitive>, SwitchProps>(
  ({ className, thumbShape, ...props }, ref) => {
    return (
      <SwitchPrimitive ref={ref} className={cn(switchVariants({ className }))} {...props}>
        <SwitchThumb className={cn(switchThumbVariants({ thumbShape }))}></SwitchThumb>
      </SwitchPrimitive>
    )
  },
)

Switch.displayName = 'Switch'
