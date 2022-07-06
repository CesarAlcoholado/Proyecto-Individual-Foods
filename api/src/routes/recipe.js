const { Router } = require("express");
const router = Router();
const {Recipe} = require('../db')

router.post('/', async (req,res,next)=>{
  const {name, summary, healthscore, steps} = req.body;
  try {
    if(!name || !summary) res.status(400).send("Falta enviar datos obligatorios")
    const recipe = await Recipe.create({
      name,
      summary,
      healthscore,
      steps
    })
    res.status(201).send("Receta creada con exito")
  } catch (error) {
    res.status(400).send("Error en la creacion de la receta")
  }
})

module.exports = router;