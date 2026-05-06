const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../frontend")));

// ROUTES
app.use("/api/auth", require("./routes/auth"));
app.use("/api/projects", require("./routes/project"));
app.use("/api/tasks", require("./routes/task"));
app.use("/api/dashboard", require("./routes/dashboard"));

// FRONTEND
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

const PORT = process.env.PORT || 5000;


// DATABASE CONNECTION + SERVER START
async function startServer() {

  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected ✅");

    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });

  } catch (err) {

    console.log("MongoDB Error ❌");
    console.log(err);

  }
}

startServer();