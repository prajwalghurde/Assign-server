const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/db");

const PORT = process.env.PORT || 5555;
const app = express();
const jobRoutes = require("./routes/jobRoutes");

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/jobs", jobRoutes);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
