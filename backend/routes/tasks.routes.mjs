import Router from 'express'
import controllerTasks from '../src/controller/controller.tasks.mjs'


const tasksRoutes = Router()


/* Muestra Todas las tareas que estan creadas en la  BD */
tasksRoutes.get('/',controllerTasks.listaTask)


/* Crear Tarea nueva */
tasksRoutes.post('/',controllerTasks.addTask)



export default tasksRoutes