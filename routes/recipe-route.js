const express = require("express");
const {getAllRecipe, addNewRecipe, getSingleRecipeById, deleteRecipe, updateRecipe} = require('../controllers/recipe-controller')


const router = express.Router();

router.get('/', getAllRecipe);
router.post("/", addNewRecipe);
router.get("/:id", getSingleRecipeById);
router.delete("/:id", deleteRecipe);
router.put("/:id", updateRecipe)

module.exports = router; 