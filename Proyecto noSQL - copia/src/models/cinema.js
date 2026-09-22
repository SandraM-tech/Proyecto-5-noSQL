const mongoose = require("mongoose");

const cinemaSchema = new mongoose.Schema({
      name: {
    type: String,
    required: true
  },

   address: {
    type: String,
    required: true
  },

   movies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie"
    }
  ]
});

const Cinema = mongoose.model("Cinema", cinemaSchema);

module.exports = Cinema;
