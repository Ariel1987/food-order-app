import styled, { css } from "styled-components";

export const InputWrapper = styled.div`
    ${({ theme }) => css`
        margin: 1rem 0;
        height: 19rem;
        overflow-y: scroll;

        input {
            margin-bottom: 0.5rem;
        }

        label {
            font-weight: bold;
            margin-bottom: 0.25rem;
            display: block;
        }

        input {
            font: inherit;
            border: 1px solid #ccc;
            border-radius: 4px;
            width: 20rem;
            max-width: 100%;
            border-color: ${props => props.borderColor ? '#aa0b20': ''}
        }

        section {
            display: flex;
            justify-content: flex-end;
            gap: 1rem;
        }

        p {
            color: #aa0b20;
        }
    `}
`

export const SubmitButton = styled.div`
    ${({ theme }) => css`{
        button{
            font: inherit;
            cursor: pointer;
            border-radius: 25px;
            padding: 0.5rem 2rem; 
            border: 1px solid #5a1a01;
            background-color: #5a1a01;
            color: white;
            :hover,
            :active {
                background-color: #7a2706;        
            }

        }
    `}
`

export const CancelButton = styled.div`
    ${({ theme }) => css`{
        font: inherit;
        color: #5a1a01;
        cursor: pointer;
        background-color: transparent;
        border: none;
        border-radius: 25px;
        padding: 0.5rem 2rem; 
        ::hover,
        :active {
            background-color: #ffe6dc;    
        }
    `}
`
