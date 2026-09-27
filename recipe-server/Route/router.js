const express=require('express')
const userContoller=require('../Controller/usersContoller')
const recipeContoller=require('../Controller/recipeController')
const testiMonyController=require('../Controller/testymonyController')
const jwtMiddileware=require('../Middileware/jwtMiddileWare')
const saveRecipeController=require("../Controller/saveRecipeController")
const downloadRecipeController=require("../Controller/downloadRecipeController")


const router =new express.Router()

// register
router.post("/register",userContoller.registerController)
// login
router.post("/login",userContoller.loginController)
// getAllRecipes
router.get("/all-recipe",recipeContoller.getAllRecipeController)
// addTestimony
router.post("/testimonials/add",testiMonyController.addTestimonals)
// get a single recipe
router.get("/view/:id",jwtMiddileware,recipeContoller.getARecipeController)
// relatedrecipe
router.get("/related-recipes",jwtMiddileware,recipeContoller.getRelatedRecipeController)
// saveRecipe
router.post("/save-recipe/:id",jwtMiddileware,saveRecipeController.addSavedRecipes)
// getSaveRecipe
router.get('/save-recipe',jwtMiddileware,saveRecipeController.getUserSavedRecipeController)
// removeSavedRecipe
router.delete('/save-recipe/:id/remove',jwtMiddileware,saveRecipeController.removeSavedRecipe)
// dowmloadRecipe
router.post('/recipe/:id/download',jwtMiddileware,downloadRecipeController.addToDownloadController)
// delete recipe
router.delete('/recipe/:id/delete',jwtMiddileware,recipeContoller.deleteRecipeController)
// getAllUsers
router.get("/all-users",jwtMiddileware,userContoller.getAllUsers)
// alldownloads
router.get("/all-downloads",jwtMiddileware,downloadRecipeController.getAllDownloads)

// getAllFeedback
router.get("/all-feedbacks",jwtMiddileware,testiMonyController.getAllFeedbacks)
// updateStatus
router.get("/request/:id/update",jwtMiddileware,testiMonyController.updateFeedbacksController)
// getApprovedFeedback
router.get("/approved-feedback",testiMonyController.getAllApprovedFeedbacks)

module.exports=router
