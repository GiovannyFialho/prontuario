import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.h2`
    margin: 2rem 0;
    padding-bottom: 1rem;
    font-size: 3.2rem;
    ${media.greaterThan("medium")`
        font-size: 4rem;
    `}
`;
