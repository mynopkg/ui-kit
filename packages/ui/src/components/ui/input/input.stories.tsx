import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './input'
import { Search } from 'lucide-react'

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error', 'success', 'warning'],
    },
    rightIcon: { control: { disable: true } },
    disabled: { control: 'boolean' },
  },
}

export default meta
type InputStory = StoryObj<typeof Input>

export const Default: InputStory = {
  args: {
    variant: 'default',
    placeholder: 'Placeholder',
  },
}

export const WithRightIcon: InputStory = {
  args: {
    variant: 'default',
    placeholder: 'Search',
    rightIcon: <Search className="h-4 w-4" />,
  },
}

export const Error: InputStory = {
  args: {
    variant: 'error',
  },
}

export const Success: InputStory = {
  args: {
    variant: 'success',
  },
}

export const Warning: InputStory = {
  args: {
    variant: 'warning',
  },
}

export const Disabled: InputStory = {
  args: {
    disabled: true,
  },
}
