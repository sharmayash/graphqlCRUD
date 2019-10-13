const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  text: String,
  ownerId: String
});

module.exports = mongoose.model("Todo", TodoSchema);
