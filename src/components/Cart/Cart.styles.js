import styled, { css } from "styled-components";

export const Wrapper = styled.ul`
    ${({ theme }) => css`
        list-style: none;
        margin: 0;
        padding: 0;
        max-height: 20rem;
        overflow-y: scroll;
    
    `}
`

export const TotalAmountWrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
            font-weight: bold;
            font-size: 1.5rem;
            margin: 1rem 0;
        }
        
    `}
`

export const ButtonWrapper = styled.div`
    ${({ theme }) => css`
        display:flex;
        justify-content: flex-end;
    `}
`

export const CloseButton = styled.div`
    ${({ theme }) => css`
        background-color: transparent;
        border: 1px solid #8a2b06;
        color: #8a2b06;
        font: inherit;
        cursor: pointer;
        padding: 0.5rem 2rem;
        border-radius: 25px;
        margin-left: 1rem;
        
        :hover,
        :active {
        background-color: #5a1a01;
        border-color: #5a1a01;
        color: white;
        }
    `}
`
export const OrderButton = styled.div`
    ${({ theme }) => css`
        background-color: #8a2b06;
        color: white;
        border: 1px solid #8a2b06;
        font: inherit;
        cursor: pointer;
        padding: 0.5rem 2rem;
        border-radius: 25px;
        margin-left: 1rem;
        
        :hover,
        :active {
        background-color: #5a1a01;
        border-color: #5a1a01;
        color: white;
    `}
`

