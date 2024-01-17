const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const config= require("./config/config")
app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST","DELETE","PUT","PATCH"],
    })
  );
  app.use(morgan("tiny"));
  app.use(express.json());

const db = require("./config/mysql");

  db.sequelize
    .sync({ force: false })
    .then(() => {
      console.log("Drop and re-sync db.");
    })
    .catch((err) => {
      console.log(err);
      console.log("Error while connecting with database");
    });

  app.use(`/${config.ENV}`, require("./routes/index.routes"));
  module.exports = app;