import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html, body, body > div:first-child, div#__next, div#__next > div {
    height: 100%;
    width: 100%;
}
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
button {
    cursor: pointer;
}
@media (min-width: 1024px) {
    body {
        ::-webkit-scrollbar {
            height: 15px;
            background-color: var(--backgroundColor);
        }
        ::-webkit-scrollbar-thumb {
            background-color: var(--secundaryColor2);
            border-radius: 5px;

            :hover {
                background-color: var(--secundaryColor);
            }
        }
    }
}
`;
