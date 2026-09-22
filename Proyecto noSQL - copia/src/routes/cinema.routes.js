const express = require("express");

const router = express.Router();

const Cinema = require("../models/cinema");

router.post("/", async (req, res) => {
  try {
    const newCinema = new Cinema(req.body);
    const savedCinema = await newCinema.save();
    res.status(201).json(savedCinema);

  } catch (error) {

    res.status(400).json({
      message: "Error al crear el cine",
      error: error.message
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const cinemas = await Cinema.find().populate("movies");
    res.status(200).json(cinemas);
    } catch (error) {

          res.status(500).json({
      message: "Error al obtener los cines",
      error: error.message
    });
  }
});

module.exports = router;