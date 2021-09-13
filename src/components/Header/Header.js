import { Wrapper } from "./Header.styles"
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton"
import HeaderImage from "./HeaderImage/HeaderImage"
import { HeaderWrapper } from "./Header.styles"

const Header = props => {
    return (
        <Wrapper>
            <HeaderWrapper>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </HeaderWrapper>
            <HeaderImage />
        </Wrapper>
    )
}

export default Header