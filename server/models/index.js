const dbConfig = require("../config/db.config")

const Sequelize = require("sequelize")

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
    operatorsAliases: "0",

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    logging: false,
  }
)

// Extra from file for AUTH
sequelize
  .authenticate()
  .then(() => {
    console.log("connect")
  })
  .catch((err) => {
    console.log(err)
  })

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.Users = require("./user.model")(sequelize, Sequelize)

module.exports = db

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("table created")
  })
  .catch((err) => {
    console.log("Error", err)
  })
