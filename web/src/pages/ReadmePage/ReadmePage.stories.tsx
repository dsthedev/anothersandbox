import type { Meta, StoryObj } from '@storybook/react'

import ReadmePage from './ReadmePage'

const meta: Meta<typeof ReadmePage> = {
  component: ReadmePage,
}

export default meta

type Story = StoryObj<typeof ReadmePage>

export const Primary: Story = {}
