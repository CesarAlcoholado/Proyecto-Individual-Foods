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
  const [errors, setErrors] = useState({
    name: '',
    summary: '',
    healthscore: '',
    steps: '',
    diet_type:[]
  });
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
    if(recipe.diet_type.includes(e.target.value)){
      return alert("tipos repetidos!!")
    }else{
      setRecipe({
        ...recipe,
        diet_type: [...recipe.diet_type, e.target.value],
      })
      ;
    }
  }


  function onInputChange(e) {
    e.preventDefault();
    const pattern = new RegExp("^[A-Z]", "i");
    if(e.target.name === "healthscore"){
      if(e.target.value < 0 || e.target.value > 100){
        alert("healthscore debe ser mayor a 0 y menor a 100");
        e.target.value = 0;
      }
    }
    if (e.target.name === "name" || e.target.name === "summary" || e.target.name === "steps") {
       if (!pattern.test(e.target.value)) {
         alert("Ingrese solo letras");
         e.target.value = "";
       }
    }
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
    if(errors.name ==='' || errors.summary==='' || errors.healthscore === '' || errors.steps ==='' || (errors["diet_type"].length <= 1)) return alert("Datos insuficientes");
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
              <input onChange={onInputChange} name="name" type="text" value={recipe.name} placeholder="Insert name"/>
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