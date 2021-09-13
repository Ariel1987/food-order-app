import { Wrapper } from "./MealItem.styles"
import MealItemForm from "./MealItemForm/MealItemForm"
import { MealItemFormWrapper } from "./MealItemForm/MealItemForm.styles"
import { useContext } from "react"
import CartContext from "../../../store/cart-context"

const MealItem = items => {
    const cartCtx = useContext(CartContext)

    const price = `$${items.price.toFixed(2)}`

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: items.id,
            name: items.name,
            amount: amount,
            price: items.price
        })
    }

    return (
        <Wrapper>
            <div>
                <h3>{items.name}</h3>
                <p>{items.description}</p>
                <h5>{price}</h5>
            </div>
            <MealItemFormWrapper>
                <MealItemForm onAddToCart={addToCartHandler} />
            </MealItemFormWrapper>
        </Wrapper>
    )
}

export default MealItem