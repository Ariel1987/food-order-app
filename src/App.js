import { Wrapper, MealsSummaryWrapper, MealsListWrapper } from "./App.styles";
import Header from "./components/Header/Header";
import MealsList from "./components/Meals/MealsList/MealsList";
import MealsSummary from "./components/Meals/MealsSummary/MealsSummary";
import { DUMMY_MEALS } from "./components/Meals/MealsList/dummy-meals"


function App() {
  return (
    <Wrapper>
      <Header />
      <MealsSummaryWrapper>
        <MealsSummary />
      </MealsSummaryWrapper>
      <MealsListWrapper>
        <MealsList items={DUMMY_MEALS} />
      </MealsListWrapper>
    </Wrapper>
  );
}

export default App;
