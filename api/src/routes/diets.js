const { Router } = require("express");
const router = Router();
const { Diet } = require("../db");
const { API_KEY } = process.env;
const axios = require("axios");


//!modularizar
router.get('/', async (req,res)=>{
  try {
    const apiResponse = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?&apiKey=${API_KEY}&addRecipeInformation=true&number=900`
    );
    //arreglo con de arrays de tipos (repetidos) --> [[1,2,3],[2],[3,2],[1],[1,2,3,4]]
    const mapedDiets = apiResponse.data.results.map((d) => 
    d.diets
    );
    const finalDiets = new Set(mapedDiets.join().split(","));
    const diets = [...finalDiets].filter((d) => d !== ""); //? puede haber recipe sin tipo de dieta?
    console.log(diets);
    //guardarlos en la db
    diets.forEach((d) => {
      Diet.findOrCreate({
        where: {
          name: d,
        },
      });
    });
    const savedDiets = await Diet.findAll();
    res.status(201).send(savedDiets);
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;