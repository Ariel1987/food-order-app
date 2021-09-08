import { Button } from "./HeaderCartButton.styles"
import CartIcon from "./HeaderCartIcon"

const HeaderCartButton = () => {
    return (
        <Button>
            <CartIcon />
            <h5>Your Cart</h5>
            <p>0</p>
        </Button>

    )
}

export default HeaderCartButton