import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRecipe, getDiets } from "../../actions/index.js";
import {useHistory} from "react-router-dom";
import "../../styleSheets/PostRecipe.css";

function validate(recipe) {
  let errors = {};
  if (!recipe.name) {
    errors.name = "Recipe name required";
  }
  if(!recipe.summary){
    errors.summary = "Summary required";
  }
  if(!recipe.healthscore){
    errors.healthscore = "Healthscore required";
  }
  if(!recipe.steps){
    errors.steps = "Steps required";
  }
  return errors;
}
export default function PostRecipe(){
  const diets = useSelector((state)=> state.diets);
  const dispatch = useDispatch();
  let history = useHistory();
  const [errors, setErrors] = useState({});
  const [recipe, setRecipe] = useState({
    name: '',
    summary: '',
    healthscore: '',
    steps: '',
    diet_type: [],
  });

  useEffect(() => {
    dispatch(getDiets());
  }, []);

  function handleSelect(e) {
    e.preventDefault();
    setRecipe({
      ...recipe,
      diet_type: [...recipe.diet_type, e.target.value],
    });
  }


  function onInputChange(e) {
    e.preventDefault();
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...recipe,
        [e.target.name]: e.target.value,
      })
    );
  }

  function onSubmit(e){
    e.preventDefault();
    dispatch(addRecipe(recipe));
    history.push('/home')
    alert("Receta creada con exito");
    setRecipe({
      name: "",
      summary: "",
      healthscore: '',
      steps: [],
      diet_type: [],
    });
  }


  return (
    <div className="Post">
      <form onSubmit={onSubmit}>
        <div className="Form">
          <div className="Data">
            <div className="Name">
              <label className="LabelMessage">Nombre: </label>
              <input onChange={onInputChange} name="name" type="text" value={recipe.name} required placeholder="Insert name"/>
              {errors.name && <p className="error"> {errors.name}</p>}
            </div>

            <label className="LabelMessage">Resumen del plato: </label>
            <input onChange={onInputChange} name="summary" type="text" value={recipe.summary} placeholder="Insert summary"/>
            {errors.summary && <p className="error"> {errors.summary}</p>}

            <label className="LabelMessage">Health Score</label>
            <input onChange={onInputChange} name="healthscore" value={recipe.healthscore} placeholder="Insert healthscore"/>
            {errors.healthscore && <p className="error"> {errors.healthscore}</p>}

            <label className="LabelMessage">Pasos: </label>
            <input onChange={onInputChange} name="steps" type="text" value={recipe.steps} placeholder="Insert steps" />
            {errors.steps && <p className="error"> {errors.steps}</p>}

            <div className="Select">
              <select onChange={handleSelect}>
                {diets.map((d) => (
                  <option value={d.name}>{d.name}</option>
                ))}{" "}
              </select>
            </div>
            <p>
              <ul className="Diets">
                <li>{recipe.diet_type.map((d) => d + " , ")}</li>
              </ul>
            </p>

            <input className="Button" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
}