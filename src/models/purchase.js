import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    quantity:Number,
    price:Number,
    description:String,
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"user"

    },
    product:{
        type:mongoose.Schema.ObjectId,
        ref:"product"

    },
    isPaid:{
        type:Boolean,
        default:true,
    }

},{timestamps:true})

Schema.pre(/^find/,function(next){
    this.populate({
        path:"user",
        select:"-password"

    })
    this.populate({path:"product"});
    next()
})

export default mongoose.model("purchase",Schema)