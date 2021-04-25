import styled from "styled-components";
import { darken } from "polished";

export const FormContent = styled.div`
    max-width: 80rem;
    width: 100%;
    background-color: #fff;
    border-radius: 0.8rem;
`;

export const TitleForm = styled.div`
    background-color: #bee3db;
    padding: 10px 15px;
    margin-bottom: 1rem;
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
    h2 {
        margin: 0;
        padding: 0;
        font-weight: 500;
        font-size: 1.8rem;
        color: ${darken(0.6, "#bee3db")};
    }
`;

export const Form = styled.form`
    padding: 0 1rem;
`;
