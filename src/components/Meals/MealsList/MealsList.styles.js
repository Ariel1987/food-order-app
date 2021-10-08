import styled, { css } from "styled-components";

export const LoadingWrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: center;
    `}
`

export const ButtonWrapper = styled.div`
    ${({ theme }) => css`
        font: inherit;
        cursor: pointer;
        background-color: ${theme.colors.quarternary};
        color: ${theme.colors.primary};
        padding: 0.25rem 2rem;
        border-radius: 20px;
        font-weight: ${theme.font.weight.bold};
        text-align: center;
        width: 20%;
    `} 
`
