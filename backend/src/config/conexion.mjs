import mongoose from "mongoose";
import 'dotenv/config'

export default mongoose.connect(`${process.env.URI}${process.env.BD}`)
.then(()=>{console.log(`Conexion a Mongo DB Exitosa ✅\nBase De Datos : ${process.env.BD}`)})
.catch((error)=>{console.log(`Conexion a Mongo DB Fallida ❌\nError: ${error}`)})