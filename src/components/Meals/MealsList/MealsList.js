import MealItem from "../MealItem/MealItem"

const MealsList = items => {
    return (
        <ul>
            {items.items.map((item) => (
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

export default MealsList