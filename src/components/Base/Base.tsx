import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/globals'
import theme from 'styles/theme'

type BaseProps = {
    children: React.ReactNode
}

export const Base = ({ children }: BaseProps) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    )
}

export default Base
