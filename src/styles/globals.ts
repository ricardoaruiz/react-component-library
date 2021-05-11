import {
    createGlobalStyle,
    css,
    GlobalStyleComponent,
    DefaultTheme
} from 'styled-components'

type GlobalStylesProps = {
    removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<
    GlobalStylesProps,
    DefaultTheme
> = createGlobalStyle`
    ${({ theme, removeBg = true }) => css`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;

            &::before,
            &::after {
                box-sizing: inherit;
            }
        }

        html {
            font-size: 62.5%;
        }

        body {
            font-family: ${theme.font.family};
            font-size: ${theme.font.sizes.medium};

            ${!removeBg &&
            css`
                background-color: ${theme.colors.mainBg};
            `}
        }
    `}
  `
export default GlobalStyles
