import { Wrapper, MealsSummaryWrapper, MealsListWrapper } from "./App.styles";
import Header from "./components/Header/Header";
import MealsList from "./components/Meals/MealsList/MealsList";
import MealsSummary from "./components/Meals/MealsSummary/MealsSummary";
import { DUMMY_MEALS } from "./components/Meals/MealsList/dummy-meals"
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";


function App() {
  const [cartIsShown, setCartIsShonw] = useState(false)

  const showCartHandler = event => {
    setCartIsShonw(true)
  }

  const hideCartHandler = event => {
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
          <MealsList items={DUMMY_MEALS} />
        </MealsListWrapper>
      </Wrapper>
    </CartProvider>
  );
}

export default App;
