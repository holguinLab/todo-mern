import Router from 'express'
import controllerProductos from '../src/controller/controller.productos.mjs'


const productsRoutes = Router()


/* Muestra Todas los Productos que estan creadas en la  BD */
productsRoutes.get('/',controllerProductos.listarProductos)


/* Crear Producto Nuevo  */
productsRoutes.post('/',controllerProductos.addProducto)


/* Crear Categoria Para Los Pruductos  */
productsRoutes.post('/newCategoria',controllerProductos.addCategoriaProducto)




export default productsRoutes