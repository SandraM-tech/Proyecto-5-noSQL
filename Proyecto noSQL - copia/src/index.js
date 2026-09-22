const express = require("express");

const mongoose = require("mongoose");

const movieRoutes = require("./routes/movie.routes");

const cinemaRoutes = require("./routes/cinema.routes");

mongoose.connect("mongodb://localhost:27017/moviesDB")
  .then(() => {
    console.log("Conectado correctamente a MongoDB");
  })
  .catch((error) => {
    console.log("Error al conectar con MongoDB:", error);
  });

const app = express();

app.use(express.json());

app.use("/movies", movieRoutes);

app.use("/cinemas", cinemaRoutes);

app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});

