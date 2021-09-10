import { Wrapper } from "./MealItem.styles"
import MealItemForm from "./MealItemForm/MealItemForm"
import { MealItemFormWrapper } from "./MealItemForm/MealItemForm.styles"

const MealItem = items => {
    return (
        <Wrapper>
            <div>
                <h3>{items.name}</h3>
                <p>{items.description}</p>
                <h5>{items.price}</h5>
            </div>
            <MealItemFormWrapper>
                <MealItemForm />
            </MealItemFormWrapper>
        </Wrapper>
    )
}

export default MealItem