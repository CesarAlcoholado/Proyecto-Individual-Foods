import { useState } from "react";
import { useDispatch } from "react-redux";
import { addRecipe } from "../../actions/index.js";
import {useHistory} from "react-router-dom";

export default function PostRecipe(){
  const [recipe, setRecipe] = useState({});
  const dispatch = useDispatch();
  let history = useHistory();

  function onInputChange(e){
    e.preventDefault();
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value
    })
  }

  function onSubmit(e){
    e.preventDefault();
    dispatch(addRecipe(recipe));
    history.push('/')
    console.log(recipe);

  }


  return (
    <form onSubmit={onSubmit}>
      <label>Nombre: </label>
      <input onChange={onInputChange} name="name" type="text" value={recipe.name} />
      <label>Resumen del plato: </label>
      <input onChange={onInputChange} name="summary" type="text" value={recipe.summary} />
      <label>Health Score</label>
      <input onChange={onInputChange} name="healthscore" value={recipe.healthscore} />
      <label>Pasos: </label>
      <input onChange={onInputChange} name="steps" type="text" value={recipe.steps} />
      <label>Seleccionar tipo de dieta</label>
      <input onChange={onInputChange} name="dietTypes" type="text" value={recipe.dietTypes} />
      <input type="submit" />
    </form>
  );
}