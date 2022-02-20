const express = require("express");
const mongoose = require("mongoose");
const cards = require("./routes/cards");
const morgan = require("morgan");
const Cors = require("cors");
const dotnenv = require("dotenv").config();

// App config
const app = express();
const port = process.env.PORT || 8081;
const connection_url = `${process.env.MONGODB_CONNECTION_STRING}`;

// Middlewares
app.use(morgan("tiny"));
app.use(express.json());
app.use(Cors());
app.use("/tinder", cards);

// DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  //   useCreateIndex: true,
  useUnifiedTopology: true,
});

// API endpoints
app.get("/health", (req, res) => {
  res.status(200).send("Api working finesss");
});

//Listeners
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
