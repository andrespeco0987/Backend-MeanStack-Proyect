import { Schema, model } from "mongoose";

const supportModel = new Schema({
	name: { type: String, required: true },
	contactEmail: { type: String, required: true },
	phoneNumber: { type: Number, required: true },
	message: { type: String, required: true },
	image: { type: String, required: true }
});

export default model("Request", supportModel);
