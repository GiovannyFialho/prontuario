import styled from "styled-components";
import { darken } from "polished";

export const ContainerListaProntuarios = styled.div`
    max-width: 38rem;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const ContainerProntuario = styled.div`
    display: flex;
    margin-bottom: 2rem;
`;

export const ContentData = styled.div`
    h2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 1rem;
        color: ${darken(0.4, "#bee3db")};
        font-size: 1.8rem;
        font-weight: 700;
        .mes {
            font-weight: 400;
            font-size: 1.5rem;
            text-transform: uppercase;
        }
        .ano {
            font-weight: 400;
            font-size: 1.2rem;
        }
    }
`;

export const ContentProntuario = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 0.8rem;
    width: 100%;
    background-color: #fff;
`;

export const HeaderProntuario = styled.div`
    margin-bottom: 2rem;

    .clock {
        background-color: ${darken(0.3, "#bee3db")};
        padding: 15px 20px;
        border-top-left-radius: 0.8rem;
        border-top-right-radius: 0.8rem;
        display: flex;
        align-items: center;
        svg {
            color: #fff;
        }
        p {
            margin: 0 0 0 1rem;
            padding: 0;
            color: #fff;
            font-size: 1.8rem;
        }
    }

    .title {
        background-color: #bee3db;
        padding: 10px 15px;
        h2 {
            font-size: 1.7rem;
            font-weight: 400;
            color: ${darken(0.6, "#bee3db")};
        }
    }
`;

export const BodyProntuario = styled.div`
    display: flex;
    flex-direction: column;

    .queixa,
    .doencas,
    .historico {
        margin-bottom: 2rem;
        padding: 0 20px;

        p {
            font-size: 1.4rem;
            color: #222;
        }

        .doencasSelected {
            display: flex;
            flex-wrap: wrap;
            margin: 1rem 0;
            .doenca {
                display: flex;
                align-items: center;
                background-color: #bee3db;
                margin-right: 0.8rem;
                border-radius: 1.5rem;
                p {
                    padding: 0.7rem;
                    font-size: 1.3rem;
                }
            }
        }
    }
`;

export const TitleProntuario = styled.h2`
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
`;
