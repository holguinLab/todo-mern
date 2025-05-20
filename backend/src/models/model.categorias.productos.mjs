import mongoose from "mongoose";

const schemaCategorias = new mongoose.Schema({
    nombre :{
        type:String,
        required : true,
        unique:true
    }
})

export const CategoriasProductos = mongoose.model('CategoriasProductos',schemaCategorias)

