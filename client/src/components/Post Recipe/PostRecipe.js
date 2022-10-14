import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRecipe, getDiets } from "../../actions/index.js";
import { useHistory, Link } from "react-router-dom";
import icon from "../../media/create.png"
import styles from "../../styleSheets/PostRecipe.module.css";

function validate(recipe) {
  let errors = {};
  if (!recipe.name) {
    errors.name = "Recipe name required";
  }
  if (!recipe.summary) {
    errors.summary = "Summary required";
  }
  if (!recipe.healthscore) {
    errors.healthscore = "Healthscore required";
  }
  if (!recipe.steps) {
    errors.steps = "Steps required";
  }
  if (!recipe.diet_type.length){
    errors.diet_type = "Diet types required"
  }
  return errors;
}
export default function PostRecipe() {
  const diets = useSelector((state) => state.diets);
  const dispatch = useDispatch();
  let history = useHistory();
  const [errors, setErrors] = useState({
    name: "",
    summary: "",
    healthscore: "",
    steps: "",
    diet_type: [],
  });
  const [recipe, setRecipe] = useState({
    name: "",
    summary: "",
    healthscore: "",
    steps: "",
    diet_type: [],
  });

  useEffect(() => {
    dispatch(getDiets());
  }, []);

  function handleSelect(e) {
    e.preventDefault();
    if (recipe.diet_type.includes(e.target.value)) {
      return alert("tipos repetidos!!");
    } else {
      setRecipe({
        ...recipe,
        diet_type: [...recipe.diet_type, e.target.value],
      });
      setErrors(
        validate({
          ...recipe,
          diet_type: [...recipe.diet_type, e.target.value],
        })
      );
    }
  }

  function onInputChange(e) {
    e.preventDefault();
    const pattern = new RegExp("^[A-Z]", "i");
    if (e.target.name === "healthscore") {
      if (e.target.value < 0 || e.target.value > 100) {
        alert("healthscore debe ser mayor a 0 y menor a 100");
        e.target.value = 0;
      }
    }
    if (
      e.target.name === "name" ||
      e.target.name === "summary" ||
      e.target.name === "steps"
    ) {
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

  function onSubmit(e) {
    e.preventDefault();
    if (
      errors.name === "" ||
      errors.summary === "" ||
      errors.healthscore === "" ||
      errors.steps === "" ||
      (!errors.diet_type.length)
    )
      return alert("Datos insuficientes");
    dispatch(addRecipe(recipe));
    history.push("/home");
    alert("Receta creada con exito");
    setRecipe({
      name: "",
      summary: "",
      healthscore: "",
      steps: [],
      diet_type: [],
    });
  }

  return (
    <div className={styles.Post}>
      <form onSubmit={onSubmit}>
        <div className={styles.Form}>
          <div className={styles.Data}>
            <img className={styles.icon} src={icon} alt="Create icon"/>
            <label className={styles.LabelMessage}>Nombre: </label>
            <input
              className={styles.input}
              onChange={onInputChange}
              name="name"
              type="text"
              value={recipe.name}
              placeholder="Insert name"
            />
            {errors.name && <p className={styles.error}> {errors.name}</p>}

            <label className={styles.LabelMessage}>Resumen del plato: </label>
            <input
              className={styles.input}
              onChange={onInputChange}
              name="summary"
              type="text"
              value={recipe.summary}
              placeholder="Insert summary"
            />
            {errors.summary && (
              <p className={styles.error}> {errors.summary}</p>
            )}

            <label className={styles.LabelMessage}>Health Score</label>
            <input
              className={styles.input}
              onChange={onInputChange}
              name="healthscore"
              value={recipe.healthscore}
              placeholder="Insert healthscore"
            />
            {errors.healthscore && (
              <p className={styles.error}> {errors.healthscore}</p>
            )}

            <label className={styles.LabelMessage}>Pasos: </label>
            <input
              className={styles.input}
              onChange={onInputChange}
              name="steps"
              type="text"
              value={recipe.steps}
              placeholder="Insert steps"
            />
            {errors.steps && <p className={styles.error}> {errors.steps}</p>}
            <h4 className={styles.LabelMessage}>Seleccionar tipo de dieta</h4>
            <div className={styles.SelectContainer}>
              <select className={styles.Select} onChange={handleSelect}>
                {diets.map((d) => (
                  <option value={d.name}>{d.name}</option>
                ))}{" "}
              </select>
            </div>
            {errors.diet_type && <p>{errors.diet_type}</p>}
            <p>
              <ul className={styles.Diets}>
                <li>{recipe.diet_type.map((d) => d + " , ")}</li>
              </ul>
            </p>

            <input className={styles.Button} type="submit" />
            <Link to="/home">
              <button className={styles.HomeButton}>Home</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
