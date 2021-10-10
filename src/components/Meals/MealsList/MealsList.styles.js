import styled, { css } from "styled-components";

export const LoadingWrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: center;
    `}
`

export const ErrorWrapper = styled.div`
    ${({ theme }) => css`
        text-align: center;
        color: red;
    `} 
`
