import GameModel from "../models/gameModel.js";

const DriversGames = {
	createGame: async (req, res) => {
		try {
			const newGame = new GameModel(req.body);
			const gameCreated = await newGame.save();
			if (gameCreated._id) {
				res.json({
					result: "All good",
					message: "The game was created and added to the database",
					data: gameCreated._id
				});
			}
		} catch (error) {
			res.json({
				result: "There was a mistake",
				message: "The game was not created correctly",
				data: error
			});
		}
	},
	readGame: async (req, res) => {
		try {
			const foundGame = await GameModel.findById(req.params.id);
			if (foundGame._id) {
				res.json({
					result: "All good",
					message: "This is the game you are looking for",
					data: foundGame
				});
			}
		} catch (error) {
			res.json({
				result: "There was a mistake",
				message: "Game id is wrong",
				data: error
			});
		}
	},
	readAllGames: async (req, res) => {
		try {
			const allGames = await GameModel.find();
			res.json({
				result: "All good",
				message: "These are all our registered games",
				data: allGames
			});
		} catch (error) {
			res.json({
				result: "There was a mistake",
				message: "We cannot show you our game database",
				data: error
			});
		}
	},
	readByName: async (req, res) => {
		try {
			const gameName = req.params.name;
			const game = await gameModel.findOne({ name: gameName });

			if (game) {
				res.status(200).json(game);
			} else {
				res.status(404).json({ mensaje: "Juego no encontrado" });
			}
		} catch (error) {
			res.status(500).json({ mensaje: "Error del servidor", error: error.message });
		}
	},
	updateGame: async (req, res) => {
		try {
			const updatedGame = await GameModel.findByIdAndUpdate(req.params.id, req.body, {
				new: true,
				runValidators: true,
				omitUndefined: true
			});

			if (updatedGame) {
				res.json({
					result: "All good",
					message: "The game was updated in the database",
					data: updatedGame
				});
			} else {
				res.status(404).json({
					result: "Not Found",
					message: "The game was not found in the database"
				});
			}
		} catch (error) {
			res.status(500).json({
				result: "There was a mistake",
				message: "There was an error, the game was not updated and it will have the previous data",
				data: error.message
			});
		}
	},
	deleteGame: async (req, res) => {
		try {
			const deletedGame = await GameModel.findByIdAndDelete(req.params.id);
			if (deletedGame._id) {
				res.json({
					result: "All good",
					message: "The game was successfully deleted",
					data: null
				});
			}
		} catch (error) {
			res.json({
				result: "There was a mistake",
				message: "The game could not be deleted due to a bug, it will still be active in the database",
				data: error
			});
		}
	}
};

export default DriversGames;
