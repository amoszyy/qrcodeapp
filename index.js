const express = require("express")
const app  = express()
const mongoose = require("mongoose")
const cors = require("cors")
app.use(cors())
require ("dotenv").config()
const PORT = process.env.PORT
const URI = process.env.MONGO_URI
mongoose.connect(URI,(err)=>{
    if(err){
        console.log("mongoose is not connecting...")
        console.log(err)

    } else{
        console.log("mongoose has connected")
    }
})
app.listen(PORT,()=>{
    console.log("app is listening at " + PORT)

})