import { Router } from "express";
import controllerLogin from "../drives/controllerLogin.js";


const enrutadorLogin = Router();

enrutadorLogin.post('/', controllerLogin.login );
enrutadorLogin.get("/:token", controllerLogin.validateToken);
  


export default enrutadorLogin;
