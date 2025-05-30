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
                message : "This recipe cannot be found in the database, try another ID"

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

const deleteRecipe = async(req, res)=>{
    try {
        const getCurrentRecipe = req.params.id;
        const deletedBook = await Recipe.findByIdAndDelete(getCurrentRecipe)

        if(!deletedBook){
            res.status(404).json({
                success : false,
                message : "Recipe with this ID does not exist"
            })
        }else{
            res.status(200).json({
                success : true,
                message : "Book deleted successfully"
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

const updateRecipe = async(req, res)=>{
    try {
        const updateRecipeFormData = req.body;
        const getCurrentRecipeId = req.params.id;

        const updatedRecipe = await Recipe.findByIdAndUpdate(
            getCurrentRecipeId,
            updateRecipeFormData,
            {new: true}
        );
        if(!updatedRecipe){
            return res.status(404).json({
                success: false,
                message: "Recipe with this ID cannot be found"
            });
        }else{
            res.status(200).json({
                success : true,
                message : "Recipe updated successfully",
                data : updateRecipe
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
    addNewRecipe, getAllRecipe, getSingleRecipeById, deleteRecipe, updateRecipe
}