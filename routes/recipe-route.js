const express = require("express");
const {getAllRecipe, addNewRecipe, getSingleRecipeById, deleteRecipe, updateRecipe} = require('../controllers/recipe-controller')


const router = express.Router();

router.get('/get', getAllRecipe);
router.post("/add", addNewRecipe);
router.get("/get/:id", getSingleRecipeById);
router.delete("/delete/:id", deleteRecipe);
router.put("/update/:id", updateRecipe)

module.exports = router; 