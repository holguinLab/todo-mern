import { Router } from "express";
import emailServices from "../src/utils/emailServices.mjs";

const routerEmail = Router()

routerEmail.post('/',emailServices.sendEmail)

export default routerEmail