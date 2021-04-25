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
        font-size: 2rem;
        font-weight: 500;
        text-align: center;
        text-decoration: none;
        padding: 15px 20px;
        margin: 2rem 0;
        background-color: #e63946;
        width: 100%;
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
        .content{
            max-width: 60rem;
            margin: 0 auto;
            p{
                font-size: 1.6rem;
                font-weight: 600;
                color: #e63946;
                margin-bottom: 1rem;
            }
            h2{
                line-height: 2rem;
            }
        }
    }
`;

export default GlobalStyles;
