import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    ${({ theme }) => css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        color: white;
        z-index: 10;

        h1 {
            font-weight: ${theme.font.weight.bold};
            font-size: ${theme.font.size.large};
        }

    `}
`