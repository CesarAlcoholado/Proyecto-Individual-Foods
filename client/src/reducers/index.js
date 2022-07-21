import { GET_RECIPE_DETAIL, GET_RECIPES, TYPE_FILTER, SORT, SORT_BY_SCORE, GET_DIETS } from "../actions/index";
const initialState = {
  recipeDetail:{},
  recipesLoaded: [],
  diets:[]
}

function rootReducer(state = initialState, action){

  switch (action.type) {
    case GET_RECIPE_DETAIL:
      return {
        ...state,
        recipeDetail: action.payload,
      };
    case GET_RECIPES:
      return {
        ...state,
        recipesLoaded: action.payload,
      };
    case GET_DIETS:
      return{
        ...state,
        diets: action.payload,
      };
    case TYPE_FILTER:
      let recipes = [...state.recipesLoaded];
      var resultados;
      if (action.payload === "VEGETARIAN") {
        resultados = recipes.filter((r) => r.vegetarian === true);
      } else {
        resultados = recipes.filter((r) =>
          r.diet_type.includes(action.payload.toLowerCase())
        );
      }
      return {
        ...state,
        recipesLoaded: resultados,
      };
    case SORT:
      let orderedRecipes = [...state.recipesLoaded];
      orderedRecipes = orderedRecipes.sort((a, b) => {
        if (a.name < b.name) {
          return action.payload === "ASCENDENTE" ? -1 : 1;
        }
        if (a.name > b.name) {
          return action.payload === "ASCENDENTE" ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        recipesLoaded: orderedRecipes,
      };
    case SORT_BY_SCORE:
      console.log("by score perro")
      let orderedbyhealthscore = [...state.recipesLoaded];
      orderedbyhealthscore = orderedbyhealthscore.sort((a, b) => {
        if (a.healthScore < b.healthScore) {
          return action.payload === "ASCENDENTE" ? -1 : 1;
        }
        if (a.healthScore > b.healthScore) {
          return action.payload === "ASCENDENTE" ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        recipesLoaded: orderedbyhealthscore,
      };
    default:
      return state;
  }
}

export default rootReducer;