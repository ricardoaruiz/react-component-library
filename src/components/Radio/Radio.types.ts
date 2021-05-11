import { InputHTMLAttributes } from 'react'

export type RadioLabelColors = 'black' | 'white'
type RadioValue = string | ReadonlyArray<string> | number

export type RadioProps = {
    label?: string
    labelFor?: string
    labelColor?: RadioLabelColors
    value?: RadioValue
    onCheck?: (value: RadioValue) => void
} & InputHTMLAttributes<HTMLInputElement>
