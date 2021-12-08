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
        font-size: 18px;
        padding: 20px 25px;
        .error-message {
          color: red;
        }
        .input-data {
          display: flex;
          align-items: center;
          width: 100%;
          label {
            text-align: center;
            width: 30%;
            margin-right: 5px;
          }
        }
        p {
          color: red;
          text-align: center;
        }
        .submit {
          display: flex;
          justify-content: center;
        }
      }
    }
  }
`
