import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './button'
import { Plus, Trash2 } from 'lucide-react'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'outline', 'secondary'],
    },
    leftIcon: { control: { disable: true } },
    rightIcon: { control: { disable: true } },
  },
}

export default meta
type ButtonStory = StoryObj<typeof Button>

export const Primary: ButtonStory = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
}

export const WithLeftIcon: ButtonStory = {
  args: {
    children: 'Add to cart',
    leftIcon: <Plus className="h-4 w-4" />,
  },
}

export const WithRightIcon: ButtonStory = {
  args: {
    children: 'Delete',
    rightIcon: <Trash2 className="h-4 w-4" />,
  },
}

export const AsChild: ButtonStory = {
  args: {
    children: (
      <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
        Link to GitHub
      </a>
    ),
  },
}
