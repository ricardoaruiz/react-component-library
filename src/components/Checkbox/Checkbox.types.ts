import { InputHTMLAttributes } from 'react'

export type CheckboxLabelColors = 'white' | 'black'

export type CheckboxProps = {
    label?: string
    labelFor?: string
    labelColor?: CheckboxLabelColors
    isChecked?: boolean
    onCheck?: (value: boolean) => void
} & InputHTMLAttributes<HTMLInputElement>
