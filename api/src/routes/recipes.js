const { Router } = require ('express');
const router = Router();
const {get_byId, get_fromDb, get_allInfo} = require("../controllers/recipes");


//!terminado
router.get('/', async (req,res, next)=>{
  const {name} = req.query;
  try {
    const all_recipes = await get_allInfo();

    if(name){
    const recipes_name = all_recipes.filter((r) =>r.name.toLowerCase().includes(name.toLowerCase()));
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


//!terminado
router.get('/:id', async (req,res)=>{
  const {id} = req.params;
  
  try {
    if (/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(id)) {
      const recipeDb = await get_fromDb(id);
      res.status(201).send(recipeDb);
    } else {
        const recipeApi = await get_byId(id);
        res.status(201).send(recipeApi);
      }
    }
  catch (error) {
    next(error)
  }
})

module.exports = router;