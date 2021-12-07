import React, { useState } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"
import { LoginStyle } from "../style/login.style"

// import { UseContext } from "../App"

export default function LoginForm() {
  // const { dispath } = useContext(UseContext)

  const Navigate = useNavigate()
  const [useremail, setUserEmail] = useState("")
  const [password, setPassword] = useState("")

  const [loginStatus, setLoginStatus] = useState("")

  const login = (e) => {
    e.preventDefault()
    Axios.post("http://localhost:9000/login", {
      email: useremail,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message)
      } else {
        // dispath({ type: "USER", payload: true })
        setLoginStatus(response.data.email)
        Navigate("/")
      }
    })
  }
  return (
    <LoginStyle>
      <div className="container">
        <div className="box">
          <form>
            <p>{loginStatus}</p>
            <h2>Login</h2>
            <div className="row">
              <label className="email">Email</label>
              <div className="col">
                <input
                  type="email"
                  onChange={(e) => {
                    setUserEmail(e.target.value)
                  }}
                />
              </div>
            </div>
            <div className="row">
              <label className="password">Password</label>
              <div className="col">
                <input
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                />
              </div>
            </div>
            <div className="submit">
              <button type="submit" className="btn btn-primary" onClick={login}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </LoginStyle>
  )
}
