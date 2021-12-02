import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color: var(--color)
    }

    html, body, #root {
        height: 100%;
    }

    *, button, input {
        border: 0;
        outline: none;
        font-family: "Roboto", sans-serif
    }

    button {
        cursor: pointer;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Raleway', sans-serif;
    }

`;

export { GlobalStyle };