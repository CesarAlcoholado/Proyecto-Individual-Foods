import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getAllRecipes } from "../../actions/index.js";
import RecipeCard from '../Recipe Card/RecipeCard.js';

export default function Recipes(){
  let recipes = useSelector((state) => state.recipesLoaded);
  let dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllRecipes());
  }, [])
  console.log(recipes);
  return <div>
      {recipes.map(r=> {
        return <RecipeCard name={r.name} image={r.image} id={r.id}/>
      })}
    </div>
}