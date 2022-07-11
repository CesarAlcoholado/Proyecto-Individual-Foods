const { Router } = require("express");
const router = Router();
const { Diet } = require("../db");
const {getAllTypes} = require ('../controllers/diets.js')


//!modularizado
router.get('/', async (req,res)=>{
  try {
    await getAllTypes();
    const savedDiets = await Diet.findAll();
    res.status(201).send(savedDiets);
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;