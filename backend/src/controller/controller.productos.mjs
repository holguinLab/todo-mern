import { CategoriasProductos } from "../models/model.categorias.productos.mjs";
import { Productos } from "../models/model.productos.mjs";


const listarProductos = async (req,res) => {
    try{
        const productos = await Productos.find()
        console.log('Productos Listados')
        res.status(200).json({mensaje:'Lista De Productos' , productos:productos})
    }catch (error){
        console.log('Productos no encontrados : \n',error)
        res.status(404).json({mensaje:'Productos no encontrados' ,error})
    }
}

const addProducto = async (req,res) =>{
    const {nombre,precio,descripcion,categoria,img} = req.body
    if (!nombre || !precio || !categoria) {
        return res.status(400).json({error: 'Los campos nombre, precio y categoría son obligatorios'})
    }


    const categoriaExitente = await CategoriasProductos.findOne({nombre:categoria})
    if(!categoriaExitente){
        return res.status(404).json({Error : 'Categoria No Encontrada '})
    }

    /* Creacion del Producto */
    const producto = new Productos({
        "nombre" : nombre,
        "precio" : Number(precio),
        "descripcion" : descripcion,
        "categoria" :categoriaExitente._id,
        "img" :img
    })

    try{
        await producto.save()
        console.log('Producto Agregado Correctamente ' , producto)
        res.status(201).json({mensaje : 'Producto Agregado Correctamente' , Producto : producto})
    }catch (error) {
        console.log('Error al agregar el producto : \n',error)
        res.status(404).json({mensaje:'Error al momento de agregar producto ' , Error :error})
    }
}

const addCategoriaProducto = async (req,res) => {
    try{
        const categoria = new CategoriasProductos({
            "nombre" :req.body.nombre,
        })
        await categoria.save()
        res.status(200).json({mensaje   : 'Categoria Agregada Correctamente', categoria : categoria})
        console.log('Categoria Agregada Correctamete',categoria)
    }catch(error) {
        res.status(404).json({mensaje :'Error Al Guardar La Categoria',error})
        console.log(error)
    }
}

export default {addCategoriaProducto,listarProductos,addProducto}