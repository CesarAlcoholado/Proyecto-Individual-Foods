const axios = require("axios");
const { API_KEY } = process.env;
const db = require("../db");
const { Diet, Recipe } = require("../db");

const getinfo = async () => {
  const apiResponse = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?&apiKey=${process.env.API_KEY}&addRecipeInformation=true&number=10`
  );
  const info = await apiResponse.data.results.map((r) => {
    return {
      name: r.title,
      image: r.image,
      diet_type: r.diets,
      healthScore: r.healthScore,
      dish_type: r.dishTypes,
      summary: r.summary,
      steps: r.analyzedInstructions[0]?.steps.map((s) => {
        return {
          number: s.number,
          step: s.step,
        };
      }),
      id: r.id
    };
  });
  return info;
};

//!creado get_namesfromDb

const get_namesfromDb = async () => {
  return await Recipe.findAll({
    include: {
      model: Diet,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const get_fromDb = async(id)=>{
  const results = await Recipe.findbyPk(id);
  return results;
}

const get_allInfo = async () => {
  const recipes = await getinfo(); //*traigo de la api
  const recipes_db = await get_namesfromDb(); //*traigo de la DB
  const allInfo = recipes.concat(recipes_db); //*junto toda la info

  return allInfo;
};

const get_byId = async (id)=>{
  const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?&apiKey=${process.env.API_KEY}`
  );
  
  let recipe_byId = {
    image: response.data.image,
    name: response.data.title,
    dish_type: response.data.dishTypes,
    diet_type: response.data.diets,
    summary: response.data.summary,
    healthScore: response.data.healthScore,
    steps: response.data.analyzedInstructions[0]?.steps,
  };
  
return recipe_byId
}



module.exports = {
  getinfo,
  get_byId,
  get_fromDb,
  get_namesfromDb,
  get_allInfo
};
