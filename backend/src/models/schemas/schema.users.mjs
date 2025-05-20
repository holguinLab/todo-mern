import mongoose from "mongoose";
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('0123456789', 3);

const schemaUsers = new mongoose.Schema({
    codigo :{
        type:Number,
        required : true,
        unique :true,
        default: () => nanoid() // 
    },
    email :{
        type : String,
        required : true,
        unique :true,
        match: [/.+@.+\..+/, 'Correo inválido'],
        trim: true // elimina espacios al inicio/final
    },
    password:{
        type : String,
        required : true,
    },
    fullName:{
        type:String,
    },
})

export default schemaUsers