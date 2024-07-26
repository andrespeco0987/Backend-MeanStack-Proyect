import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_ATLAS_CONNECTION).then((dato) => {
	console.log("ok, connected to the database");
});
