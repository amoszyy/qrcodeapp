const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
require ("dotenv").config()
app.use(cors())
app.use(bodyParser.json({limit:"50mb"}))
app.use(express.urlencoded({extended:true, limit:"50mb"}))
app.use(express.json())
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

const superadminRouter = require("./routes/superadmin.route")
const adminRouter = require("./routes/admin.route")
const userRouter = require("./routes/user.route")
app.use("/superadmin", superadminRouter)
// app.use("/admin", adminRouter)
// app.use("/user", userRouter)
app.listen(PORT,()=>{
    console.log("app is listening at " + PORT)

})