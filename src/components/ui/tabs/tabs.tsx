import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import type { TabsVariant } from './tabs-variants'
import { forwardRef, createContext, useContext } from 'react'
import {
  Tabs as TabsPrimitive,
  TabsList as TabsListPrimitive,
  TabsTrigger as TabsTriggerPrimitive,
  TabsContent as TabsContentPrimitive,
} from '@radix-ui/react-tabs'
import { cn } from '@/lib/utils'
import {
  tabsListVariants,
  tabsTriggerVariants,
  tabsContentVariants,
  tabsVariants,
} from './tabs-variants'

export interface TabsProps extends ComponentPropsWithoutRef<typeof TabsPrimitive> {
  variant?: TabsVariant
}
interface TabsContextValue {
  variant?: TabsVariant
}

const TabsContext = createContext<TabsContextValue>({ variant: 'default' })
const useTabsContext = () => useContext(TabsContext)

export const Tabs = forwardRef<ElementRef<typeof TabsPrimitive>, TabsProps>(
  (
    { variant, defaultValue, value, className, children, onValueChange, ...props },
    ref,
  ) => {
    return (
      <TabsContext.Provider value={{ variant }}>
        <TabsPrimitive
          ref={ref}
          defaultValue={defaultValue}
          value={value}
          onValueChange={onValueChange}
          className={cn(tabsVariants({ variant }), className)}
          {...props}
        >
          {children}
        </TabsPrimitive>
      </TabsContext.Provider>
    )
  },
)

export const TabsList = forwardRef<
  ElementRef<typeof TabsListPrimitive>,
  ComponentPropsWithoutRef<typeof TabsListPrimitive>
>(({ className, children, ...props }, ref) => {
  const { variant } = useTabsContext()
  return (
    <TabsListPrimitive
      ref={ref}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    >
      {children}
    </TabsListPrimitive>
  )
})

export const TabsTrigger = forwardRef<
  ElementRef<typeof TabsTriggerPrimitive>,
  ComponentPropsWithoutRef<typeof TabsTriggerPrimitive>
>(({ className, children, value, ...props }, ref) => {
  const { variant } = useTabsContext()
  return (
    <TabsTriggerPrimitive
      ref={ref}
      value={value}
      className={cn(tabsTriggerVariants({ variant }), className)}
      {...props}
    >
      {children}
    </TabsTriggerPrimitive>
  )
})

export const TabsContent = forwardRef<
  ElementRef<typeof TabsContentPrimitive>,
  ComponentPropsWithoutRef<typeof TabsContentPrimitive>
>(({ className, value, children, ...props }, ref) => {
  const { variant } = useTabsContext()
  return (
    <TabsContentPrimitive
      ref={ref}
      value={value}
      className={cn(tabsContentVariants({ variant }), className)}
      {...props}
    >
      {children}
    </TabsContentPrimitive>
  )
})

Tabs.displayName = 'Tabs'
TabsList.displayName = 'TabsList'
TabsTrigger.displayName = 'TabsTrigger'
TabsContent.displayName = 'TabsContent'
