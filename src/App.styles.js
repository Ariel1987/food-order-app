import styled, { css } from "styled-components";

export const Wrapper = styled.section`
    ${({ theme }) => css`
        background-color: ${theme.colors.background};
        height: 100%;
        overflow: hidden;
    `}
`

export const HeaderWrapper = styled.section`
    ${({ theme }) => css`
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        padding: 0 10%;
        align-items: center;
        height: 5rem;
        background-color: #8a2b06;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        z-index: 10;
        width: 100%;
        color: white;
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
        z-index: 10;

    `}
`

export const MealsListWrapper = styled.section`
    ${({ theme }) => css`
        padding: 1rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        border-radius: 14px;
        background-color: white;
        max-width: 60rem;
        width: 90%;
        margin: 2rem auto;
        animation: meals-appear 1s ease-out forwards;
 
        ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        @keyframes meals-appear {
            from {
                opacity: 0;
                transform: translateY(3rem);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `}
`