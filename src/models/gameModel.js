import { Schema, model } from "mongoose";

const gameSchema = new Schema({
	name: { type: String, require: true },
	frontPage: { type: String, require: true },
	genre: { type: String, require: true },
	category: { type: String, require: true },
	plataform: {
		ps: { type: Boolean, require: true },
		xbox: { type: Boolean, require: true },
		switch: { type: Boolean, require: true },
		pc: { type: Boolean, require: true }
	},
	calification: { type: Number, require: true },
	players: { type: Schema.Types.Mixed, require: true },
	online: { type: Boolean, require: true },
	editor: { type: String, require: true },
	departureDate: { type: Date, require: true },
	classification: { type: String, require: true },
	downloadSize: { type: Schema.Types.Mixed, require: true },
	price: {
		ps: { type: Number, require: true },
		xbox: { type: Number, require: true },
		switch: { type: Number, require: true },
		pc: { type: Number, require: true }
	},
	sopportedLenguages: { type: Schema.Types.Mixed, require: true },
	historyMode: { type: Boolean, require: true },
	historyTime: { type: Number, require: false }
});

export default model("Game", gameSchema);
