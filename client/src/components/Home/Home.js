import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getRecipes } from "../../actions/index.js";

export default function Recipes(){
  let recipes = useSelector((state) => state.recipesLoaded);
  let dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getRecipes());
  }, [])
  console.log(recipes);
  return <div>Soy recipes</div>
}