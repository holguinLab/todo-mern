import Users from "../models/model.users.mjs";


const listUsers = async(req,res) =>{
    const users = await Users.find()
    res.json(users)
}


const addUser = async (req,res) =>{
    try{
        await Users.create(req.body)
        console.log(req.body)
        res.status(201).json({menssage: 'Usuario Agregado Correctamente'})
    } catch(error) {
        console.log(error)
        res.status(500).json({ message: "Error interno del servidor" });
    }
}

export default {addUser,listUsers}