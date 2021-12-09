import styled from "styled-components"

export const LoginStyle = styled.div`
  .container {
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .loginForm {
      border: 1px solid #000;
      border-radius: 5px;
      form {
        width: 100%;
        font-size: 18px;
        padding: 20px 25px;
        .success-message {
          color: green;
        }
        .error-message {
          color: red;
          font-size: 20px;
        }
        .input-data {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 5px;
          label {
            text-align: center;
            width: 35%;
            margin-right: 10px;
          }
        }
        p {
          color: red;
          text-align: right;
          margin: 0px;
        }
        .submit {
          padding: 10px;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
`
