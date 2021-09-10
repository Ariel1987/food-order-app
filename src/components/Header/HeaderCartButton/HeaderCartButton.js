import { HeaderButtonWrapper } from "./HeaderCartButton.styles"
import CartIcon from "./HeaderCartIcon"

const HeaderCartButton = () => {
    return (
        <HeaderButtonWrapper>
            <CartIcon />
            <h5>Your Cart</h5>
            <p>0</p>
        </HeaderButtonWrapper>

    )
}

export default HeaderCartButton