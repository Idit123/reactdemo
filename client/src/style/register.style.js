import styled from "styled-components"

export const RegisterStyle = styled.div`
  .container {
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .registrationForm {
      border: 1px solid #000;
      border-radius: 5px;
      form {
        width: 100%;
        font-size: 18px;
        padding: 20px 25px;
        .success-message {
          color: green;
        }
        .input-data {
          display: flex;
          align-items: center;
          width: 100%;
          label {
            text-align: center;
            width: 35%;
          }
        }
        p {
          color: red;
          text-align: center;
        }
        .formsection {
          width: 100%;
          display: flex;
          align-items: center;

          .SelectCheckBox {
            width: 100%;
            padding: 10px;
            .checkbox {
              input {
                margin-right: 10px;
              }
            }
          }
          .radiobutton {
            width: 100%;
            margin-left: 40px;
            .radiolabel {
              font-size: 18px;
              padding: 5px;
            }
            .radio-check {
              input {
                margin-right: 10px;
              }
            }
          }
          .dropdown {
            width: 100%;
            margin-left: 40px;
          }
        }
        .error-message {
          font-size: 12px;
          span {
            color: red;
            text-align: left;
          }
        }
        .submit {
          width: 100%;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
`
