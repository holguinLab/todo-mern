
import express from 'express'

import tasksRoutes from './routes/tasks.routes.mjs'
import routerUsers from './routes/users.routes.mjs'
import productsRoutes from './routes/products.routes.mjs'
import routerEmail from './routes/email.routes.mjs'


import './src/config/conexion.mjs'
import cors from 'cors'
import 'dotenv/config'

const app = express()
app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://todo-mern-two-khaki.vercel.app'  // <-- el correcto
    ],
    credentials: true
})) 




// Requerido para hacer POST 
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


/* Rutas  */
app.use('/api/tasks', tasksRoutes)
app.use('/api/users', routerUsers)
app.use('/api/productos', productsRoutes)
app.use('/api/sendEmail',routerEmail)





app.listen(process.env.PORT, () => {
    console.log(`\n\nApliacion Corriendo En el Puerto : ${process.env.PORT}\nURL : http://localhost:${process.env.PORT}/\n\n`)
})

