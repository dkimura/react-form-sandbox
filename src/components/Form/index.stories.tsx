import { UserForm } from '.'

import type { Meta, Story } from '@storybook/react'
import { ComponentProps } from 'react'

type Args = ComponentProps<typeof UserForm>

const meta: Meta<Args> = {
  title: 'Form',
}

const BaseStory: Story<Args> = (props) => <UserForm {...props} />

export const Sample = BaseStory.bind({})

export default meta
