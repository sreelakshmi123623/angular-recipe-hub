const recipes = require("../Model/recipeModel");

exports.getAllRecipeController=async(req,res)=>{
    console.log("inside get all recipe controller");
    try{
        const allRecipes=await recipes.find()
        res.status(200).json(allRecipes)
    }catch(err){
        res.status(404).json(err)
    }
}

// getARecipeController
exports.getARecipeController=async(req,res)=>{
    console.log("inside get a recipe controller");
    const {id}=req.params
    try{
        const recipeDetails=await recipes.findById({_id:id})
        res.status(200).json(recipeDetails)

    }catch(err){
        res.status(404).json(err)
    }    
}

// getRelatedRecipeController
exports.getRelatedRecipeController=async(req,res)=>{
    console.log("Inside get related recipe controlller");
    const cuisine=req.query.cuisine
    try{
        const relatedRecipes=await recipes.find({cuisine})
        res.status(200).json(relatedRecipes)

    }catch(err){
        res.status(404).json(err)
    }
    
}


// deleteRecipeController
exports.deleteRecipeController = async(req,res)=>{
    console.log("inside delete recipe controller");

    const {id} = req.params

    try{
        await recipes.findByIdAndDelete({_id:id})
        res.status(200).json("Recipe Deleted Successfully")
    }
    catch(err){
        res.status(404).json(err)
    }
}