import type { Meta, StoryObj } from '@storybook/react-vite'
import { FormMessage } from './form-message'

const meta: Meta<typeof FormMessage> = {
  title: 'UI/FormMessage',
  component: FormMessage,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error', 'success', 'warning'],
    },
  },
}

export default meta
type FormMessageStory = StoryObj<typeof FormMessage>

export const Default: FormMessageStory = {
  args: {
    children: 'Form Message',
    variant: 'default',
  },
}

export const Error: FormMessageStory = {
  args: {
    children: 'Error Message',
    variant: 'error',
  },
}

export const Success: FormMessageStory = {
  args: {
    children: 'Success Message',
    variant: 'success',
  },
}

export const Warning: FormMessageStory = {
  args: {
    children: 'Warning Message',
    variant: 'warning',
  },
}
