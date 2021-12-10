const {
  signup,
  login,
  loginPage,
  upload,
} = require("../controllers/user.controller")

const router = require("express").Router()

const isAuthorized = (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user })
  } else {
    res.send({ loggedIn: false })
  }
}

router.get("/login", isAuthorized, loginPage)
router.post("/register", signup)
router.post("/login", login)
router.post("/upload", upload)

module.exports = router
