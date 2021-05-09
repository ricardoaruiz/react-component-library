import styled, { css } from 'styled-components'

import { TestComponentProps } from './TestComponent.types'

type WrapperProps = Pick<TestComponentProps, 'variant'>

const wrapperModifiers = {
    primary: () => css`
        ${({ theme }) => css`
            background-color: ${theme.colors.white};
        `};
    `,
    secondary: () => css`
        ${({ theme }) => css`
            background-color: ${theme.colors.black};
            color: ${theme.colors.white};
        `};
    `
}

export const Wrapper = styled.div<WrapperProps>`
    ${({ theme, variant }) => css`
        border: 1px solid ${theme.colors.black};
        padding: ${theme.spacings.xsmall};
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
    ${({ theme }) => css`
        font-family: ${theme.font.family};
    `};
`
