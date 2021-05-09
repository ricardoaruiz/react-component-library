import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import TestComponent from './TestComponent'
import { TestComponentProps } from './TestComponent.types'

export default {
    title: 'TestComponent',
    component: TestComponent,
    parameters: {
        layout: 'fullscreen',
        backgrounds: {
            default: 'light'
        }
    },
    args: {
        variant: 'primary',
        title: 'This is the title',
        subtitle: 'This is the subtitle'
    },
    argTypes: {
        variant: {
            defaultValue: 'primary',
            control: {
                type: 'select',
                options: ['primary', 'secondary']
            }
        }
    }
} as Meta

export const Primary: Story<TestComponentProps> = (args) => (
    <TestComponent {...args} />
)
