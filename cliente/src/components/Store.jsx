import { CardProduct } from "./CardProduct"
import axios from "axios"
import { useState ,useEffect} from "react"



export function Store (){
    const API = import.meta.env.VITE_URL
    const [productos,setProductos] =useState([])

    const listProducts = async()=>{
        try{
            /* Guarda La Respuesta  */
            const response = await axios.get(`${API}/api/productos`)
            console.log(response.data)
            setProductos(response.data.productos)
        }catch(error){
            console.log(error)
            alert("Error Al Obtener Productos")
        }
    }

    useEffect(()=>{
        listProducts()
    },[])

    return (
        <>
            <div className="flex flex-wrap justify-center gap-4 p-4">
                {productos.map((producto,index)=>(
                    <CardProduct 
                        key = {index}
                        img ={producto.img}
                        nombre = {producto.nombre}
                        precio = {producto.precio}
                        descripcion = {producto.descripcion}
                    />
                ))}
            </div>
        </>
    )
}