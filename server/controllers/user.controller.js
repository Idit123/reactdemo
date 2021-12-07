const db = require("../models/index")
const users = db.Users
const bcrypt = require("bcrypt")

// Signup

//POST
exports.signup = async (req, res) => {
  const user = req.body

  // generate salt to hash password
  const salt = await bcrypt.genSalt(10)
  // now we set user password to hashed password
  user.password = await bcrypt.hash(user.password, salt)

  var username = user.username
  var email = user.email
  var password = user.password
  var gender = user.gender
  var checkbox1 = user.check1
  var checkbox2 = user.check2
  var checkbox3 = user.check3
  var state = user.state
  var language = []

  if (checkbox1 != undefined) {
    language.push(checkbox1)
  }
  if (checkbox2 != undefined) {
    language.push(checkbox2)
  }
  if (checkbox3 != undefined) {
    language.push(checkbox3)
  }
  let lang = language.join()
  if (
    username != "" &&
    email != "" &&
    password != "" &&
    lang != "" &&
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
        gender: gender,
        state: state,
        language: lang,
      })
      if (data) {
        res.send({ message: "Register Successfully." })
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
  var email = req.body.email
  var password = req.body.password

  if (email !== "" && password !== "") {
    const user = await users.findOne({
      where: {
        email: email,
      },
    })

    if (user) {
      const validPassword = await bcrypt.compare(password, user.password)

      if (validPassword) {
        req.session.user = user.id
        res.send(user)
      } else {
        res.send({ message: "Wrong username/password combination!" })
      }
    } else {
      res.send({ message: "User doesn't exist" })
    }
  } else {
    res.send({ message: "Fill Up Username and password!" })
  }
}
