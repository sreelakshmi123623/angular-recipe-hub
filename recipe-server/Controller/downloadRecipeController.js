const downloads=require('../Model/downloadRecipeModel')

exports.addToDownloadController=async(req,res)=>{

    console.log("inside add to download controller");
    
    const {id}=req.params
    const {name,cuisine}=req.body
    try{
        const existingRecipe= await downloads.findOne({recipeId:id})
        if(existingRecipe){
            existingRecipe.count+=1
            await existingRecipe.save()
            res.status(200).json(existingRecipe)
        }else{
            const newRecipe=new downloads({
                recipeId:id,recipeName:name,cuisine,count:1
            })
            await newRecipe.save()
            res.status(200).json(newRecipe)
        }
    }catch(err){
         res.status(401).json(err)
    }
}

// getARecipeController
exports.getAllDownloads=async(req,res)=>{
    console.log("inside get all download controller");
    try{
        const allDownloads=await downloads.find()
        res.status(200).json(allDownloads)
    }catch(err){
        res.status(404).json(err)
    }    
}