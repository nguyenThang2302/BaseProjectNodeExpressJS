const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Demo = new Schema({
  // Các filed VD: videoID: { type: String, maxLength: 255 },
});

module.exports = mongoose.model("Demo", Demo);
