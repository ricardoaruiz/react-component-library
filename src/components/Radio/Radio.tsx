import React from 'react'

import { Base } from 'components/Base'
import { RadioProps } from './Radio.types'

import * as S from './Radio.styles'

export const Radio = ({
    label,
    labelFor,
    labelColor = 'white',
    value,
    onCheck,
    ...props
}: RadioProps) => {
    const onChange = React.useCallback(() => {
        onCheck && onCheck(value!)
    }, [onCheck, value])

    return (
        <Base>
            <S.Wrapper>
                <S.Input
                    type="radio"
                    id={labelFor}
                    value={value}
                    onChange={onChange}
                    {...props}
                />
                {!!label && (
                    <S.Label htmlFor={labelFor} labelColor={labelColor}>
                        {label}
                    </S.Label>
                )}
            </S.Wrapper>
        </Base>
    )
}

export default Radio
