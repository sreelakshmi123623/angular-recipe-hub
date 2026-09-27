const users=require('../Model/userModel')
// importing bcrypt
const bCrypt=require('bcrypt')
const jwt=require('jsonwebtoken')


// registerController
exports.registerController=async(req,res)=>{
    console.log("inside register controller");
    const{username,email,password}=req.body
    try{
        const existingUser=await users.findOne({email})
        if(existingUser){
                res.status(406).json("user already exist")
        }else{
            const encryptPassword=await bCrypt.hash(password,10)
            // console.log(encryptPassword);
            const newUser=await users({username,email,password:encryptPassword,profile:""})
            await newUser.save()
            res.status(200).json(newUser)
            
        }
    }catch(err){
        res.status(401).json(err)
    }
}



// loginController
exports.loginController=async(req,res)=>{
    console.log("inside login controller");
    const {email,password}=req.body
    try{
        const existingEmail=await users.findOne({email})
        if(existingEmail){
            let isUserPswMatch=await bCrypt.compare(password,existingEmail.password)
            if(isUserPswMatch || password==existingEmail.password){
                const token=jwt.sign({userId:existingEmail._id},process.env.jwt_secret)
                res.status(200).json({user:existingEmail,token})
            }else{
                res.status(404).json("Invalid Password")
            }
        }else{
            res.status(404).json("Invalid Email")
        }

    }catch(err){
        res.status(401).json(err)
    }
}



// getAllUsers
exports.getAllUsers=async(req,res)=>{
    console.log("Inside get all users");
    try{
        const  existingUser=await users.find().skip(1)
        res.status(200).json(existingUser)

    }catch(err){
        res.status(401).json(err)
    }
    
}