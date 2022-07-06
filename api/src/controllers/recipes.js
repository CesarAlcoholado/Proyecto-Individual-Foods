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
      steps: r.analyzedInstructions[0]?.steps.map((s) => {
        return {
          number: s.number,
          step: s.step,
        };
      }),
    };
  });
  console.log('al fin perrito');
  return info;
};

module.exports = {
  getinfo,
};
