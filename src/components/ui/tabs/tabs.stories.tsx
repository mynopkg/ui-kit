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
]

export default meta
type TabsStory = StoryObj<typeof Tabs>

export const Default: TabsStory = {
  render: (args) => (
    <Tabs {...args} defaultValue="tab-1">
      <TabsList>
        {tabsMock.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
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
    variant: 'default',
  },
}

export const Underline: TabsStory = {
  render: (args) => (
    <Tabs {...args} defaultValue="tab-1">
      <TabsList>
        {tabsMock.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
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

export const DisabledTab: TabsStory = {
  render: (args) => (
    <Tabs {...args} defaultValue="tab-1">
      <TabsList>
        {tabsMock.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} disabled={!tab.disabled}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabsMock
        .filter((tab) => tab.disabled)
        .map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <div className="p-4">Content for {tab.label}</div>
          </TabsContent>
        ))}
    </Tabs>
  ),
  args: {
    variant: 'default',
  },
}
