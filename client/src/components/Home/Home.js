import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getAllRecipes } from "../../actions/index.js";
import { Paginacion } from "../Paginacion/Paginacion.js";
import RecipeCard from '../Recipe Card/RecipeCard.js';

export default function Recipes(){
  let recipes = useSelector((state) => state.recipesLoaded);
  let dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(9);
  const max = Math.ceil(recipes.length / perPage);


  useEffect(()=>{
    dispatch(getAllRecipes());
  }, [])
  return <div>
      {recipes.slice(
        (page - 1)*perPage,(page - 1)*perPage + perPage
      ).map(r=> {
        return <RecipeCard name={r.name} image={r.image} id={r.id}/>
      })}
      <Paginacion page={page} setPage={setPage} max={max}/>
    </div>
}