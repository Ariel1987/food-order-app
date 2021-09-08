import { Wrapper } from "./Header.styles"
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton"
import HeaderImage from "./HeaderImage/HeaderImage"
import { HeaderWrapper, MealsSummaryWrapper } from "../../App.styles"
import MealsSummary from "../MealsSummary/MealsSummary"

const Header = () => {
    return (
        <Wrapper>
            <HeaderWrapper>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </HeaderWrapper>
            <HeaderImage />
            <MealsSummaryWrapper>
                <MealsSummary />
            </MealsSummaryWrapper>
        </Wrapper>
    )
}

export default Header