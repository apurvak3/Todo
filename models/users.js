import mongoose from "/"
const Schema = new mongoose.Schema({
    name:{
        type: String, 
        required : true,
        unique : true,

    },
    email:{
        type: String, 
        required : true,
        unique : true,
    },
    password:{
        type: String, 
        required : true,
        select : false,
    },
    createddAt:{
        type : Date,
        default:Date.now,
    },
})
export const User = mongoose.model("User" , Schema);