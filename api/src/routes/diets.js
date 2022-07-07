const { Router } = require("express");
const router = Router();
const { Diet } = require("../db");
const diet_types = ["Gluten Free","Ketogenic","Vegetarian","Lacto-Vegetarian","Ovo-Vegetarian","Vegan","Pescetarian","Paleo","Primal","Low FODMAP","Whole30"];

router.get('/', async (req,res)=>{
  try {
    diet_types.forEach(d=>{
      Diet.findOrCreate({
        where: {
          name: d
        }
      })
    });
    const savedDiets = await Diet.findAll();
    res.status(201).send(savedDiets);
    console.log(savedDiets);
  } catch (error) {
    res.status(400).send("error al buscar tipos de dieta")
  }
});

module.exports = router;