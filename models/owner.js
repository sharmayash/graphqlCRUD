const mongoose = require("mongoose");

const OwnerSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model("Owner", OwnerSchema);
