import { Router } from "express";
import controllerUsers from "../src/controller/controller.users.mjs";

const routerUsers = Router()

routerUsers.get('/',controllerUsers.listUsers)
routerUsers.post('/',controllerUsers.addUser)

export default routerUsers