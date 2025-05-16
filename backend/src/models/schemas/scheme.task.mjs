import mongoose from "mongoose";

const schemaTasks = new mongoose.Schema({
    title :{
        type : String,
        requiered : true
    },
    completed :{
        type:Boolean,
        default : false,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'Users'
    }
},{versionKey:false})

export default schemaTasks