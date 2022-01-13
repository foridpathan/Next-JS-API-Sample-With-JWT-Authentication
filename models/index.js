const { Sequelize, DataTypes, Op } = require("sequelize");
import sequelize from "../config/index.js";

const db = {};

db.Sequelize = Sequelize;
db.Op = Op;
db.sequelize = sequelize;

db.homeLayout = require("./home-layout.model")(sequelize, Sequelize, DataTypes);

module.exports = db;
