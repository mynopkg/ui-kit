import type { Meta, StoryObj } from '@storybook/react-vite'
import { Switch } from './switch'

const meta: Meta<typeof Switch> = {
  title: 'UI/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    thumbShape: {
      control: 'select',
      options: ['pill', 'circle'],
    },
  },
}

export default meta
type SwitchStory = StoryObj<typeof Switch>

export const Pill: SwitchStory = {
  args: {
    thumbShape: 'pill',
  },
}

export const Circle: SwitchStory = {
  args: {
    thumbShape: 'circle',
  },
}

export const Disabled: SwitchStory = {
  args: {
    disabled: true,
  },
}
