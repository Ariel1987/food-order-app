import { Wrapper, MealsSummaryWrapper, MealsListWrapper } from "./App.styles";
import Header from "./components/Header/Header";
import MealsList from "./components/MealsList/MealsList";
import MealsSummary from "./components/MealsSummary/MealsSummary";

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

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
