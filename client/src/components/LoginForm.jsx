import React, { useState } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"
import { LoginStyle } from "../style/login.style"

export default function LoginForm() {
  const Navigate = useNavigate()

  const user = { email: "", password: "" }
  const [formValues, setformValues] = useState(user)
  const [formErrors, setformErrors] = useState({})
  const [loginStatus, setLoginStatus] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setformValues({ ...formValues, [name]: value })
  }

  const validate = (values) => {
    const errors = {}
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (!values.email) {
      errors.email = "*Please enter your email Address."
    } else if (!regexEmail.test(values.email)) {
      errors.email = "*Please enter valid email address."
    }
    if (!values.password) {
      errors.password = "*Please enter your password."
    } else if (values.password.length < 8) {
      errors.password = "*Please add at least 8 charachter."
    } else if (values.password.length > 15) {
      errors.password = "*Please add maximum 15 charachter."
    }
    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setformErrors(validate(formValues))
    Axios.post("http://localhost:9000/login", {
      userDetails: formValues,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message)
      } else {
        setLoginStatus(response.data.success)
        Navigate("/")
      }
    })
  }
  return (
    <LoginStyle>
      <div className="container">
        <div className="loginForm">
          <form onSubmit={handleSubmit}>
            <h3 className="error-message">{loginStatus}</h3>
            <h1>Login</h1>
            <div className="input-data">
              <label>Email:</label>
              <input
                type="text"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.email}</p>
            <div className="input-data">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.password}</p>
            <div className="submit">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </LoginStyle>
  )
}
