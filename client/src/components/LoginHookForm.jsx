import React, { useState } from "react"
import Axios from "axios"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { LoginStyle } from "../style/login.style"

export default function LoginForm() {
  const Navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const [loginStatus, setLoginStatus] = useState("")

  const onSubmit = (userData) => {
    Axios.post("http://localhost:9000/login", {
      user: userData,
    }).then((response) => {
      if (response.data.success) {
        reset()
        setLoginStatus({ success: response.data.success })
        Navigate("/")
      } else {
        setLoginStatus({ error: response.data.message })
      }
    })
  }
  return (
    <LoginStyle>
      <div className="container">
        <div className="loginForm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="success-message">{loginStatus.success}</h2>
            <h3 className="error-message">{loginStatus.error}</h3>
            <h1>Login</h1>
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
