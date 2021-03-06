import styled, { css } from "styled-components";

export const MealItemFormWrapper = styled.div`
    ${({ theme }) => css`
        text-align: right;

        button {
            font: inherit;
            cursor: pointer;
            background-color: #8a2b06;
            border: 1px solid #8a2b06;
            color: white;
            padding: 0.25rem 2rem;
            border-radius: 20px;
            font-weight: bold;

            :hover,
            :active {
                background-color: #641e03;
                border-color: #641e03;
            }
        }
        
    `}
`

export const InputWrapper = styled.div`
    ${({ theme }) => css`
        align-items: center;
        margin-bottom: 0.5rem;

        label {
            font-weight: bold;
            margin-right: 1rem;
        }

        input {
            width: 3rem;
            border-radius: 5px;
            border: 1px solid #ccc;
            font: inherit;
            padding-left: 0.5rem;
        }        
    `}
`





