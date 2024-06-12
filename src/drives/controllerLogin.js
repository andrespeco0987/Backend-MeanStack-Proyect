import bcryptsj from "bcryptjs";
import { generateToken, validateToken } from "../helpers/functiones.js";
import Modeluser from "../models/modelsUser.js";

const controllerLogin = {
  login: async (solicitud, respuesta) => {
    try {
      const { username, password } = solicitud.body;
      const userFound = await Modeluser.findOne({ email: username });
      const passwordValid = await bcryptsj.compare(
        password,
        userFound.password
      );
      if (passwordValid) {
        const token = await generateToken({
          id: userFound._id,
          name: userFound.name,
        });

        respuesta.json({
          result: "Good!",
          menssage: "Access granted",
          data: token.token,
        });
      } else {
        respuesta.json({
          result: "Wrong",
          menssage: "Access denied",
          data: null,
        });
      }
    } catch (error) {
      respuesta.json({
        result: "Wrong!",
        message: "Oops! An error occurred while logging in",
        data: error,
      });
    }
  },

  validateToken: async (solicitud, respuesta) => {
    try {
      const token = solicitud.params.token;
      const decodificado = await validateToken(token);
      if (decodificado.id) {
        respuesta.json({
          result: "Good!",
          message: "Valid Token!",
          data: decodificado,
        });
      } else {
        respuesta.json({
          result: "Wrong!",
          message: "Invalid Token.",
          data: null,
        });
      }
    } catch (error) {
      respuesta.json({
        result: "Wrong!",
        message: "Invalid Token.",
        data: null,
      });
    }
  },
};

export default controllerLogin;
