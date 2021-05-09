import styled, { css } from 'styled-components'

import { TestComponentProps } from './TestComponent.types'

type WrapperProps = Pick<TestComponentProps, 'variant'>

const wrapperModifiers = {
    primary: () => css`
        background-color: #e0e0e0;
    `,
    secondary: () => css`
        background-color: #131111;
        color: #e0e0e0;
    `
}

export const Wrapper = styled.div<WrapperProps>`
    ${({ variant }) => css`
        background-color: #e0e0e0;
        border: 1px solid #131111;
        padding: 16px;
        width: 360px;
        text-align: center;

        ${wrapperModifiers[variant]}
    `};
`

export const Title = styled.h1`
    font-family: 'Avenir Next', Helvetica, Arial, sans-serif;
    font-size: 40px;
    font-weight: bold;
`

export const Subtitle = styled.h2`
    font-family: 'Avenir Next', Helvetica, Arial, sans-serif;
`
