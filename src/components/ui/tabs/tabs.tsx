import type { ComponentPropsWithoutRef, ElementRef, ReactNode } from 'react'
import { forwardRef } from 'react'
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

interface Tab {
  value: string
  label: ReactNode
  content: ReactNode
  disabled?: boolean
}

interface TabsClassNames {
  tabsList?: string
  tabsTrigger?: string
  tabsContent?: string
}

export interface TabsProps extends ComponentPropsWithoutRef<typeof TabsPrimitive> {
  tabs: Tab[]
  variant?: 'default' | 'underline'
  slotClassNames?: TabsClassNames
}

export const Tabs = forwardRef<ElementRef<typeof TabsPrimitive>, TabsProps>(
  (
    {
      tabs,
      variant,
      defaultValue,
      value,
      className,
      slotClassNames,
      onValueChange,
      ...props
    },
    ref,
  ) => {
    return (
      <TabsPrimitive
        ref={ref}
        defaultValue={defaultValue ?? tabs[0]?.value}
        value={value}
        onValueChange={onValueChange}
        className={cn(tabsVariants({ variant }), className)}
        {...props}
      >
        <TabsListPrimitive
          className={cn(tabsListVariants({ variant }), slotClassNames?.tabsList)}
        >
          {tabs.map((tab) => (
            <TabsTriggerPrimitive
              value={tab.value}
              key={tab.value}
              disabled={tab.disabled}
              className={cn(
                tabsTriggerVariants({ variant }),
                slotClassNames?.tabsTrigger,
              )}
            >
              {tab.label}
            </TabsTriggerPrimitive>
          ))}
        </TabsListPrimitive>

        {tabs.map((tab) => (
          <TabsContentPrimitive
            key={tab.value}
            value={tab.value}
            className={cn(tabsContentVariants({ variant }), slotClassNames?.tabsContent)}
          >
            {tab.content}
          </TabsContentPrimitive>
        ))}
      </TabsPrimitive>
    )
  },
)

Tabs.displayName = 'Tabs'
