import type { Meta, StoryObj } from '@storybook/react-vite'
import type { TabsProps } from './tabs'
import { Tabs } from './tabs'

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

export default meta
type TabsStory = StoryObj<typeof Tabs>

const tabsMock: TabsProps['tabs'] = [
  {
    value: 'tab1',
    label: 'Tab 1',
    content: <div>Content for Tab 1</div>,
    disabled: false,
  },
  {
    value: 'tab2',
    label: 'Tab 2',
    content: <div>Content for Tab 2</div>,
    disabled: false,
  },
  {
    value: 'tab3',
    label: 'Tab 3',
    content: <div>Content for Tab 3</div>,
    disabled: false,
  },
  {
    value: 'tab4',
    label: 'Tab 4',
    content: <div>Content for Tab 4</div>,
    disabled: false,
  },
]

export const Default: TabsStory = {
  args: {
    tabs: tabsMock,
    variant: 'default',
  },
}

export const Underline: TabsStory = {
  args: {
    tabs: tabsMock,
    variant: 'underline',
  },
}
