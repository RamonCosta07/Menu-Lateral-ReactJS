import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html{
    font: 16px 'Roboto', sans-serif;
}

body{
    background-color: lightseagreen;
}
`

export default GlobalStyle;