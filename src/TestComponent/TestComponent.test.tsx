import React from 'react'
import { render, screen } from '@testing-library/react'

import theme from '../styles/theme'
import TestComponent from './TestComponent'
import { TestComponentProps } from './TestComponent.types'

const props: TestComponentProps = {
    title: 'This is the title',
    subtitle: 'This is the subtitle'
}

describe('Test Component', () => {
    it('should render correctly', () => {
        render(<TestComponent {...props} />)

        expect(
            screen.getByRole('heading', { name: /this is the title/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: /this is the subtitle/i })
        ).toBeInTheDocument()
    })

    it('should render with primary variant', () => {
        const { container } = render(
            <TestComponent {...props} variant="primary" />
        )

        expect(container.firstChild).toHaveStyle({
            'background-color': theme.colors.white
        })
    })

    it('should render with secondary variant', () => {
        const { container } = render(
            <TestComponent {...props} variant="secondary" />
        )

        expect(container.firstChild).toHaveStyle({
            'background-color': theme.colors.black,
            color: theme.colors.white
        })
    })
})
