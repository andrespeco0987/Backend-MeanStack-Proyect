//importando el servidor de express
import "dotenv/config";
import "./connectionDB.js";
import server from "./server.js";

// enciendo el servidor y pongo a escuchar peticiones por el puerto 3000
server.listen(3000, ()=>{
    console.log("servidor corriendo en el puerto 3000");
});
