const testimonials=require('../Model/testimonyModel')

// addTestimonals
exports.addTestimonals=async(req,res)=>{
    console.log("inside testimony controller");
    const{name,email,message}=req.body
    try{
        const newTestomony=new testimonials({
            name,email,message
        })
        await newTestomony.save()
        res.status(200).json(newTestomony)
    }catch(err){
        res.status(401).json(err)
    }
}


// getAllFeedbacks
exports.getAllFeedbacks=async(req,res)=>{
    console.log("Inside get all Feedbacks");
    try{
        const  allFeedbacks=await testimonials.find()
        res.status(200).json(allFeedbacks)

    }catch(err){
        res.status(401).json(err)
    }
    
}


// updateFeedbacksController
exports.updateFeedbacksController=async(req,res)=>{
    console.log("Inside get update Feedbacks Controller");
    // get feedback id to approve or reject
    const {id}=req.params
    // get feedback status from url - req.query
    const status=req.query.status
    try{
        const updateFeedback=await testimonials.findById({_id:id})
        updateFeedback.status=status
        await updateFeedback.save()
        res.status(200).json(updateFeedback)

    }catch(err){
        res.status(401).json(err)
    }
    
}


// getAllApprovedFeedbacks
exports.getAllApprovedFeedbacks=async(req,res)=>{
    console.log("Inside get all approved Feedbacks");
    try{
        const  allApprovedFeedbacks=await testimonials.find({status:'Approved'})
        res.status(200).json(allApprovedFeedbacks)

    }catch(err){
        res.status(401).json(err)
    }
    
}