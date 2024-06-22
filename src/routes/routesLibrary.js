import { Router } from "express";
import DriverLibrary from "../drives/driversLibrary.js";



const routerLibrary = Router();

routerLibrary.get("/", DriverLibrary.readGames);

export default routerLibrary;
