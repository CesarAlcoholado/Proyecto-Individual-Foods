import { GET_RECIPE_DETAIL, GET_RECIPES, TYPE_FILTER } from "../actions/index";
const initialState = {
  recipeDetail:{},
  recipesLoaded: [],
  typeFiltered: []
}

function rootReducer(state = initialState, action){

  switch (action.type){
    case GET_RECIPE_DETAIL: 
    return{
      ...state,
      recipeDetail: action.payload, 
    }
    case GET_RECIPES:
      return {
        ...state,
        recipesLoaded: state.recipesLoaded.concat(action.payload),
      }
    case TYPE_FILTER:
      let recipes = state.recipesLoaded
      let resultados = recipes.filter(r => r.dietTypes.filter(d=> d.toLowerCase() === action.payload.toLowerCase()))
      return {
        ...state,
        typeFiltered: resultados
      };
    default:
      return state;
  }
}

export default rootReducer;