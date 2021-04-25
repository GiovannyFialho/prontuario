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
        background-color: #EBEBEB;
    }
    button{
        cursor: pointer;
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
        border: none;
        &:hover{
            background-color: ${darken(0.1, "#e63946")}
        }
    }
    .msgError{
        margin: 2rem auto;
        padding: 3rem;
        background-color: #fff;
        border-radius: .8rem;
        width: 100%;
        max-width: max-content;
        &.alignRight{
            margin: 2rem 0;
            h2 {
                margin-top: 0;
            }
        }
        span{
            font-size: 1.2rem;
            font-weight: 600;
            color: #e63946;
        }
        h2{
            margin-top: 1rem;
        }
    }
    .formContent{
        max-width: 80rem;
        width: 100%;
        background-color: #fff;
        border-radius: .8rem;
        .titleForm{
            background-color: #bee3db;
            padding: 10px 15px;
            margin-bottom: 1rem;
            border-top-left-radius: .8rem;
            border-top-right-radius: .8rem;
            h2 {
                font-weight: 500;
                font-size: 1.8rem;
                color: ${darken(0.6, "#bee3db")};
            }
        }
        form {
            padding: 0 1rem;
        }
    }
`;

export default GlobalStyles;
