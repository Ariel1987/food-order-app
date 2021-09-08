import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    ${({ theme }) => css`
        
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #ccc;
        

        h3 {
        margin: 0 0 0.25rem 0;
        }

        p {
        font-style: italic;
        }

        h5 {
        margin-top: 0.25rem;
        font-weight: bold;
        color: #ad5502;
        font-size: 1.25rem;
        }
    `}
`




