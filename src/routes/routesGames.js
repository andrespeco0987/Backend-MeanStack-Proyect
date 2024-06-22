import { Router } from "express";
import DriversGames from "../drives/driversGames.js";

const routesGames = Router();

routesGames.post("/", DriversGames.createGame);
routesGames.get("/:id", DriversGames.readGame);
routesGames.get("/", DriversGames.readAllGames);
routesGames.get("/name/:name", DriversGames.readByName);
routesGames.put("/:id", DriversGames.updateGame);
routesGames.delete("/:id", DriversGames.deleteGame);


export default routesGames;
