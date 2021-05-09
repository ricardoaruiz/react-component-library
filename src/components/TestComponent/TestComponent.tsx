import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import { TestComponentProps } from './TestComponent.types'

import * as S from './TestComponent.style'

export const TestComponent: React.FC<TestComponentProps> = ({
    variant = 'primary',
    title,
    subtitle
}) => (
    <ThemeProvider theme={theme}>
        <S.Wrapper variant={variant}>
            <S.Title>{title}</S.Title>
            <S.Subtitle>{subtitle}</S.Subtitle>
        </S.Wrapper>
    </ThemeProvider>
)

export default TestComponent
