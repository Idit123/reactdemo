import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Axios from "axios"
import { cityDataForRegister } from "../utils/CityStaticData"
import { RegisterStyle } from "../style/register.style"

export default function App() {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm()
  // const user = {
  //   username: "",
  //   email: "",
  //   password: "",
  //   languages: "",
  //   gender: "",
  //   city: "",
  // }
  // const [formValues, setformValues] = useState(user)
  const [profileImage, setProfileImage] = useState("")
  const [loginStatus, setLoginStatus] = useState("")

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0]
      if (image.type.match(/.(jpg|jpeg|png|gif)$/i)) {
        clearErrors("profileImage")
        setProfileImage({ imageData: image, url: URL.createObjectURL(image) })
      } else {
        setError("profileImage", {
          type: "manual",
          message: "*Please upload vaild extension profile image.",
        })
      }
    } else {
      setError("profileImage", {
        type: "manual",
        message: "*Image not found.",
      })
    }
  }

  const onSubmit = (data) => {
    //<--How to update state instantly->
    // 1. useRef
    // 2. useEffect
    // 3. using variable}

    // 3.{setformValues(data)
    // console.log("before formValues :: ", formValues)
    // let a = formValues
    // setformValues((oldValues) => {
    //   a = { ...oldValues }
    //   return a
    // })
    // console.log("after formValues :: ", a)

    const { image, languages, ...otherData } = data
    const language = languages.join()

    const userData = new FormData()
    userData.append("user", JSON.stringify({ ...otherData, language }))
    userData.append("profileImage", profileImage.imageData)

    Axios.post("http://localhost:9000/register", userData)
      .then((response) => {
        if (response.data.success) {
          setLoginStatus({ success: response.data.success })
          // setformValues(user)
          reset()
          setProfileImage("")
        } else {
          setLoginStatus({ errors: response.data.message })
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <RegisterStyle>
      <div className="container">
        <div className="registrationForm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="success-message">{loginStatus.success}</h2>
            <h3 className="error-message">{loginStatus.errors}</h3>
            <div className="title-header">
              <h1 className="title">Register</h1>
              {profileImage?.url && <img src={profileImage.url} alt="" />}
            </div>
            <div className="image-data">
              <label>Profile Image:</label>
              <input
                {...register("profileImage", {
                  required: "*Please upload profile image.",
                })}
                type="file"
                name="profileImage"
                onChange={onImageChange}
              />
            </div>
            {errors.profileImage && <p>{errors.profileImage.message}</p>}
            <div className="input-data">
              <label>Name: </label>
              <input
                {...register("username", {
                  required: "*Please enter your username.",
                  pattern: {
                    value: /^\S*$/,
                    message: "*Please enter valid username.",
                  },
                })}
              />
            </div>
            {errors.username && <p>{errors.username.message}</p>}
            <div className="input-data">
              <label>Email:</label>
              <input
                {...register("email", {
                  required: "*Please enter your email Address.",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "*Please enter valid email address.",
                  },
                })}
              />
            </div>
            {errors.email && <p>{errors.email.message}</p>}
            <div className="input-data">
              <label>Password:</label>
              <input
                type="password"
                {...register("password", {
                  required: "*Please enter your password.",
                  minLength: {
                    value: 8,
                    message: "*Please add at least 8 charachter.",
                  },
                  maxLength: {
                    value: 15,
                    message: "*Please add maximum 15 charachter.",
                  },
                })}
              />
            </div>
            {errors.password && <p>{errors.password.message}</p>}
            <div className="formsection">
              <div className="SelectCheckBox">
                <label>Languages</label>
                <div className="checkbox">
                  <label>
                    <input
                      {...register("languages", {
                        required: "*Please select your languages.",
                      })}
                      type="checkbox"
                      value="English"
                    />
                    English
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input
                      {...register("languages")}
                      type="checkbox"
                      value="Gujarati"
                    />
                    Gujarati
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input
                      {...register("languages")}
                      type="checkbox"
                      value="Hindi"
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
                      {...register("gender", {
                        required: "*Please select your gender.",
                      })}
                      type="radio"
                      value="Male"
                    />
                    Male
                  </label>
                </div>
                <div className="radio-check">
                  <label>
                    <input
                      {...register("gender")}
                      type="radio"
                      value="Female"
                    />
                    Female
                  </label>
                </div>
              </div>
              <div className="dropdown">
                <select
                  {...register("city", {
                    required: "*Please select your city.",
                  })}
                >
                  <option value="">Select Your City</option>
                  {cityDataForRegister.map((city) => (
                    <option value={city.value}>{city.name}</option>
                  ))}
                </select>
              </div>
            </div>
            {errors.languages && <p>{errors.languages.message}</p>}
            {errors.gender && <p>{errors.gender.message}</p>}
            {errors.city && <p>{errors.city.message}</p>}
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
