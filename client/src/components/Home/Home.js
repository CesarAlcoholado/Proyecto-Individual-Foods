import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getAllRecipes } from "../../actions/index.js";
import { Paginacion } from "../Paginacion/Paginacion.js";
import RecipeCard from '../Recipe Card/RecipeCard.js';
import Nav from "../Nav/Nav.js";
import Order from "../Order/Order";
import "../../styleSheets/Home.css"


export default function Recipes(){
  let recipes = useSelector((state) => state.recipesLoaded);
  let dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(9);
  const max = Math.ceil(recipes.length / perPage);


  useEffect(()=>{
    dispatch(getAllRecipes());
  }, [])

  console.log(recipes);
  return (
    <div className="Home">
      <div className="Nav">
      <Nav/>
      </div>
      <Order />
      <div className="recipes">
      {recipes
        .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
        .map((r) => {
          return (
            <div className="mapedRecipes">
              <RecipeCard
                name={r.name}
                image={
                  r.image
                    ? r.image
                    : "https://media.istockphoto.com/photos/culinary-background-with-spices-and-recipe-book-picture-id607299402?b=1&k=20&m=607299402&s=612x612&w=0&h=VWEfmWEwxgzIgiFrztEbq73g4t-bCnWj4G9OFPQY054="
                }
                id={r.id}
                diet_type={
                  r.diet_type ? r.diet_type : r.diets.map((d) => d.name)
                }
              />
            </div>
          );
        })}
      </div>
      <div className="Paginado">
      <Paginacion page={page} setPage={setPage} max={max} />
      </div>
    </div>
  );
}