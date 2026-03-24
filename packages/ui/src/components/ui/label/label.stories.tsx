import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from './label'

const meta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error', 'success', 'warning'],
    },
  },
}

export default meta
type LabelStory = StoryObj<typeof Label>

export const Default: LabelStory = {
  args: {
    variant: 'default',
    children: 'Label',
  },
}

export const Error: LabelStory = {
  args: {
    variant: 'error',
    children: 'Label',
  },
}

export const Success: LabelStory = {
  args: {
    variant: 'success',
    children: 'Label',
  },
}

export const Warning: LabelStory = {
  args: {
    variant: 'warning',
    children: 'Label',
  },
}
