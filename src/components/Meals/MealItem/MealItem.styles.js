import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: space-between;
        margin: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid ${theme.colors.secundary};

        h3 {
        margin: 0 0 0.25rem 0;
        }

        p {
        font-style: italic;
        }

        h5 {
        margin-top: 0.25rem;
        font-weight: ${theme.font.weight.bold};
        color: ${theme.colors.font};
        font-size: ${theme.font.size.xsmall};
        }
    `}
`




