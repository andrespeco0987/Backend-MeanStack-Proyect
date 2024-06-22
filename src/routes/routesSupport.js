import { Router } from "express";
import driverSupport from "../drives/driversSupport.js";

const routerSupport = Router();

routerSupport.post("/", driverSupport.createRequest);
routerSupport.delete("/:id", driverSupport.deleteRequest);

export default routerSupport;
