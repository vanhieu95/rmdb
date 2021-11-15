import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px;
    --maxWidthMobile: 480px;
    --white: #ffffff;
    --lightGrey: #eeeeee;
    --medGrey: #353535;
    --darkGrey: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMedium: 1.2rem;
    --fontSmall: 1rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 17px;
  }

  body {
    font-family: 'Roboto', sans-serif;

    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--white)
    }

    h3 {
      font-size: 1.1.rem;
      font-weight: 600;
    }

    p {
      color: var(--white);
    }
  }

  a {
    text-decoration: none;
  }
`