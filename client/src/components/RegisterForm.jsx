import React, { useState } from "react"
import Axios from "axios"
import { RegisterStyle } from "../style/register.style"

export default function RegisterForm() {
  const [username, setUserName] = useState("")
  const [useremail, setUserEmail] = useState("")
  const [password, setPassword] = useState("")
  const [currentRadioValue, setRadioValue] = useState("")
  const [Check1Value, setCheck1Value] = useState(false)
  const [Check2Value, setCheck2Value] = useState(false)
  const [Check3Value, setCheck3Value] = useState(false)
  const [DropValue, setDropValue] = useState("")

  const [loginStatus, setLoginStatus] = useState("")

  Axios.defaults.withCredentials = true

  const register = (e) => {
    e.preventDefault()
    Axios.post("http://localhost:9000/register", {
      username: username,
      email: useremail,
      password: password,
      gender: currentRadioValue,
      check1: Check1Value,
      check2: Check2Value,
      check3: Check3Value,
      state: DropValue,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message)
      } else {
        setLoginStatus(response.data.username)
      }
    })
    setUserName("")
    setUserEmail("")
    setPassword("")
    setRadioValue("")
    setCheck1Value(false)
    setCheck2Value(false)
    setCheck3Value(false)
    setDropValue("")
  }

  return (
    <RegisterStyle>
      <div className="container">
        <div className="registration">
          <form onSubmit={register}>
            <p>{loginStatus}</p>
            <h2>Register</h2>
            <div className="row">
              <label className="name">Name</label>
              <div className="col">
                <input
                  type="text"
                  value={username}
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
                  value={useremail}
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
                  value={password}
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
                    checked={Check1Value}
                    onChange={(e) => {
                      setCheck1Value(!Check1Value)
                    }}
                  />
                  <label className="form-check-label">English</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Gujrati"
                    id="check2"
                    checked={Check2Value}
                    onChange={(e) => {
                      setCheck2Value(!Check2Value)
                    }}
                  />
                  <label className="form-check-label">Gujarati</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Hindi"
                    id="check3"
                    checked={Check3Value}
                    onChange={(e) => {
                      setCheck3Value(!Check3Value)
                    }}
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
                    value="Male"
                    onChange={(e) => {
                      setRadioValue(e.target.value)
                    }}
                  />
                  <label className="form-check-label">Male</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    value="Female"
                    onChange={(e) => {
                      setRadioValue(e.target.value)
                    }}
                  />
                  <label className="form-check-label">Female</label>
                </div>
              </div>
              <div className="dropdown">
                <select
                  value={DropValue}
                  onChange={(e) => {
                    setDropValue(e.target.value)
                  }}
                >
                  <option value="Rajkot">Rajkot</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Vadodara">Vadodara</option>
                  <option value="Surat">Surat</option>
                  <option value="Jamnagar">Jamnagar</option>
                </select>
              </div>
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
