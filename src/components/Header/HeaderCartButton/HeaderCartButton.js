import { HeaderButtonWrapper } from "./HeaderCartButton.styles"
import CartIcon from "./HeaderCartIcon"
import CartContext from "../../../store/cart-context"
import { useContext, useEffect, useState } from "react"

const HeaderCartButton = props => {
    const [btnIsHilighted, setBtnIsHilighted] = useState(false)

    const cartCtx = useContext(CartContext)
    const { items } = cartCtx

    const numberOfCartItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount
    }, 0)

    useEffect(() => {
        if (items.length === 0) {
            return
        }
        setBtnIsHilighted(true)

        const timer = setTimeout(() => {
            setBtnIsHilighted(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [items])

    return (
        <HeaderButtonWrapper 
            style={btnIsHilighted ? {animation: 'bump 300ms ease-out'} : {animation: ''}}
        >
            <button onClick={props.onClick}>
                <CartIcon />
                <h5>Your Cart</h5>
                <p>{numberOfCartItems}</p>
            </button>
        </HeaderButtonWrapper>

    )
}

export default HeaderCartButton