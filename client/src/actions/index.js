import axios from 'axios';
export const GET_RECIPE_DETAIL = "GET_RECIPE_DETAIL";
export const GET_RECIPES = "GET_RECIPES";
export const TYPE_FILTER = "TYPE_FILTER";
export const SORT = "SORT";
export const SORT_BY_SCORE = "SORT_BY_SCORE";
export const GET_DIETS = "GET_DIETS";

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

export function getDiets() {
  return async function (dispatch) {
    try {
      var respuesta = await axios.get(`http://localhost:3001/diets`);
      return dispatch({ type: "GET_DIETS", payload: respuesta.data });
    } catch (error) {
      console.log(error);
    }
  };
}
//localhost:3001/diets




export function sort (order){ //ascendente o descendente
  return{
    type: "SORT",
    payload: order
  }
}

export function sortByScore(order) {
  //ascendente o descendente
  return {
    type: "SORT_BY_SCORE",
    payload: order,
  };
}

export function typeFilter(filter) {
  //ascendente o descendente
  return {
    type: "TYPE_FILTER",
    payload: filter,
  };
}