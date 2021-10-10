import ReactLoading from "react-loading";
import MealItem from "../MealItem/MealItem"
import { LoadingWrapper, ErrorWrapper } from "./MealsList.styles";
import { useState, useEffect } from "react";
import useHttp from "../../../hooks/use-http";

const MealsList = props => {

    const [meals, setMeals] = useState([])

    const { isLoading, error, sendRequest: fetchMeals } = useHttp()

    useEffect(() => {
        const transformMeals = mealsObj => {
            const loadedMeals = []

            for (const mealKey in mealsObj) {
                loadedMeals.push({
                    id: mealKey,
                    name: mealsObj[mealKey].name,
                    description: mealsObj[mealKey].description,
                    price: mealsObj[mealKey].price
                })
            }
            setMeals(loadedMeals)
        }

        fetchMeals(
            { url: 'https://food-order-app-db98e-default-rtdb.firebaseio.com/meals.json' },
            transformMeals
        )
    }, [fetchMeals])

    let mealsList = <h2>No meals found</h2>

    if (meals.length > 0) {
        mealsList = (
            <ul>
                {meals.map((item) => (
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

    if (error) {
        content = <ErrorWrapper>Failed to Fetch</ErrorWrapper>
    }

    if (isLoading) {
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