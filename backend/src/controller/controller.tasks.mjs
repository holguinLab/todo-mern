import Tasks from "../models/model.task.mjs"

/* Ver Todas Las Tareas */
const listaTask = async(req,res) =>{
    const task = await Tasks.find()
    res.json(task)
}


/* Agregar Tarea Nueva  */
const addTask = async(req,res)=>{
    const newTask = new Tasks({
        'title' : req.body.title
    })
    await newTask.save()
    res.status(201).json({Mensaje : 'Tarea Agregada Correctamente'})
}


export default {listaTask,addTask}

