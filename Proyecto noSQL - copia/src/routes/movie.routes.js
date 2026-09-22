const express = require("express");

const router = express.Router();

const Movie = require("../models/movie");

router.post("/", async (req, res) => {
  try {

    const newMovie = new Movie(req.body);

    const savedMovie = await newMovie.save();

    res.status(201).json(savedMovie);

  } catch (error) {

    res.status(400).json({
    message: "Error al crear la película",
    error: error.message
  });

  }

});

router.put("/:id", async (req, res) => {
     try {

        const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedMovie) {
  return res.status(404).json({
    message: "Película no encontrada"
  });
}

res.status(200).json(updatedMovie);

  } catch (error) {

    res.status(400).json({
  message: "Error al modificar la película",
  error: error.message
});

  }

});

router.delete("/:id", async (req, res) => {
     try {
         const deletedMovie = await Movie.findByIdAndDelete(req.params.id);

         if (!deletedMovie) {
  return res.status(404).json({
    message: "Película no encontrada"
  });
}

res.status(200).json({
  message: "Película eliminada correctamente",
  movie: deletedMovie
});

  } catch (error) {
     res.status(400).json({
    message: "Error al eliminar la película",
    error: error.message
});
  }

});


module.exports = router;



