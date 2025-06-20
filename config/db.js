const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => console.log("DATABASE connected"))
  .catch((err) => console.log("error : " + err.message));
