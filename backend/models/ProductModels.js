import { Schema, model } from "mongoose";

let ProductSchema = new Schema({
    title:String,
    price:Number,
    image:String,
    isNew:Boolean,
})

export let ProductModel = new model("products",ProductSchema)