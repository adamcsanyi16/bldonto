const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  nev: {
    type: String,
    required: true,
  },
  kor: {
    type: Number,
    required: true,
    min: 16,
  },
  lab: {
    type: String,
    required: true,
  },
  poszt: {
    type: String,
    required: true,
  },
  kep: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("mancity", citySchema);
