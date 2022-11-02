import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    names:String,
    unity:String,
    description:String,
    isActive:{
        type:String,
        require:true,

    },
    isActive:{
        type:Boolean,
        default:true,
    }

},{timestamps:true})

export default mongoose.model("product",Schema)