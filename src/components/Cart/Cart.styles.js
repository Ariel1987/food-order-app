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
                    
        button {
            font: inherit;
            cursor: pointer;
            border: 1px solid #8a2b06;
            padding: 0.5rem 2rem;
            border-radius: 25px;
            margin-left: 1rem;
            background-color: #8a2b06;
            color: white;
            
            :hover,
            :active {
            background-color: #5a1a01;
            border-color: #5a1a01;
            color: white;
            }
        
        }
    
    `}
` 

export const CloseButtonWrapper = styled.div`
    ${({ theme }) => css`
        button {
            background-color: transparent;
            border: 1px solid #8a2b06;
            color: #8a2b06;
            
            :hover,
            :active {
            background-color: #5a1a01;
            border-color: #5a1a01;
            color: white;
            }
        
        }
    
    `}
` 
