import React from 'react'

import { TestComponentProps } from './TestComponent.types'

import * as S from './TestComponent.style'

const TestComponent: React.FC<TestComponentProps> = ({
    variant = 'primary',
    title,
    subtitle
}) => (
    <S.Wrapper variant={variant}>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Wrapper>
)

export default TestComponent
