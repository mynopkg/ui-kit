import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectLabel,
  SelectValue,
  SelectSeparator,
} from './select'

const SelectFruitsMock: { value: string; name: string }[] = [
  { value: 'apple', name: 'Apple' },
  { value: 'banana', name: 'Banana' },
  { value: 'orange', name: 'Orange' },
]

const SelectVegetablesMock: { value: string; name: string }[] = [
  { value: 'broccoli', name: 'Broccoli' },
  { value: 'carrot', name: 'Carrot' },
]

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error'],
    },
  },
}

export default meta
type SelectStory = StoryObj<typeof Select>

export const Default: SelectStory = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        {SelectFruitsMock.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  ),
  args: {
    variant: 'default',
  },
}

export const WithGroup: SelectStory = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          {SelectFruitsMock.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          {SelectVegetablesMock.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
  args: {
    variant: 'default',
  },
}

export const Error: SelectStory = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        {SelectFruitsMock.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  ),
  args: {
    variant: 'error',
  },
}

export const Disabled: SelectStory = {
  render: (args) => (
    <Select {...args} disabled>
      <SelectTrigger disabled />
      <SelectContent>
        {SelectFruitsMock.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  ),
  args: {
    variant: 'default',
  },
}
