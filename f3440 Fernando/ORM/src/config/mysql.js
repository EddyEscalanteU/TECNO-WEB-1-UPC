const { Sequelize } = require("sequelize");
const config = require("./config");

const sequelize = new Sequelize(
  config.NAME_DB,
  config.USER_DB,
  config.PASS_DB,
  { host: config.HOST_DB, dialect: "mysql" }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
module.exports = db;
