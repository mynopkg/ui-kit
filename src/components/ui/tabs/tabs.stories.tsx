import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'underline'],
    },
  },
}

const tabsMock: { value: string; label: string; disabled: boolean }[] = [
  { value: 'tab-1', label: 'Tab 1', disabled: false },
  { value: 'tab-2', label: 'Tab 2', disabled: false },
  { value: 'tab-3', label: 'Tab 3', disabled: false },
  { value: 'tab-4', label: 'Tab 4', disabled: false },
]

const disabledTabsMock: { value: string; label: string; disabled: boolean }[] = [
  { value: 'tab-1', label: 'Tab 1', disabled: true },
  { value: 'tab-2', label: 'Tab 2', disabled: true },
  { value: 'tab-3', label: 'Tab 3', disabled: true },
  { value: 'tab-4', label: 'Tab 4', disabled: true },
]

export default meta
type TabsStory = StoryObj<typeof Tabs>

export const Default: TabsStory = {
  render: (args) => (
    <Tabs {...args} defaultValue="tab-1">
      <TabsList>
        {tabsMock.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} disabled={tab.disabled}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabsMock.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <div className="p-4">{`Content for ${tab.label}`}</div>
        </TabsContent>
      ))}
    </Tabs>
  ),
  args: {
    variant: 'default',
  },
}

export const Underline: TabsStory = {
  render: (args) => (
    <Tabs {...args} defaultValue="tab-1">
      <TabsList>
        {tabsMock.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} disabled={tab.disabled}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabsMock.map((tab) => (
        <TabsContent value={tab.value}>
          <div className="p-4">{`Content for ${tab.label}`}</div>
        </TabsContent>
      ))}
    </Tabs>
  ),
  args: {
    variant: 'underline',
  },
}

export const Disabled: TabsStory = {
  render: (args) => (
    <Tabs {...args} defaultValue="tab-1">
      <TabsList>
        {disabledTabsMock.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} disabled={tab.disabled}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {disabledTabsMock.map((tab) => (
        <TabsContent value={tab.value}>
          <div className="p-4">{`Content for ${tab.label}`}</div>
        </TabsContent>
      ))}
    </Tabs>
  ),
  args: {
    variant: 'default',
  },
}
