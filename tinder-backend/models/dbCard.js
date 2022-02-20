const mongoose = require("mongoose");
const crypto = require("crypto");

const cardSchema = mongoose.Schema({
  name: String,
  cardId: {
    type: String,
    default: crypto.randomUUID(),
  },
  imgUrl: String,
});

module.exports = mongoose.model("card", cardSchema);
