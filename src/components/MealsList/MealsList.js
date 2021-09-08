import MealItem from "../MealItem/MealItem"

const MealsList = items => {
    return (
        <ul>
            {items.items.map((item) => (
                <MealItem 
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