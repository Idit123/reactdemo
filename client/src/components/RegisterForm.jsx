import React, { useState } from "react"
import Axios from "axios"
import { RegisterStyle } from "../style/register.style"

export default function RegisterForm() {
  const [username, setUserName] = useState("")
  const [useremail, setUserEmail] = useState("")
  const [password, setPassword] = useState("")
  Axios.defaults.withCredentials = true
  const register = (e) => {
    e.preventDefault()
    Axios.post("http://localhost:9000/register", {
      username: username,
      email: useremail,
      password: password,
    }).then((response) => {
      console.log(response)
    })
  }

  return (
    <RegisterStyle>
      <div className="container">
        <div className="registration">
          <form>
            <h2>Register</h2>
            <div className="row">
              <label className="name">Name</label>
              <div className="col">
                <input
                  type="text"
                  onChange={(e) => {
                    setUserName(e.target.value)
                  }}
                />
              </div>
            </div>
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
            <div className="formsection">
              <div className="checkbox">
                <label className="chklabel">Languages</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="English"
                    id="check1"
                  />
                  <label className="form-check-label">English</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Gujrati"
                    id="check2"
                  />
                  <label className="form-check-label">Gujarati</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Hindi"
                    id="check3"
                  />
                  <label className="form-check-label">Hindi</label>
                </div>
              </div>
              <div className="radiobutton">
                <label className="radiolabel">Gender</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label">Male</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label className="form-check-label">Female</label>
                </div>
              </div>
              <div className="dropdown">
                <select>
                  <option value="Rajkot">Rajkot</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Vadodara">Vadodara</option>
                  <option value="Surat">Surat</option>
                  <option value="Jamnagar">Jamnagar</option>
                </select>
              </div>
            </div>
            <div className="submit">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={register}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </RegisterStyle>
  )
}
