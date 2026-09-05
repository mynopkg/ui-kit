import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef, createContext, useContext } from 'react'
import {
  Select as SelectPrimitive,
  SelectValue as SelectValuePrimitive,
  SelectTrigger as SelectTriggerPrimitive,
  SelectContent as SelectContentPrimitive,
  SelectItem as SelectItemPrimitive,
  SelectGroup as SelectGroupPrimitive,
  SelectLabel as SelectLabelPrimitive,
  SelectSeparator as SelectSeparatorPrimitive,
  SelectIcon,
  SelectPortal,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectViewport,
  SelectItemText,
  SelectItemIndicator,
} from '@radix-ui/react-select'
import { ChevronDown, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  selectTriggerVariants,
  selectContentVariants,
  selectItemVariants,
  selectItemIndicatorVariants,
  selectGroupVariants,
  selectLabelVariants,
  selectSeparatorVariants,
  type SelectVariant,
} from './select-variants'

export interface SelectProps extends ComponentPropsWithoutRef<typeof SelectPrimitive> {
  variant?: SelectVariant
}

interface SelectContextValue {
  variant?: SelectVariant
}

const SelectContext = createContext<SelectContextValue>({ variant: 'default' })
const useSelectContext = () => useContext(SelectContext)

export const Select = ({ variant, ...props }: SelectProps) => {
  return (
    <SelectContext.Provider value={{ variant }}>
      <SelectPrimitive {...props} />
    </SelectContext.Provider>
  )
}

Select.displayName = 'Select'

export const SelectValue = forwardRef<
  ElementRef<typeof SelectValuePrimitive>,
  ComponentPropsWithoutRef<typeof SelectValuePrimitive>
>(({ ...props }, ref) => <SelectValuePrimitive ref={ref} {...props} />)

SelectValue.displayName = 'SelectValue'

export const SelectTrigger = forwardRef<
  ElementRef<typeof SelectTriggerPrimitive>,
  ComponentPropsWithoutRef<typeof SelectTriggerPrimitive>
>(({ className, children, ...props }, ref) => {
  const { variant } = useSelectContext()
  return (
    <SelectTriggerPrimitive
      ref={ref}
      className={cn(selectTriggerVariants({ variant, className }))}
      {...props}
    >
      {children ?? <SelectValue />}
      <SelectIcon asChild>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </SelectIcon>
    </SelectTriggerPrimitive>
  )
})

SelectTrigger.displayName = 'SelectTrigger'

export const SelectContent = forwardRef<
  ElementRef<typeof SelectContentPrimitive>,
  ComponentPropsWithoutRef<typeof SelectContentPrimitive>
>(({ className, children, ...props }, ref) => {
  const { variant } = useSelectContext()
  return (
    <SelectPortal>
      <SelectContentPrimitive
        ref={ref}
        className={cn(selectContentVariants({ variant, className }))}
        {...props}
      >
        <SelectScrollUpButton className="flex cursor-pointer items-center justify-center py-1" />
        <SelectViewport className="p-1">{children}</SelectViewport>
        <SelectScrollDownButton className="flex cursor-pointer items-center justify-center py-1" />
      </SelectContentPrimitive>
    </SelectPortal>
  )
})

SelectContent.displayName = 'SelectContent'

export const SelectItem = forwardRef<
  ElementRef<typeof SelectItemPrimitive>,
  ComponentPropsWithoutRef<typeof SelectItemPrimitive>
>(({ className, children, ...props }, ref) => {
  const { variant } = useSelectContext()
  return (
    <SelectItemPrimitive
      ref={ref}
      className={cn(selectItemVariants({ variant, className }))}
      {...props}
    >
      <SelectItemIndicator className={cn(selectItemIndicatorVariants())}>
        <Check className="h-3.5 w-3.5" />
      </SelectItemIndicator>
      <SelectItemText>{children}</SelectItemText>
    </SelectItemPrimitive>
  )
})

SelectItem.displayName = 'SelectItem'

export const SelectGroup = forwardRef<
  ElementRef<typeof SelectGroupPrimitive>,
  ComponentPropsWithoutRef<typeof SelectGroupPrimitive>
>(({ className, ...props }, ref) => {
  const { variant } = useSelectContext()
  return (
    <SelectGroupPrimitive
      ref={ref}
      className={cn(selectGroupVariants({ variant, className }))}
      {...props}
    />
  )
})

SelectGroup.displayName = 'SelectGroup'

export const SelectLabel = forwardRef<
  ElementRef<typeof SelectLabelPrimitive>,
  ComponentPropsWithoutRef<typeof SelectLabelPrimitive>
>(({ className, ...props }, ref) => (
  <SelectLabelPrimitive
    ref={ref}
    className={cn(selectLabelVariants({ className }))}
    {...props}
  />
))

SelectLabel.displayName = 'SelectLabel'

export const SelectSeparator = forwardRef<
  ElementRef<typeof SelectSeparatorPrimitive>,
  ComponentPropsWithoutRef<typeof SelectSeparatorPrimitive>
>(({ className, ...props }, ref) => (
  <SelectSeparatorPrimitive
    ref={ref}
    className={cn(selectSeparatorVariants({ className }))}
    {...props}
  />
))

SelectSeparator.displayName = 'SelectSeparator'

export {
  SelectIcon,
  SelectPortal,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectViewport,
  SelectItemText,
  SelectItemIndicator,
}
