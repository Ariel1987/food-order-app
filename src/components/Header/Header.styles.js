import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    ${({ theme }) => css`

        h1 {
            font-weight: ${theme.font.weight.bold};
            font-size: ${theme.font.size.large};
        }

    `}
`

export const HeaderWrapper = styled.section`
    ${({ theme }) => css`
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        padding: 0 10%;
        align-items: center;
        height: 5rem;
        background-color: #8a2b06;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        z-index: 10;
        width: 100%;
        color: white;
    `}
`
