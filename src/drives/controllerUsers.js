import bcrypt from "bcryptjs";
import ModelsUser from "../models/modelsUser.js";


const controllerUsers = {
  createUser: async (solicitud, respuesta) => {
    try {
      //logica para crear el producto en la base de datos
      const  password  = solicitud.body.password;
      const passwordProtected = await bcrypt.hash(password, 10);
      const newUser = new ModelsUser({
        name: solicitud.body.name,
        lastName: solicitud.body.lastName,
        id: solicitud.body.id,
        city: solicitud.body.city,
        phoneNumber: solicitud.body.phoneNumber,
        gender: solicitud.body.gender,
        email: solicitud.body.email,
        password: passwordProtected,
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
  readUser: async (solicitud, respuesta) => {
    try {
      const userFound = await ModelsUser.findByID(solicitud.params.id);
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
