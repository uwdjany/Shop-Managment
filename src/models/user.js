import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    names:String,
    phone:String,
    picture:String,
    email:{
        type:String,
        require:true,

    },
    password:{
        type:String,
        required:true,

    },
    role:{
        type:String,
        enum:["admin","user"],
        default:"user"

    },
    isActive:{
        type:Boolean,
        default:true,
    }

},{timestamps:true})

export default mongoose.model("user",Schema)