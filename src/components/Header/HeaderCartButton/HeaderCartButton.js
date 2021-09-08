import { Wrapper } from "./HeaderCartButton.styles"
import CartIcon from "./HeaderCartIcon"

const HeaderCartButton = () => {
    return (
        <Wrapper>
            <CartIcon />
            <h5>Your Cart</h5>
            <p>0</p>
        </Wrapper>

    )
}

export default HeaderCartButton