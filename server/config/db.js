const mongoose = require("mongoose");
require("dotenv").config();
console.log("process.env::", process.env);
module.exports = function () {
  const db = process.env.MONGODB_URI;
  mongoose
    .connect(db, { useUnifiedTopology: true })
    .then(() => console.log(`Connected to ${db}...`));
};
