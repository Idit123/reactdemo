const db = require("../models/index")
const users = db.Users
const bcrypt = require("bcrypt")

//upload image

exports.upload = async (req, res) => {
  const data = req.files
  res.send(req.body)
}

// Signup

//POST
exports.signup = async (req, res) => {
  const user = req.body

  const username = user.userDetails.username
  const email = user.userDetails.email
  const password = user.userDetails.password
  const language = user.userDetails.checkvalue
  const gender = user.userDetails.gender
  const state = user.userDetails.state
  const profile_image = user.userDetails.profile_image

  if (
    username != "" &&
    email != "" &&
    password != "" &&
    language != "" &&
    gender != "" &&
    state != "" &&
    profile_image != ""
  ) {
    const user = await users.findOne({
      where: {
        email: email,
      },
    })
    if (user) {
      res.send({ message: "Email is already exits." })
    } else {
      const salt = await bcrypt.genSalt(10)
      const encryptpassword = await bcrypt.hash(password, salt)

      let data = await users.create({
        username,
        email,
        password: encryptpassword,
        language,
        gender,
        state,
        profile_image,
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
