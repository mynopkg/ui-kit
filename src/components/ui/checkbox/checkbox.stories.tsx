import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from './checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    error: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
}

export default meta
type CheckboxStory = StoryObj<typeof Checkbox>

export const Small: CheckboxStory = {
  args: {
    size: 'sm',
  },
}

export const Medium: CheckboxStory = {
  args: {
    size: 'md',
  },
}

export const Large: CheckboxStory = {
  args: {
    size: 'lg',
  },
}

export const Error: CheckboxStory = {
  args: {
    error: true,
  },
}
