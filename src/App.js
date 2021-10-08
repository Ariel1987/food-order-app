import { Wrapper, MealsSummaryWrapper, MealsListWrapper } from "./App.styles";
import Header from "./components/Header/Header";
import MealsList from "./components/Meals/MealsList/MealsList";
import MealsSummary from "./components/Meals/MealsSummary/MealsSummary";
import Cart from "./components/Cart/Cart";
import { useState, useEffect } from "react";
import useHttp from "./hooks/use-http";
import CartProvider from "./store/CartProvider";


function App() {
  const [cartIsShown, setCartIsShonw] = useState(false)
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

      fetchMeals (
          { url: 'https://food-order-app-db98e-default-rtdb.firebaseio.com/meals.json' },
          transformMeals
      )
  }, [fetchMeals])


  const showCartHandler = () => {
    setCartIsShonw(true)
  }

  const hideCartHandler = () => {
    setCartIsShonw(false)
  }

  return (
    <CartProvider>
      <Wrapper>
        {cartIsShown && <Cart onHideCart={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <MealsSummaryWrapper>
          <MealsSummary />
        </MealsSummaryWrapper>
        <MealsListWrapper>
          <MealsList 
            items={meals} 
            loading={isLoading} 
            error={error} 
            onFetch={fetchMeals} 
          />
        </MealsListWrapper>
      </Wrapper>
    </CartProvider>
  );
}

export default App;
