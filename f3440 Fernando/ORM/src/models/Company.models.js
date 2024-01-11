const sequelize = require("../config/mysql").sequelize;
const Sequelize = require("../config/mysql").Sequelize;

const Company = sequelize.define("companies", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true,
     },
  address: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  country: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  
});


module.exports = Company;
