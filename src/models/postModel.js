import { Schema, model } from "mongoose";

const postSchema = new Schema({
	content: {
		type: String,
		required: true
	},
	rating: {
		type: Number,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

export default model("Post", postSchema);
