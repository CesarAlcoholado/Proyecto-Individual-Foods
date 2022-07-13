import './App.css';
import { Route } from "react-router-dom";
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import SearchBar from './components/SearchBar/SearchBar';
import Order from './components/Order/Order';
import RecipeDetail from './components/Recipe Detail/RecipeDetail';
import PostRecipe from './components/Post Recipe/PostRecipe';

function App() {
  return (
    <div className="App">
      <Nav />
      <SearchBar />
      <Order />
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/post" render={() => <PostRecipe />} />
      <Route exact path="/recipes/:id" render={() => <RecipeDetail />} />
    </div>
  );
}

export default App;
