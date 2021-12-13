const db = require("../models/index")
const bcrypt = require("bcrypt")
const users = db.Users

// Signup

//POST
exports.signup = async (req, res) => {
  const user = JSON.parse(req.body.user)

  const { username, email, password, language, gender, city } = user
  let profile_image = ""

  if (!req.file) {
    res.send({ message: "Image not upload" })
  } else {
    profile_image = req.file.filename
  }

  if (
    !username &&
    !email &&
    !password &&
    !language &&
    !gender &&
    !city &&
    !profile_image
  ) {
    res.send({ message: "Fill Up All field." })
  } else {
    const user = await users.findOne({
      where: {
        email: email,
      },
    })

    if (user) res.send({ message: "Email is already exits." })
    else {
      const salt = await bcrypt.genSalt(10)
      const encryptpassword = await bcrypt.hash(password, salt)

      let data = await users.create({
        username,
        email,
        password: encryptpassword,
        language,
        gender,
        city,
        profile_image,
      })
      data && res.send({ success: "Register Successfully." })
    }
  }
}

//Login

//GET
exports.loginPage = async (req, res) => {
  res.render("index", { message: "" })
}

//POST
exports.login = async (req, res) => {
  const user = req.body.user

  const { email, password } = user

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
