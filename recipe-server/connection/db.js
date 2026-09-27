const mongoose=require('mongoose')
// get database url
const dbString=process.env.db_string
// user to connect node.js application with mongodb
mongoose.connect(dbString).then((res)=>{
    console.log("mongoose connected successfully");
    
}).catch((err)=>{
    console.log(err);
    
})