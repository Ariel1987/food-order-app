import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    ${({ theme }) => css`
            width: 100%;
            height: 25rem;
            overflow: hidden;
            z-index: 0;

        img {
            width: 110%;
            height: 100%;
            transform: rotateZ(-4deg) translateY(-5rem) translateX(-1rem);
            object-fit: cover;
        }
    `}
`
