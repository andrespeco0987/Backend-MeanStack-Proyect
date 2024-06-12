import bcrypt from "bcryptjs";
import ModelsUser from "../models/modelsUser.js";

const controllerUsers = {
  createUser: async (solicitud, respuesta) => {
    try {
      if (solicitud.body.name === "") throw new Error("The name is missing!!");
      if (solicitud.body.lastname === "")
        throw new Error("The last name is missing!!");
      if (solicitud.body.id === "") throw new Error("The id is missing!!");
      if (solicitud.body.city === "") throw new Error("The city is missing!!");
      if (solicitud.body.adress === "")
        throw new Error("The adress is missing!!");
      if (solicitud.body.phonenumber === "")
        throw new Error("The phonenumber is missing!!");
      if (solicitud.body.gender === "")
        throw new Error("The gender is missing!!");
      if (solicitud.body.email === "")
        throw new Error("The email is missing!!");
      if (solicitud.body.password === "")
        throw new Error("The password is missing!!");

      //logica para crear el producto en la base de datos
      const { name, email, password} = solicitud.body;
      const passwordProtected = await bcrypt.hash(password, 10);
      const newUser = new ModelsUser({
        name: name, 
        email: email,
        password: passwordProtected
      });
      const createdUser = await newUser.save();
      if (createdUser._id) {
        respuesta.json({
          result: "Good!",
          menssage: "Created user!",
          data: createdUser._id,
        });
      }
    } catch (error) {
      console.log("error:", error);
      respuesta.json({
        result: "Oops! it does not work.",
        menssage: "An error occurred while creating user",
        data: error,
      });
    }
  },
  readUser: async (solicitud, resouesta) => {
    try {
      const userFound = await ModeloUser.findByID(solicitud.params.id);
      if (userFound._id) {
        respuesta.json({
          result: "Good!",
          menssage: "User found",
          data: userFound,
        });
      }
    } catch (error) {
      respuesta.json({
        result: "Oops! it does not work",
        menssage: "An error occurred while finding user",
        data: error,
      });
    }
  },

  readUsers: async (solicitud, respuesta) => {
    try {
      const allUsers = await ModelsUser.find();
      respuesta.json({
        result: "Good!",
        menssage: "users obtained",
        data: allUsers,
      });
    } catch (error) {
      respuesta.jeson({
        result: "Oops! it does not work.",
        menssage: "An error occurred while finding user",
        data: error,
      });
    }
  },
  updateUser: async (solicitud, respuesta) => {
    try {
      console.log("id:", solicitud.params.id);
      console.log("solicitud body", solicitud.body);
      const updateUser = await ModelsUser.findByIdAndUpdate(
        solicitud.params.id,
        solicitud.body
      );
      if (updateUser._id) {
        respuesta.json({
          result: "Good!",
          menssage: "Update Actualizado!",
          data: updateUser._id,
        });
      }
    } catch (error) {
      respuesta.json({
        result: "Oops! it does not work.",
        data: error,
      });
    }
  },
  deleteUser: async (solicitud, respuesta) => {
    try {
      const userDelete = await ModelsUser.findByIdAndDelete(
        solicitud.params.id
      );
      if (userDelete._id)
        respuesta.json({
          result: "Good!",
          menssage: "User Delete",
          data: null,
        });
    } catch (error) {
      respuesta.json({
        result: "Oops! it does not work.",
        data: error,
      });
    }
  },
};

export default controllerUsers;
