// load .env file content into process.enc by default
require('dotenv').config()

//express
const express=require('express')
const cors=require('cors')
const router = require('./Route/router')

require('./connection/db')

const recipeHubServer= express()

recipeHubServer.use(cors())
recipeHubServer.use(express.json())
recipeHubServer.use(router)

const PORT=5000

recipeHubServer.listen(PORT,()=>{
    console.log(`recipe-server started running at PORT ${PORT}`);
    
})


recipeHubServer.get('/',(req,res)=>{
    res.status(200).send(`<h1 style="color:blue">Recipe server started running........</h1>`)
})