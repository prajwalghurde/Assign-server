const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/db");

const PORT = process.env.PORT || 5555;
const app = express();
const jobRoutes = require("./routes/jobRoutes");

// ✅ Setup CORS before routes
const allowedOrigins = [
  process.env.CLIENT_URL,
  "http://localhost:3000" // optional for local development
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

// ✅ JSON parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ API routes
app.use("/api/jobs", jobRoutes);

// ✅ Root test route
app.get("/", (req, res) => {
  res.send("hello");
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
