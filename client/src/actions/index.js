import axios from 'axios';
export const GET_RECIPE_DETAIL = "GET_RECIPE_DETAIL";
export const GET_RECIPES = "GET_RECIPES";
export const TYPE_FILTER = "TYPE_FILTER";
export const SORT = "SORT";

export function getRecipeDetail(recipeId) {
  return async function (dispatch) {
    try {
      var respuesta = await axios.get(`http://localhost:3001/recipes/${recipeId}`)
        return dispatch({ type: "GET_RECIPE_DETAIL", payload: respuesta.data });
        }
       catch (error) {
        console.log(error)
    }
  };
}

export function addRecipe(payload) {
  return async function (){
    try {
      var respuesta = await axios.post(`http://localhost:3001/recipe`, payload);
      return respuesta;
    } catch (error) {
      console.log(error);
    }
    
  };
}

export function getAllRecipes() {
  return async function (dispatch) {
    try {
      var respuesta = await axios.get(
        `http://localhost:3001/recipes`
      );
      return dispatch({ type: "GET_RECIPES", payload: respuesta.data });
    } catch (error) {
      console.log(error);
    }
  };
}


export function getRecipes(name) {
  return async function (dispatch) {
    try {
      var respuesta = await axios.get(`http://localhost:3001/recipes?name=${name}`);
        return  dispatch({ type: "GET_RECIPES", payload: respuesta.data });
    }catch (error) {
      console.log(error)      
    }
  };
}

export function sort (order){ //ascendente o descendente
  return{
    type: "SORT",
    payload: order
  }
}

export function typeFilter(filter) {
  //ascendente o descendente
  return {
    type: "TYPE_FILTER",
    payload: filter,
  };
}