const axios = require("axios");
const { API_KEY } = process.env;
const db = require("../db");

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

const get_fromDb = async(id)=>{
  
}

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
};
