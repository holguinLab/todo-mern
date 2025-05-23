import Router from 'express'
import controllerProductos from '../src/controller/controller.productos.mjs'


const productsRoutes = Router()


/* Muestra Todas los Productos que estan creadas en la  BD */
productsRoutes.get('/',controllerProductos.listarProductos)


/* Crear Producto Nuevo  */
productsRoutes.post('/',controllerProductos.addProducto)


/* Eliminar Producto */
productsRoutes.delete('/:_id',controllerProductos.eliminarProducto)

/* Buscar Producto Por ID */
productsRoutes.get('/search/:_id',controllerProductos.buscarProductoID)



/* Actualizar Producto ID */
productsRoutes.put('/:_id',controllerProductos.actualizarProducto)



/* Crear Categoria Para Los Pruductos  */
productsRoutes.post('/newCategoria',controllerProductos.addCategoriaProducto)




/* Listar Todas Las Categorias de Productos */
productsRoutes.get('/categorias',controllerProductos.listarCategoriasProductos)











export default productsRoutes