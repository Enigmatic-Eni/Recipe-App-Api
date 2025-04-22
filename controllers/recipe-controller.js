const Recipe = require('../models/recipe');

const getAllRecipe = async(req, res)=>{
    try {
        const allRecipe = await Recipe.find({})
        if(allRecipe?.length > 0){
            res.status(200).json({
                success : true,
                message : "List of recipes fetched successfully",
                data : allRecipe
            })
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success : false,
            message : "Something went wrong, please try again"
        })
        
    }
}
const getSingleRecipeById = async(req, res)=>{
    try {
        const getCurrentRecipeById = req.params.id;
        const CurrentRecipe = await Recipe.findById(getCurrentRecipeById);
        if(!CurrentRecipe){
            res.status(404).json({
                success : false,
                message : "This recipe cannot be found in the database, try another database"

            })
        }else{
            res.status(200).json({
                success : true,
                data : CurrentRecipe
            })
        }
        
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message : "Something went wrong, please try again"
        })
    }
}

const addNewRecipe = async(req, res)=>{
    try{
        const newRecipeFormData = req.body;
        const newlyCreatedRecipe = await Recipe.create(newRecipeFormData);
        if(newRecipeFormData){
            res.status(200).json({
                success : true,
                message : "Recipe added successfully",
                data : newlyCreatedRecipe
            })
            

        }
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message : "Something went wrong, please try again"
        })
    }
}

module.exports = {
    addNewRecipe, getAllRecipe, getSingleRecipeById,
}