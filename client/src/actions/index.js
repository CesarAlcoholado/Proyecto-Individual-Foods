import axios from 'axios';
export const GET_RECIPE_DETAIL = "GET_RECIPE_DETAIL";
export const GET_RECIPES = "GET_RECIPES";
export const TYPE_FILTER = "TYPE_FILTER";

export function getRecipeDetail(recipeId) {
  return async function (dispatch) {
    try {
      var respuesta = await axios.get(`https://localhost:3001/recipes/${recipeId}`)
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
      var respuesta = axios.post(`https://localhost:3001/recipe`, payload);
      return respuesta;
    } catch (error) {
      console.log(error);
    }
    
  };
}

export function getRecipes(name) {
  return async function (dispatch) {
    try {
      var respuesta = await axios.get(`http://localhost:3001/recipes?${name}`);
        return  dispatch({ type: "GET_RECIPES", payload: respuesta.data });
    }catch (error) {
      console.log(error)      
    }
  };
}

export function TypeFiltered (payload) {//tipo de dieta por el cual voy a filtrar
    return {
        type: "TYPE_FILTER",
        payload
    }
};