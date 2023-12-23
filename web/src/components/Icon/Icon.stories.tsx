// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Icon from './Icon'

const meta: Meta<typeof Icon> = {
  component: Icon,
}

const demoSize = 256
const demoColor = '#111'

export default meta

type Story = StoryObj<typeof Icon>

export const Calendar: Story = {
  args: {
    id: 'calendar',
    size: demoSize,
    color: demoColor,
  },
}

export const Check: Story = {
  args: {
    id: 'check',
    size: demoSize,
    color: demoColor,
  },
}

export const Chevron: Story = {
  args: {
    id: 'chevron',
    size: demoSize,
    color: demoColor,
  },
}

export const Close: Story = {
  args: {
    id: 'close',
    size: demoSize,
    color: demoColor,
  },
}

export const EyeClosed: Story = {
  args: {
    id: 'eyeclosed',
    size: demoSize,
    color: demoColor,
  },
}

export const EyeOpened: Story = {
  args: {
    id: 'eyeopened',
    size: demoSize,
    color: demoColor,
  },
}

export const Logout: Story = {
  args: {
    id: 'logout',
    size: demoSize,
    color: demoColor,
  },
}

export const Minus: Story = {
  args: {
    id: 'minus',
    size: demoSize,
    color: demoColor,
  },
}

export const Plus: Story = {
  args: {
    id: 'plus',
    size: demoSize,
    color: demoColor,
  },
}

export const Question: Story = {
  args: {
    id: 'question',
    size: demoSize,
    color: demoColor,
  },
}

export const ThumbsDown: Story = {
  args: {
    id: 'thumbsdown',
    size: demoSize,
    color: demoColor,
  },
}

export const ThumbsUp: Story = {
  args: {
    id: 'thumbsup',
    size: demoSize,
    color: demoColor,
  },
}

export const Upload: Story = {
  args: {
    id: 'upload',
    size: demoSize,
    color: demoColor,
  },
}

export const User: Story = {
  args: {
    id: 'user',
    size: demoSize,
    color: demoColor,
  },
}
