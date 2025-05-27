import nodemailer from 'nodemailer'
import 'dotenv/config'
import fs from 'fs'

const transporter = nodemailer.createTransport({
    service: "gmail",
    
    auth: {
            user: process.env.EMAIL,
            pass: process.env.PEMAIL,
        }
    });

const sendEmail = async (req,res) => {
    try{
        await transporter.sendMail({
            from:process.env.EMAIL,
            to: req.body.destinatario,
            subject:req.body.asunto,
            text : req.body.cuerpo,
            html : `
            <h2> Hola @ ${req.body.destinatario} </> 
            <br>
            <h2> cuerpo : ${req.body.cuerpo} <h2/> 
            <br>
            <img src=" cid : ${req.body.destinatario}"/>
            `,
            attachments : [
                {
                    filename:'img_2.jpg',
                    content: fs.readFileSync('./temp/img_2.jpg'),
                    cid : req.body.destinatario
                }
            ]
             
        })
        res.status(200).json({ mensaje: "Correo enviado con éxito" });
    }catch(error){
        res.status(500).json({ error: `${error}` });
    }
}
/* img src = x  onerror =alert('XSS) */
export default {sendEmail}