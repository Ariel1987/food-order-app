import styled, { css } from "styled-components";

export const InputWrapper = styled.div`
    ${({ theme }) => css`
        margin-bottom: 0.5rem;
        display: flex;
        flex-direction: column;

        label {
            font-weight: bold;
            margin-right: 1rem;
        }

        input {
            margin: 10px 0;
            width: 100%;
            border-radius: 5px;
            border: 1px solid #ccc;
            font: inherit;
            padding: 0.5rem;
        }

        button {
            margin-top: 20px;
            width: 25%;
            align-self: flex-end;
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

        p {
            color: red;
            padding-bottom: 10px;
        }
    `}
`
