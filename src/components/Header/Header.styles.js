import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    ${({ theme }) => css`

        h1 {
            font-weight: ${theme.font.weight.bold};
            font-size: ${theme.font.size.large};
        }

    `}
`