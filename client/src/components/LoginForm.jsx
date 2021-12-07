import React, { useState } from "react"
import Axios from "axios"
import { LoginStyle } from "../style/login.style"

export default function LoginForm() {
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
        console.log(loginStatus)
      } else {
        setLoginStatus(response.data[0].username)
      }
    })
  }
  return (
    <LoginStyle>
      <div className="container">
        <div className="box">
          <form>
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
