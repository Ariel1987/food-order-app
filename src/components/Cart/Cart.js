import { useContext, useState } from "react"
import CartContext from "../../store/cart-context"
import CheckOutForm from "../CheckOutForm/CheckOutForm"
import Modal from "../UI/Modal/Modal"
import { Wrapper, TotalAmountWrapper, ButtonWrapper, CloseButton, OrderButton } from "./Cart.styles"
import CartItem from "./CartItem/CartItem"

const Cart = props => {
    const [checkOutFormIsShown, setCheckOutFormIsShown] = useState(false)

    const cartCtx = useContext(CartContext)

    const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id)
    }

    const cartItemAddHandler = item => {
        cartCtx.addItem({ ...item, amount: 1 })
    }

    const showCheckOutFormHandler = () => {
        setCheckOutFormIsShown(true)
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
        <Modal onHideCart={checkOutFormIsShown ? null : props.onHideCart}>
            <div>
                {cartItems}
                <TotalAmountWrapper>
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </TotalAmountWrapper>
                {checkOutFormIsShown ? <CheckOutForm onCancel={props.onHideCart} /> :
                    <ButtonWrapper>
                        <CloseButton onClick={props.onHideCart}>Close</CloseButton>
                        {hasItems && <OrderButton onClick={showCheckOutFormHandler}>Order</OrderButton>}
                    </ButtonWrapper>
                }
            </div>
        </Modal>

    )
}

export default Cart