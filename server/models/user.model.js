require("./index")

module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define(
    "users",
    {
      username: { type: Sequelize.STRING },
      email: { type: Sequelize.STRING },
      password: { type: Sequelize.STRING },
      gender: { type: Sequelize.STRING },
      country: { type: Sequelize.STRING },
      language: { type: Sequelize.STRING },
    },
    {
      timestamps: false,
    }
  )
  return Users
}
