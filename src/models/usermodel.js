const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique:true
    },
    mobile:{
        type: Number,
        require:true
    },
    password:{
        type: String,
        require: true
    }
},{
    timestamps: true
})
exports.module = mongoose.model("User",userSchema)