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
    profile_image: "",
  }
  const [profileImage, setProfileImage] = useState("")
  const [imageData, setImageData] = useState()
  const [formErrors, setFormErrors] = useState({})
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

  const validate = (values, image) => {
    const regexUserName = /^\S*$/
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (!image) {
      setFormErrors({ profile_image: "*Please upload profile image." })
    } else if (!values.username) {
      setFormErrors({ username: "*Please enter your username." })
    } else if (!regexUserName.test(values.username)) {
      setFormErrors({ username: "*Please enter valid username." })
    } else if (!values.email) {
      setFormErrors({ email: "*Please enter your email Address." })
    } else if (!regexEmail.test(values.email)) {
      setFormErrors({ email: "*Please enter valid email address." })
    } else if (!values.password) {
      setFormErrors({ password: "*Please enter your password." })
    } else if (values.password.length < 8) {
      setFormErrors({ password: "*Please add at least 8 charachter." })
    } else if (values.password.length > 15) {
      setFormErrors({ password: "*Please add maximum 15 charachter." })
    } else if (!values.checkvalue) {
      setFormErrors({ checkValue: "*Please select your languages." })
    } else if (!values.gender) {
      setFormErrors({ gender: "*Please select your gender." })
    } else if (!values.state) {
      setFormErrors({ state: "*Please select your state." })
    } else if (values.state === "City") {
      setFormErrors({ state: "*Please select your state." })
    } else {
      setFormErrors("")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    formValues.checkvalue = checkValue.join()
    console.log(imageData)
    Axios.post("http://localhost:9000/upload", imageData)
      .then((response) => {
        console.log(response)
        setProfileImage({ url: response.data.file })
      })
      .catch((error) => {
        console.log(error)
      })
    formValues.profile_image = profileImage.url

    // if (validate(formValues, imageData)) {
    //   Axios.post("http://localhost:9000/register", {
    //     userDetails: formValues,
    //   }).then((response) => {
    //     if (response.data.success) {
    //       setLoginStatus({ success: response.data.success })
    //       setformValues("")
    //       e.target.reset()
    //     } else {
    //       setLoginStatus({ errors: response.data.message })
    //     }
    //   })
    // } else {
    //   console.log("Error")
    // }
  }

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0]
      if (image.type.match(/.(jpg|jpeg|png|gif)$/i)) {
        const formData = new FormData()
        formData.append("data", image)
        formData.append("title", "idit")
        // for (var value of formData.values()) {
        //   console.log(value)
        // }
        setImageData(formData)
      } else {
        console.log("data not send")
        setFormErrors({
          profile_image: "*Please upload vaild extension profile image.",
        })
      }
    } else {
      setFormErrors({
        profile_image: "*Image not found.",
      })
    }
  }
  return (
    <RegisterStyle>
      <div className="container">
        <div className="registrationForm">
          <form onSubmit={handleSubmit}>
            <h2 className="success-message">{loginStatus.success}</h2>
            <h3 className="error-message">{loginStatus.errors}</h3>
            <div className="title-header">
              <h1 className="title">Register</h1>
              {profileImage?.url && <img src={profileImage.url} alt="" />}
            </div>
            <div className="image-data">
              <label>Profile Image:</label>
              <input type="file" name="myImage" onChange={onImageChange} />
            </div>
            {formErrors?.profile_image && <p>{formErrors.profile_image}</p>}
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
