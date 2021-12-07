require("dotenv").config()
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const session = require("express-session")
const userRouter = require("./routes/user.routes")
const app = express()

app.use(express.json())
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
)
app.use(bodyParser.urlencoded({ extended: true }))

app.use(
  session({
    key: "id",
    secret: "reactdemo",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
)

app.use("/", userRouter)

const port = process.env.MYSQL_PORT || 4000
app.listen(port, () => {
  console.log("server up and running on PORT :", port)
})
