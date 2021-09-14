import styled, { css } from "styled-components";

export const Wrapper = styled.li`
    ${({ theme }) => css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid ${theme.colors.quarternary};
        padding: 1rem 0;
        margin: 1rem 0;

        h2 {
            margin: 0 0 0.5rem 0;
            color: ${theme.colors.octonary}; 
        }

        section {
            width: 10rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        p {
            font-weight: bold;
            color: ${theme.colors.quarternary};
        }

        span {
            font-weight: bold;
            border: 1px solid ${theme.colors.secundary};
            padding: 0.25rem 0.75rem;
            border-radius: 6px;
            color: ${theme.colors.octonary};
        }
    `}
`

export const CartItemButtonsWrapper = styled.div`
    ${({ theme }) => css`
        display: flex;

        @media (min-width: 768px) {
            .actions {
                flex-direction: row;
            }
        }
  
        button {
            font: inherit;
            font-weight: ${theme.font.weight.bold};
            font-size: ${theme.font.size.xsmall};
            color: ${theme.colors.quarternary};
            border: 1px solid ${theme.colors.quarternary};
            width: 3rem;
            text-align: center;
            border-radius: 6px;
            background-color: transparent;
            cursor: pointer;
            margin-left: 1rem;
            margin: 0.25rem;

            :hover,
            :active {
                background-color: ${theme.colors.quarternary};
                color: white;
            }
        }
    `}
` 