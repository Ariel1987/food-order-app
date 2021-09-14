import styled, { css } from "styled-components";

export const HeaderButtonWrapper = styled.div`
        ${({ theme }) => css`
        button {
            cursor: pointer;
            font: inherit;
            border: none;
            background-color: ${theme.colors.button};
            padding: 0.75rem 3rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            border-radius: 25px;
            font-weight: ${theme.font.weight.bold};
            font-size: ${theme.font.size.xsmall};
            color: ${theme.colors.primary};

            :hover,
            :active {
                background-color: ${theme.colors.quinary};
            }

        }

        svg {
            width: 1.35rem;
            height: 1.35rem;
            margin-right: 0.5rem;
        }

        p {
            background-color: ${theme.colors.senary};
            padding: 0.25rem 1rem;
            border-radius: 25px;
            margin-left: 1rem;
        }

        :hover p,
        :active p {
            background-color: ${theme.colors.septenary};
        }

        @keyframes bump {
            0% {
                transform: scale(1);
            }
            10% {
                transform: scale(0.9);
            }
            30% {
                transform: scale(1.1);
            }
            50% {
                transform: scale(1.15);
            }
            100% {
                transform: scale(1);
            }
        } 

    `}
`