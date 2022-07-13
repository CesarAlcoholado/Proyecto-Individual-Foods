import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipeDetail } from '../../actions/index.js';


export default function RecipeDetail () {
  let {id} = useParams();
  const recipe = useSelector((state) => state.recipeDetail);
  const dispatch = useDispatch();

  useEffect (()=>{
    dispatch(getRecipeDetail(id));
  }, [])

return (
  <div>
    {recipe ? (
      <>
        <h3>{recipe.name}</h3>
        <img src={recipe.image} alt="recipe" />
      </>
    ) : (
      <div>
        <h2>Loading...</h2>
      </div>
    )}
  </div>
);
}