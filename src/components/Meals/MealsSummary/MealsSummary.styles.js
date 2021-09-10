import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    ${({ theme }) => css`
        h2 {
            font-size: 2rem;
            margin-top: 0;
            padding-bottom: 1rem;
        }
    
        p {
            padding: 10px 0;
        }
    `}
`




