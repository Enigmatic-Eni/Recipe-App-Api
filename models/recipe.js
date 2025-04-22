const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    name:{
        type: String,
        required : [true, "Recipe name is required"],
        trim : true,
        maxLength: [100, "Recipe name cannot be more than 100 characters",]
    },
    ingredients:{
        type : [String],
        required : [true, "Cooking ingredients are required"],
    },
    steps:{
        type: [String],
        required : [true, "Cooking steps are required"],
    },
    cookTime:{
        type: Number,
        required: [true, 'Cooking time is required'],
    },
    servings:{
        type : Number,
        required : [true, "Number of servings is required"],
        min: [1, "It should be at least one serving"]
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model("Recipe", RecipeSchema);