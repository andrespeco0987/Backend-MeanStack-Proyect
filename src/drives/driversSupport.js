import multer from "multer";
import fs from "fs-extra";
import supportModel from "../models/supportModel.js";

const driverSupport = {
	createRequest: async (req, res) => {
		try {
			const storage = multer.diskStorage({
				destination: "images",
				filename: (req, file, cb) => {
					cb(null, file.originalname);
				}
			});
			const carge = multer({ storage: storage }).single("image");
			carge(req, res, async (error) => {
				if (error) {
					res.json({
						result: "mal",
						message: "wrong",
						data: null
					});
				} else {
					const newRequest = new supportModel({
						name: req.body.name,
						contactEmail: req.body.contactEmail,
						phoneNumber: req.body.phoneNumber,
						message: req.body.message,
						image: req.file.filename
					});

					const requestCreated = await newRequest.save();
					if (requestCreated) {
						res.json({
							result: "good",
							message: "Request created",
							data: requestCreated._id
						});
					}
				}
			});
		} catch (error) {
			res.json({
				result: "mal",
				message: "wrong at create request",
				data: null
			});
		}
	},
	deleteRequest: async (req, res) => {
		try {
			const requestDeleted = await supportModel.findByIdAndDelete(req.params.id);
			if (requestDeleted._id) {
				await fs.unlink("images/" + requestDeleted.image);
				res.json({
					result: "good",
					message: "request deleted",
					data: null
				});
			}
		} catch (error) {
			res.json({
				result: "wrong",
				message: "the request was not delete",
				data: error
			});
		}
	}
};

export default driverSupport;
