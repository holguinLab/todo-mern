import mongoose from "mongoose";
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('0123456789', 3);


const schemaProducts = new mongoose.Schema({
    codigo :{
        type:Number,
        required : true,
        unique :true,
        default: () => nanoid() // genera código único de 3 caracteres
    },
    nombre : {
        type : String,
        required :true,

    },
    precio : {
        type : Number,
        required : true,
        min : 0

    },
    descripcion :{
        type:String
    },
    categoria :{
        type: mongoose.Schema.Types.ObjectId,
        ref :'CategoriasProductos',
        required : true
    },
    img :{
        type : String
    }

})

export default schemaProducts