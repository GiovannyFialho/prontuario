import styled from "styled-components";

export const Wrapper = styled.div`
    margin-bottom: 2rem;
`;

export const Label = styled.h2`
    font-weight: 500;
    margin-bottom: 1rem;
    &.obrigatorio {
        color: #e63946;
    }
`;

export const Select = styled.select`
    width: 100%;
    padding: 10px 15px;
    background-color: #f5f5f5;
    border: none;
    border-radius: 1rem;
`;
