import { HeaderButtonWrapper } from "./HeaderCartButton.styles"
import CartIcon from "./HeaderCartIcon"
import CartContext from "../../../store/cart-context"
import { useContext } from "react"

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext) 

    const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount
    }, 0)

    return (
        <HeaderButtonWrapper>
            <button onClick={props.onClick}>
                <CartIcon />
                <h5>Your Cart</h5>
                <p>{numberOfCartItems}</p>
            </button>
        </HeaderButtonWrapper>
    )
}

export default HeaderCartButton