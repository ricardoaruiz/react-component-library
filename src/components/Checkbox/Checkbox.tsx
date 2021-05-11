import React from 'react'

import { CheckboxProps } from './Checkbox.types'

import * as S from './Checkbox.styles'
import { Base } from 'components/Base'

export const Checkbox = ({
    label,
    labelFor = '',
    labelColor = 'white',
    isChecked = false,
    onCheck,
    ...props
}: CheckboxProps) => {
    const [checked, setChecked] = React.useState(isChecked)

    const onChange = React.useCallback(() => {
        setChecked(!checked)
        !!onCheck && onCheck(!checked)
    }, [checked, onCheck])

    return (
        <Base>
            <S.Wrapper>
                <S.Input
                    type="checkbox"
                    id={labelFor}
                    onChange={onChange}
                    checked={checked}
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

export default Checkbox
