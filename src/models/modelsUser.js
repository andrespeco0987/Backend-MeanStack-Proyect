import { Schema, model } from "mongoose";

const esquemaUser = new Schema({
  name: { type: String, require: true },
  lastname: { type: String, require: true },
  id: {type:String, require: true },
  city: { type: String, require: true },
  adress: { type: String, require: true },
  phonenumber: { type: String, require: true },
  gender:{type: String, require: true},
  email: { type: String, require: true },
  password: { type: String, require: true },
});

export default model("user", esquemaUser);






