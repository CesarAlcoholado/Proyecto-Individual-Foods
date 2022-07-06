const { Router } = require ('express');
const router = Router();
const { getinfo } = require("../controllers/recipes");

router.get('/', async (req,res, next)=>{
  const {name} = req.query; //!validar tolowercase en el front
  try {
    const recipes = await getinfo();
    const recipes_name = await recipes.filter(r => r.name.toLowerCase().includes(name));
    if(!recipes_name) res.status(404).send("Recipes not found")
    res.status(201).send(recipes_name)
  } catch (error) {
      res.status(400).send(error);
  }
})

module.exports = router;