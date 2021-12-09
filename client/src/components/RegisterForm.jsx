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
  const error = { username: "", email: "", password: "" }
  const image = { preview: "", src: "" }
  const [profileImage, setProfileImage] = useState(image)
  const [formErrors, setFormErrors] = useState(error)
  const [formValues, setformValues] = useState(user)
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

  const validate = (values) => {
    const regexUserName = /^\S*$/
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (!values.username) {
      setFormErrors({ username: "*Please enter your username." })
      return false
    } else if (!regexUserName.test(values.username)) {
      setFormErrors({ username: "*Please enter valid username." })
      return false
    } else if (!values.email) {
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
    } else if (!values.checkvalue) {
      setFormErrors({ checkValue: "*Please select your languages." })
      return false
    } else if (!values.gender) {
      setFormErrors({ gender: "*Please select your gender." })
      return false
    } else if (!values.state) {
      setFormErrors({ state: "*Please select your state." })
      return false
    } else if (values.state === "City") {
      setFormErrors({ state: "*Please select your state." })
      return false
    } else {
      setFormErrors("")
      return true
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    formValues.checkvalue = checkValue.join()
    if (validate(formValues)) {
      Axios.post("http://localhost:9000/register", {
        userDetails: formValues,
      }).then((response) => {
        if (response.data.success) {
          setLoginStatus({ success: response.data.success })
          setformValues("")
          e.target.reset()
        } else {
          setLoginStatus({ errors: response.data.message })
        }
      })
    } else {
      console.log("Error")
    }
  }

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0]
      // setProfileImage({ image: URL.createObjectURL(img) })
      setProfileImage({ preview: img, src: URL.createObjectURL(img) })
    }
    console.log(e.target.files[0])
    console.log(profileImage)
  }
  return (
    <RegisterStyle>
      <div className="container">
        <div className="registrationForm">
          <form onSubmit={handleSubmit}>
            <h2 className="success-message">{loginStatus.success}</h2>
            <h3 className="error-message">{loginStatus.errors}</h3>
            <h1>Register</h1>
            <div className="image-data">
              <label>Profile Image:</label>
              <div className="preview-image">
                <input type="file" name="myImage" onChange={onImageChange} />
                <img src={profileImage.src} alt="" />
              </div>
            </div>
            <div className="input-data">
              <label>Name: </label>
              <input
                type="text"
                name="username"
                value={formValues.username}
                onChange={handleChange}
              />
            </div>
            {formErrors?.username && <p>{formErrors.username}</p>}
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
                  <option value="City">City</option>
                  <option value="Rajkot">Rajkot</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Vadodara">Vadodara</option>
                  <option value="Surat">Surat</option>
                  <option value="Jamnagar">Jamnagar</option>
                </select>
              </div>
            </div>
            {formErrors.checkValue && <p>{formErrors.checkValue}</p>}
            {formErrors.gender && <p>{formErrors.gender}</p>}
            {formErrors.state && <p>{formErrors.state}</p>}
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
