const { Router } = require('express');
// Importar todos los routers;
const recipesRouter = require('./recipes.js');
const recipeRouter = require('./recipe.js');
const dietsRouter = require('./diets.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/recipes', recipesRouter);
router.use('/recipe', recipeRouter);
router.use('/diets', dietsRouter);

module.exports = router;
