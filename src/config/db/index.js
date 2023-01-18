const mongoose = require("mongoose");

async function connect() {
  try {
    mongoose
      .connect("mongodb://localhost:27017/f8_education_dev")
      .then(() => console.log("Connection Successful"));
  } catch (err) {
    console.log("Connection Error");
  }
}

module.exports = { connect };
