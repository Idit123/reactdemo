const db = require("../models/index")
const users = db.Users
const bcrypt = require("bcrypt")

// Signup

//POST
exports.signup = async (req, res) => {
  const user = req.body

  const username = user.userDetails.username
  const email = user.userDetails.email
  let password = user.userDetails.password
  const checkvalue = user.userDetails.checkvalue
  const gender = user.userDetails.gender
  const state = user.userDetails.state

  const salt = await bcrypt.genSalt(10)
  password = await bcrypt.hash(password, salt)

  if (
    username != "" &&
    email != "" &&
    password != "" &&
    checkvalue != "" &&
    gender != "" &&
    state != ""
  ) {
    const user = await users.findOne({
      where: {
        email: email,
      },
    })
    if (user) {
      res.send({ message: "Email is already exits." })
    } else {
      let data = await users.create({
        username: username,
        email: email,
        password: password,
        language: checkvalue,
        gender: gender,
        state: state,
      })
      if (data) {
        res.send({ success: "Register Successfully." })
      }
    }
  } else {
    res.send({ message: "Fill Up All field." })
  }
}

//Login

//GET
exports.loginPage = async (req, res) => {
  res.render("index", { message: "" })
}

//POST
exports.login = async (req, res) => {
  const data = req.body

  const email = data.userDetails.email
  let password = data.userDetails.password

  if (email !== "" && password !== "") {
    const user = await users.findOne({
      where: {
        email: email,
      },
    })

    if (user) {
      const vaildPassword = await bcrypt.compare(password, user.password)
      if (vaildPassword) {
        req.session.user = user.id
        res.send({ success: "Login Successfully." })
      } else {
        res.send({ message: "Please enter your registration password." })
      }
    } else {
      res.send({ message: "Please enter your registration email." })
    }
  } else {
    res.send({ message: "Please enter your register Username and password!" })
  }
}
