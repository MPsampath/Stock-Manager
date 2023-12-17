import mongoose from "mongoose";

const Schema= mongoose.Schema;

export const userRegisterSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    mobile:{
        type: Number,
        required: true
    },
    adress:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required:true
    }
})