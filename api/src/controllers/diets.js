const axios = require("axios");
const { API_KEY } = process.env;
const db = require("../db");
const { Diet } = require("../db");

const getAllTypes = async ()=>{
const apiResponse = await axios.get(
  `https://api.spoonacular.com/recipes/complexSearch?&apiKey=${API_KEY}&addRecipeInformation=true&number=900`
);
//arreglo con de arrays de tipos (repetidos) --> [[1,2,3],[2],[3,2],[1],[1,2,3,4]]
const mapedDiets = apiResponse.data.results.map((d) => d.diets);
const finalDiets = new Set(mapedDiets.join().split(","));
const diets = [...finalDiets].filter((d) => d !== ""); //? puede haber recipe sin tipo de dieta?
//guardarlos en la db
diets.forEach((d) => {
  Diet.findOrCreate({
    where: {
      name: d,
    },
  });
});
}

module.exports = {
  getAllTypes,
};