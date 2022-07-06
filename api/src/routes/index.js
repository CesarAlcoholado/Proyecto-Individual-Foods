const { Router } = require('express');
// Importar todos los routers;
const recipesRouter = require('./recipes.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/recipes', recipesRouter);


module.exports = router;
