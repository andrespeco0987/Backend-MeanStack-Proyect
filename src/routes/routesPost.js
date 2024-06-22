import { Router } from "express";
import driversPost from "../drives/driversPost.js";

const routerPost = Router();

routerPost.post("/", driversPost.createPost);
routerPost.get("/", driversPost.readAllPost);
routerPost.delete("/", driversPost.deletePost);

export default routerPost;
