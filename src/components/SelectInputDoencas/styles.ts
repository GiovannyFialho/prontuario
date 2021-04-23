import styled from "styled-components";

export const Wrapper = styled.div`
    margin-bottom: 2rem;
`;

export const Label = styled.h2`
    font-weight: 500;
    margin-bottom: 1rem;
`;

export const Select = styled.select`
    width: 100%;
    padding: 10px 15px;
    background-color: #f5f5f5;
    border: none;
    border-radius: 1rem;
`;

export const Selected = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 1rem 0;
`;

export const SelectedItem = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background-color: #bee3db;
    margin-right: 0.8rem;
    border-radius: 1.2rem;
    font-size: 1.3rem;
`;

export const SelectedIconClose = styled.div`
    cursor: pointer;
`;
