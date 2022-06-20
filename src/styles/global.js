import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    text-decoration: none;
    font-family: "Nunito", sans-serif;   
}
textarea {
    resize: none;
}
ul, ol {
    list-style: none;
}
:root {
    --backgroundColor: #131418;
    --primaryColor: #5CB9F2;
    --secundaryColor: #1B8EF2;
    --secundaryColor2: #1A2E40;
}
`