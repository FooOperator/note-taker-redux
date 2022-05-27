import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<{ fontFamily: string }>`
    @font-face {
        font-family: ${(props) => props.fontFamily};
        src: 
            local(${(props) => props.fontFamily}), 
            url(${(props) => props.fontFamily}) format('woff'),
            url(${(props) => props.fontFamily}) format('woff2'),
        ;
        font-weight: 300;
        font-style: normal;
    }

    html, body {
        margin: 0;
        height: 100%;
    }

    ::placeholder {
        color: blue;
    }

    .appear-on-parent-hover {
        visibility: hidden;
    }

    .no-select {
        user-select: none; /* supported by Chrome and Opera */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
    }

    input, 
    textarea {
        border: 0;
        box-shadow: none;
        :focus {
            outline: none !important;
        }
    }
`;

export default GlobalStyle;