import React, { useState } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"
import { LoginStyle } from "../style/login.style"

export default function LoginForm() {
  const Navigate = useNavigate()

  const user = { email: "", password: "" }
  const error = { email: "", password: "" }
  const [formValues, setformValues] = useState(user)
  const [formErrors, setFormErrors] = useState(error)
  const [loginStatus, setLoginStatus] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setformValues({ ...formValues, [name]: value })
  }

  const validate = (values) => {
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (!values.email) {
      setFormErrors({ email: "*Please enter your email Address." })
      return false
    } else if (!regexEmail.test(values.email)) {
      setFormErrors({ email: "*Please enter valid email address." })
      return false
    } else if (!values.password) {
      setFormErrors({ password: "*Please enter your password." })
      return false
    } else if (values.password.length < 8) {
      setFormErrors({ password: "*Please add at least 8 charachter." })
      return false
    } else if (values.password.length > 15) {
      setFormErrors({ password: "*Please add maximum 15 charachter." })
      return false
    } else {
      setFormErrors("")
      return true
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate(formValues)) {
      Axios.post("http://localhost:9000/login", {
        user: formValues,
      }).then((response) => {
        if (response.data.success) {
          setLoginStatus({ success: response.data.success })
          Navigate("/")
        } else {
          setLoginStatus({ error: response.data.message })
        }
      })
    } else {
      console.log("Error")
    }
  }

  return (
    <LoginStyle>
      <div className="container">
        <div className="loginForm">
          <form onSubmit={handleSubmit}>
            <h2 className="success-message">{loginStatus.success}</h2>
            <h3 className="error-message">{loginStatus.error}</h3>
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
            {formErrors?.email && <p>{formErrors.email}</p>}
            <div className="input-data">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            {formErrors?.password && <p>{formErrors.password}</p>}
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
