import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages';
import AddDrinkPage from './pages/AddDrink';
import CoffeePage from './pages/Coffee';
import CocktailPage from './pages/Cocktail';
import ShakesPage from './pages/Shakes';
import MocktailsPage from './pages/Mocktails';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path='/AddDrink' component={AddDrinkPage} exact />
        <Route path='/Coffee' component={CoffeePage} exact />
        <Route path='/Cocktail' component={CocktailPage} exact />
        <Route path='/Shakes' component={ShakesPage} exact />
        <Route path='/Mocktails' component={MocktailsPage} exact />
      </Switch>
    </Router>


  );
}

export default App;
