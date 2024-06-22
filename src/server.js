import express from "express";
import cors from "cors";
import morgan from "morgan";
import enrutadorUsers from "./routes/userRouter.js";
import enrutadorLogin from "./routes/loginRouter.js";
import routesGames from "./routes/routesGames.js";
import routesLibrary from "./routes/routesLibrary.js";
import routesPost from "./routes/routesPost.js";
import routesSupport from "./routes/routesSupport.js";


const server = express ();

server.use(cors());
server.use(express.json());
server.use(morgan("dev")) ;
server.use("/users", enrutadorUsers);
server.use("/login", enrutadorLogin);
server.use("/games", routesGames);
server.use("/library",routesLibrary );
server.use("/post", routesPost);
server.use("/support", routesSupport);




//ruta raiz
server.get ('/', (solicitud, respuesta) => {
    respuesta.status(404).send("Oops! We can't find the page you're looking for.");
});

//exportando al archivo
export default server;