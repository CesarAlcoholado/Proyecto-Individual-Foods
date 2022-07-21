import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipeDetail } from '../../actions/index.js';
import { Link } from "react-router-dom";
import "../../styleSheets/RecipeDetail.css"


export default function RecipeDetail () {
  let {id} = useParams();
  const recipe = useSelector((state) => state.recipeDetail);
  const dispatch = useDispatch();

  useEffect (()=>{
    dispatch(getRecipeDetail(id));
  }, [])

return (
  <div className="RecipeDetail">
    <Link to="/home">
      <button className="HomeButton">Home</button>
    </Link>
    {recipe ? (
      <>
        <h1>{recipe.name}</h1>
        <div className="ImageContainer">
          <img
            className="R-image"
            src={
              recipe.image
                ? recipe.image
                : "https://media.istockphoto.com/photos/culinary-background-with-spices-and-recipe-book-picture-id607299402?b=1&k=20&m=607299402&s=612x612&w=0&h=VWEfmWEwxgzIgiFrztEbq73g4t-bCnWj4G9OFPQY054="
            }
            alt="recipe"
          />
        </div>
        {recipe.dish_type ? (
          <div className="Dish">
            <h2>Dish Type: </h2>
            {recipe.dish_type.map((d) => {
              return <h2 key={d}>{d}</h2>;
            })}
          </div>
        ) : (
          <br />
        )}
        <div className="Diets">
          <h2>Diet Type: </h2>
          {recipe.diet_type
            ? recipe.diet_type.map((d) => {
                return (
                  <h2 className="Type" key={d}>
                    {d}
                  </h2>
                );
              })
            : recipe.diets?.map((d) => {
                return (
                  <h2 className="Type" key={d.name}>
                    {d.name}
                  </h2>
                );
              })}
        </div>
        <div className="Summary">
          <h3>Summary: </h3>
          <p>{recipe.summary?.replace(/<[^>]*>/g, "")}</p>
        </div>
        <div className="Healthscore">
          <h3 className="HealthContainer">
            Healthiness points: {recipe.healthscore}
          </h3>
        </div>
        <div>
          <h3>Steps: </h3>
          <ul className="Steps">
            {Array.isArray(recipe.steps) ? (
              recipe.steps.map((s) => {
                return <li key={s.number}>{s.step}</li>;
              })
            ) : (
              <li>{recipe.steps}</li>
            )}
          </ul>
        </div>
      </>
    ) : (
      <div>
        <h2>Loading...</h2>
      </div>
    )}
  </div>
);
}