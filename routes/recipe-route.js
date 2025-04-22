const express = require("express");
const {getAllRecipe, addNewRecipe} = require('../controllers/recipe-controller')


const router = express.Router();

router.get('/get', getAllRecipe);
router.post("/add", addNewRecipe)

module.exports = router; 