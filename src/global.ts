import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme.background};
    }

    body, input, textarea, button {
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: "Baloo 2", sans-serif;
        line-height: 1.3;
    }

`