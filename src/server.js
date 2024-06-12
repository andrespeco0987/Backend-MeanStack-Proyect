import express from "express";
import morgan from "morgan";
import enrutadorUsers from "./routes/userRouter.js";
import enrutadorLogin from "./routes/loginRouter.js";

const server = express ();

server.use(express.json());
server.use(morgan("dev")) ;
server.use("/users", enrutadorUsers);
server.use("/login", enrutadorLogin);

//ruta raiz
server.get ('/', (solicitud, respuesta) => {
    respuesta.status(404).send("Oops! We can't find the page you're looking for.");
});

//exportando al archivo
export default server;