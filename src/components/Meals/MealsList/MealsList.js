import ReactLoading from "react-loading";
import MealItem from "../MealItem/MealItem"
import { LoadingWrapper, ButtonWrapper } from "./MealsList.styles";

const MealsList = props => {
    let mealsList = <h2>No meals found</h2>

    if (props.items.length > 0) {
        mealsList = (
            <ul>
                {props.items.map((item) => (
                    <MealItem
                        id={item.id}
                        key={item.id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                    />
                ))}
            </ul>
        )
    }

    let content = mealsList

    if (props.error) {
        content = <ButtonWrapper onClick={props.onFetch}>Try Again</ButtonWrapper>
    }

    if (props.loading) {
        content =
            <LoadingWrapper>
                <ReactLoading type={'spin'} color={'#631d08'} />
            </LoadingWrapper>
    }

    return (
        <div>{content}</div>
    )
}

export default MealsList