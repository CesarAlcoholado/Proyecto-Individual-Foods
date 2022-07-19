import './App.css';
import { Route } from "react-router-dom";
import Home from './components/Home/Home';
import RecipeDetail from './components/Recipe Detail/RecipeDetail';
import PostRecipe from './components/Post Recipe/PostRecipe';
import Landing from './components/Landing Page/Landing';

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={()=> <Landing/>} />
      <Route exact path="/home" render={() => <Home />} />
      <Route exact path="/post" render={() => <PostRecipe />} />
      <Route exact path="/recipes/:id" render={() => <RecipeDetail />} />
    </div>
  );
}

export default App;
