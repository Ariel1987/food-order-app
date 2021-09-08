import styled, { css } from "styled-components";

export const Wrapper = styled.section`
    ${({ theme }) => css`
        height: 100vh;
        background-color: ${theme.colors.background};
    `}
`

export const HeaderWrapper = styled.section`
    ${({ theme }) => css`
        display: flex;
        justify-content: space-between;
        padding: 0 10%;
        align-items: center;
        height: 5rem;
        background-color: #8a2b06;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    `}
`

export const MealsSummaryWrapper = styled.section`
    ${({ theme }) => css`
        text-align: center;
        max-width: 45rem;
        width: 90%;
        margin: auto;
        margin-top: -10rem;
        position: relative;
        background-color: #383838;
        color: white;
        border-radius: 14px;
        padding: 1rem;
        box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25);

    `}
`
