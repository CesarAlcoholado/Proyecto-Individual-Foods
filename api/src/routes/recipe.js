const { Router } = require("express");
const router = Router();
const {Recipe, Diet} = require('../db')


//!terminado
router.post('/', async (req,res,next)=>{
  const {name, summary, healthscore, steps, diet_type} = req.body;
  try {
    if(!name || !summary){
      res.status(400).send("Falta enviar datos obligatorios")
    }
    else{const recipe = await Recipe.create({
      name,
      summary,
      healthscore: parseInt(healthscore),
      steps,
    });
    const dataTypes = await Diet.findAll({
      where: {
        name: diet_type
        },
      });
    const typeId = dataTypes?.map((d) => d.dataValues.id);
    recipe.addDiet(typeId);
    res.status(201).send(recipe)}
  } catch (error) {
    // res.status(400).send("Error en la creacion de la receta")
    next(error);
  
  }
})

module.exports = router;