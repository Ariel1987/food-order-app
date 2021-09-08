import { Wrapper } from "./Header.styles"
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton"
import HeaderImage from "./HeaderImage/HeaderImage"
import { HeaderWrapper } from "../../App.styles"

const Header = () => {
    return (
        <Wrapper>
            <HeaderWrapper>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </HeaderWrapper>
            <HeaderImage />
        </Wrapper>
    )
}

export default Header