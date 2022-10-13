import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipeDetail } from "../../actions/index.js";
import { Link } from "react-router-dom";
import styles from "../../styleSheets/RecipeDetail.module.css";

export default function RecipeDetail() {
  let { id } = useParams();
  const recipe = useSelector((state) => state.recipeDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipeDetail(id));
  }, []);

  return (
    <div className={styles.RecipeDetail}>
      {Object.keys(recipe).length ? (
        <div className={styles.recipeDiv}>
          <div className={styles.imageSummary}>
            <div className={styles.Rimage}>
              <img
                className={styles.Rimage}
                src={
                  recipe.image
                    ? recipe.image
                    : "https://media.istockphoto.com/photos/culinary-background-with-spices-and-recipe-book-picture-id607299402?b=1&k=20&m=607299402&s=612x612&w=0&h=VWEfmWEwxgzIgiFrztEbq73g4t-bCnWj4G9OFPQY054="
                }
                alt="recipe"
              />
            </div>
            <h3 className={styles.Sh3}>Summary: </h3>
            <div className={styles.Summary}>
              <p>{recipe.summary?.replace(/<[^>]*>/g, "")}</p>
            </div>
          </div>
          <div className={styles.recipeData}>
            <h1 className={styles.h1}>{recipe.name}</h1>
            {recipe.dish_type ? (
              <div className={styles.Dish}>
                <h2 className={styles.recipeh2}>Dish Type: </h2>
                {recipe.dish_type.map((d) => {
                  return (
                    <h3 className={styles.recipeh3} key={d}>
                      {d}
                    </h3>
                  );
                })}
              </div>
            ) : (
              <br />
            )}
            <div className={styles.dietsContainer}>
              <h2 className={styles.recipeh2}>Diet Type: </h2>
              <div className={styles.Diets}>
                {recipe.diet_type
                  ? recipe.diet_type.map((d) => {
                      return (
                        <h3 className={styles.recipeh3} key={d}>
                          {d}
                        </h3>
                      );
                    })
                  : recipe.diets?.map((d) => {
                      return (
                        <h3 className={styles.recipeh3} key={d.name}>
                          {d.name}
                        </h3>
                      );
                    })}
              </div>
            </div>
            <div className={styles.Healthscore}>
              <h3 className={styles.HealthContainer}>
                Healthiness points: {recipe.healthscore}
              </h3>
            </div>
            <h3>Steps: </h3>
            <div className={styles.stepsContainer}>
              <ul className={styles.Steps}>
                {Array.isArray(recipe.steps) ? (
                  recipe.steps.map((s) => {
                    return <li key={s.number}>{s.step}</li>;
                  })
                ) : (
                  <li>{recipe.steps}</li>
                )}
              </ul>
            </div>
            <Link to="/home">
              <button className={styles.HomeButton}>Home</button>
            </Link>
          </div>
        </div>
      ) : (
        <span class={styles.loader}></span>
      )}
    </div>
  );
}
