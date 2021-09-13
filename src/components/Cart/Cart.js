import { useContext } from "react"
import CartContext from "../../store/cart-context"
import Modal from "../UI/Modal/Modal"
import { Wrapper, TotalAmountWrapper, ButtonWrapper, CloseButtonWrapper } from "./Cart.styles"
import CartItem from "./CartItem/CartItem"

const Cart = props => {
    const cartCtx = useContext(CartContext)

    const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0

    const cartItemRemoveHandler = id => {

    }

    const cartItemAddHandler = item => {

    }

    const cartItems = (
        <Wrapper>
            {cartCtx.items.map(item =>
                <CartItem 
                    key={item.id} 
                    name={item.name} 
                    amount={item.amount} 
                    price={item.price} 
                    onRemove={cartItemRemoveHandler.bind(null, item.id)} 
                    onAdd={cartItemAddHandler.bind(null, item)} 
                />
            )}
        </Wrapper>
    )

    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <TotalAmountWrapper>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </TotalAmountWrapper>
            <ButtonWrapper>
                <CloseButtonWrapper>
                    <button onClick={props.onHideCart}>Close</button>
                </CloseButtonWrapper>
                {hasItems && <button>Order</button>}
            </ButtonWrapper>
        </Modal>
    )
}

export default Cart