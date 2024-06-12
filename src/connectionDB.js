import mongoose from "mongoose";

mongoose.connect(process.env.MONGODN_ATLAS_URI).then((dato) => {
    console.log("ok, connected to the database");
});