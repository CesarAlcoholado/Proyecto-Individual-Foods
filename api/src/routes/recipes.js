const { Router } = require ('express');
const router = Router();
const {get_byId, get_fromDb, get_allInfo} = require("../controllers/recipes");


//!terminado
router.get('/', async (req,res, next)=>{
  const {name} = req.query; //!validar tolowercase en el front
  try {
    const all_recipes = await get_allInfo();

    if(name){
    const recipes_name = all_recipes.filter((r) =>r.name.toLowerCase().includes(name));
    if(recipes_name.length){
    return res.status(201).send(recipes_name)
    }
    return res.status(404).send('recipe not found')
    }else{
    res.status(201).send(all_recipes);
    }
  } catch (error) {
      next(error);
  }
})


//!terminar (if-else)
router.get('/:id', async (req,res)=>{
  const {id} = req.params;
  
  try {
    if(id){

      const recipe = await get_byId(id);
      const recipeDb = await get_fromDb(id);
      if(!recipe || !recipeDb) res.status(404).send("recipe not found");
      res.status(201).send(recipe)

    }
    res.status(400).send("Se debe ingresar id")
  } catch (error) {
    res.status(400).send("search by id error")
  }
})

module.exports = router;