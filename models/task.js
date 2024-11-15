import mongoose from "mongoose";

const Schema = { 
    title : { 
        type : String , 
        required : true ,
    },
    description : {
        type : String , 
        required :true,
    },
    isCompleted  : {
        type: Boolean,
        default : false,
    },
    user : { 
        type: mongoose.Schema.Typed.objectId,
        ref:"user",
        required:true ,
        
    },
    createdAt : {
        type :Date , 
        default :Date.now
    }

 }
 export const task =  mongoose.model("Task" , schema);