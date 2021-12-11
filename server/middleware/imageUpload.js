const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", "Images"))
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + path.extname(file.mimetype))
  },
})
const uploadImage = multer({ storage: storage }).single("profileImage")

module.exports = uploadImage
