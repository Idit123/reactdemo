import React, { useState } from "react"
import Axios from "axios"
import { RegisterStyle } from "../style/register.style"

export default function RegisterForm() {
  const user = {
    username: "",
    email: "",
    password: "",
    checkvalue: "",
    gender: "",
    state: "",
  }
  const [formValues, setformValues] = useState(user)
  const [formErrors, setformErrors] = useState({})
  const [checkValue, setCheckValue] = useState([])
  const [loginStatus, setLoginStatus] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setformValues({ ...formValues, [name]: value })
  }

  const handleCheck = (e) => {
    const { checked, value } = e.target
    if (checked) {
      checkValue.push(value)
    } else {
      const index = checkValue.indexOf(value)
      checkValue.splice(index, 1)
    }
    setCheckValue(checkValue)
  }

  const validate = (values, checkvalues) => {
    const errors = {}
    const regexUserName = /^\S*$/
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (!values.username) {
      errors.username = "*Please enter your username."
    } else if (!regexUserName.test(values.username)) {
      errors.username = "*Please enter valid username."
    }
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
    if (!checkvalues) {
      errors.checkValue = "*Please select your languages."
    }
    if (!values.gender) {
      errors.gender = "*Please select your gender."
    }
    if (!values.state) {
      errors.state = "*Please select your state."
    }
    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    formValues.checkvalue = checkValue.join()
    setformErrors(validate(formValues, formValues.checkvalue))
    Axios.post("http://localhost:9000/register", {
      userDetails: formValues,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message)
      } else {
        setLoginStatus(response.data.username)
      }
    })
  }

  return (
    <RegisterStyle>
      <div className="container">
        <div className="registrationForm">
          <form onSubmit={handleSubmit}>
            <h3 className="success-message">{loginStatus}</h3>
            <h1>Register</h1>
            <div className="input-data">
              <label>Name: </label>
              <input
                type="text"
                name="username"
                value={formValues.username}
                onChange={handleChange}
              />
            </div>

            <p>{formErrors.username}</p>

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
            <div className="formsection">
              <div className="SelectCheckBox">
                <label>Languages</label>
                <div className="checkbox">
                  <label>
                    <input
                      type="checkbox"
                      value="English"
                      name="check"
                      onChange={handleCheck}
                    />
                    English
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input
                      type="checkbox"
                      value="Gujrati"
                      name="check"
                      onChange={handleCheck}
                    />
                    Gujarati
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input
                      type="checkbox"
                      value="Hindi"
                      name="check"
                      onChange={handleCheck}
                    />
                    Hindi
                  </label>
                </div>
              </div>
              <div className="radiobutton">
                <label className="radiolabel">Gender</label>
                <div className="radio-check">
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      onChange={handleChange}
                    />
                    Male
                  </label>
                </div>
                <div className="radio-check">
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      onChange={handleChange}
                    />
                    Female
                  </label>
                </div>
              </div>
              <div className="dropdown">
                <select
                  name="state"
                  value={formValues.state}
                  onChange={handleChange}
                >
                  <option>City</option>
                  <option value="Rajkot">Rajkot</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Vadodara">Vadodara</option>
                  <option value="Surat">Surat</option>
                  <option value="Jamnagar">Jamnagar</option>
                </select>
              </div>
            </div>
            <div className="error-message">
              <span>{formErrors.checkValue}</span>
            </div>
            <div className="error-message">
              <span>{formErrors.gender}</span>
            </div>
            <div className="error-message">
              <span>{formErrors.state}</span>
            </div>
            <div className="submit">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </RegisterStyle>
  )
}
