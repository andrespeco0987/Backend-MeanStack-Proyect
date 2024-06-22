const DriverLibrary = {
	readGames: async (req, res) => {
		try {
			const response = await fetch("https://www.freetogame.com/api/games");

			const data = await response.json();

			const limitedData = data.slice(0, 80);

			res.json(limitedData);
		} catch (error) {
			console.error("Error al llamar a la API de terceros:", error);
			res.status(500).json({ error: "Error al llamar a la API de terceros" });
		}
	}
};

export default DriverLibrary;
