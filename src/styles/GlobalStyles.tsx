import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
  --col-main: #0097b2;
  --col-primary: #eb8d24;
  --col-secondary: hsl(237, 18%, 59%);

  --col-gray-1: hsl(236, 21%, 26%);
  --col-gray-2: hsl(235, 16%, 14%);
  --col-gray-3: hsl(234, 17%, 12%);
}

*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  font-family: "Red Hat Text", sans-serif;
  font-weight: 700;
  color: white;
    background-image: url('/images/desktop.svg');
  background-repeat: no-repeat;
  background-position:center;
  background-size: cover;
}

`;

export default GlobalStyles;
