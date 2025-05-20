import Users from "../models/model.users.mjs";
import encrypt from 'bcrypt'

const listUsers = async(req,res) =>{
    const users = await Users.find()
    res.json(users)
}


const encriptarPassword = async(password) =>{
    const salt = 10
    const hash = await encrypt.hash(password,salt)
    return hash;
}

const addUser = async (req,res) =>{
    const inputPassword = req.body.password
    const encryptPassword = await encriptarPassword(inputPassword)
    try{
        const user = new Users({
            "password" : encryptPassword,
            "email" :req.body.email
        })
        
        await user.save()
        console.log(user)
        res.status(201).json({menssage: 'Usuario Agregado Correctamente'})
    } catch(error) {
        console.log(error)
        res.status(500).json({ message: "Error interno del servidor" });
    }
}


const autenticarUser = async(req,res) =>{
    // 'await' pausa el código hasta que una promesa termine y devuelve su resultado.
    // Solo se usa dentro de funciones 'async'.

    const inputEmail = req.body.email
    const inputPassword = req.body.password
    try{
        const user = await Users.findOne({email : inputEmail})
        
        if (!user){ // Si user es false
            return res.status(401).json({ mensaje: 'Usuario no encontrado' });
        }
        const resultado = await encrypt.compare(inputPassword,user.password)

        if (resultado) { 
            return res.status(200).json({ mensaje: 'Contraseña correcta' });
        } else {
            return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
        }

    }catch(error) {
        console.log('Error al autenticar usuario',error)
        return res.status(500).json({mensaje:'Error al autenticar usuario'})
    }
}

export default {addUser,listUsers,autenticarUser}