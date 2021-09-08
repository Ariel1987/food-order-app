import { Wrapper } from "./MealItem.styles"

const MealItem = items => {
    return (
        <Wrapper>
            <h3>{items.name}</h3>
            <p>{items.description}</p>
            <h5>{items.price}</h5>
        </Wrapper>
    )
} 

export default MealItem