const express = require("express");
const {getAllRecipe, addNewRecipe, getSingleRecipeById} = require('../controllers/recipe-controller')


const router = express.Router();

router.get('/get', getAllRecipe);
router.post("/add", addNewRecipe);
router.get("/get/:id", getSingleRecipeById);

module.exports = router; 