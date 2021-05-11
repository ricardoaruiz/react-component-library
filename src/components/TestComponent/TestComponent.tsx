import React from 'react'

import { Base } from 'components/Base'
import { TestComponentProps } from './TestComponent.types'

import * as S from './TestComponent.style'

export const TestComponent: React.FC<TestComponentProps> = ({
    variant = 'primary',
    title,
    subtitle
}) => (
    <Base>
        <S.Wrapper variant={variant}>
            <S.Title>{title}</S.Title>
            <S.Subtitle>{subtitle}</S.Subtitle>
        </S.Wrapper>
    </Base>
)

export default TestComponent
