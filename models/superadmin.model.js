const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
let superadminSchema= mongoose.Schema({
    firstname:{required:true, type:String},
    surname:{required:true, type:String},
    email:{required:true, type:String},
    password:{required:true, type:String},
    phonenumber:{required:true, type:Number}
})

let saltRound =10
superadminSchema.pre("save", function(next){
    console.log(this.password)
    bcrypt.hash(this.password, saltRound, (err, hashedPassword)=>{
        console.log(hashedPassword)
        if(!err){
            this.password= hashedPassword
            next()
        } else{
            console.log(err)
        }
    })
})
superadminSchema.methods.validatePassword= function(password, callback) {
    console.log(password)
    console.log(this.password)
    bcrypt.compare(password, this.password, (err, same)=>{
        if(!err){
            callback(err, same)

        } else{
            next()
        }

    })
}

let superadminModel = mongoose.model("superadmin_collection", superadminSchema)
module.exports = superadminModel;