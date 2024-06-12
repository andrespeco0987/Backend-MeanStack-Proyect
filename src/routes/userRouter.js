//importando router para crear un enrutador
import { Router } from "express";
import controllerUsers from "../drives/controllerUsers.js"

//creando enrutador
const enrutadorUsers = Router();

enrutadorUsers.post('/', controllerUsers.createUser);
enrutadorUsers.get('/:id', controllerUsers.readUser);
enrutadorUsers.get('/', controllerUsers.readUsers);
enrutadorUsers.put('/:id', controllerUsers.updateUser);
enrutadorUsers.delete('/:id', controllerUsers.deleteUser);


export default enrutadorUsers;


