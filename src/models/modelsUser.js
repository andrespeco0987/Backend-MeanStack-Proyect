import { Schema, model } from "mongoose";

const esquemaUser = new Schema({
  name: { type: String, require: true },
  lastName: { type: String, require: true },
  id: {type:String, require: true },
  city: { type: String, require: true },
  address: { type: String, require: true },
  phoneNumber: { type: String, require: true },
  gender:{type: String, require: true},
  email: { type: String, require: true },
  password: { type: String, require: true },
});

export default model("user", esquemaUser);






