import { createGlobalStyle } from "styled-components";
import { darken } from "polished";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%;
    }
    html, body, #__next{
        height: 100%;
    }
    body{
        font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    .buttonAdd{
        color: #fff;
        font-size: 1.3rem;
        font-weight: 700;
        text-decoration: none;
        padding: 10px 15px;
        margin: 2rem 0;
        background-color: #e63946;
        width: max-content;
        border-radius: .5rem;
        transition: background-color .2s ease-in-out;
        &:hover{
            background-color: ${darken(0.1, "#e63946")}
        }
    }
    .formContent{
        max-width: 80rem;
        width: 100%;
        .titleForm{
            background-color: #bee3db;
            width: max-content;
            padding: 10px 15px;
            border-top-left-radius: .8rem;
            border-top-right-radius: .8rem;
            margin-bottom: 1rem;
            h2 {
                font-weight: 500;
                font-size: 1.8rem;
                color: ${darken(0.6, "#bee3db")};
            }
        }
    }
`;

export default GlobalStyles;
