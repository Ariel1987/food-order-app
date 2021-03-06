import { Wrapper, MealsSummaryWrapper, MealsListWrapper } from "./App.styles";
import Header from "./components/Header/Header";
import MealsList from "./components/Meals/MealsList/MealsList";
import MealsSummary from "./components/Meals/MealsSummary/MealsSummary";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";


function App() {
  const [cartIsShown, setCartIsShonw] = useState(false)

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
          <MealsList />
        </MealsListWrapper>
      </Wrapper>
    </CartProvider>
  );
}

export default App;
