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
        .error-message {
          color: red;
          font-size: 20px;
        }
        .image-data {
          width: 100%;
          padding: 5px;
          display: flex;
          align-items: center;
          label {
            width: 35%;
            text-align: center;
          }
          .preview-image {
            width: 65%;
            display: flex;
            justify-content: center;
            align-items: center;
            input {
              width: 60%;
              font-size: 18px;
            }
            img {
              width: 100px;
              height: 100px;
              border-radius: 50%;
            }
          }
        }
        .input-data {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 5px;
          label {
            text-align: center;
            width: 35%;
          }
          input {
            width: 60%;
          }
        }
        p {
          color: red;
          text-align: right;
          margin: 0px;
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
        .submit {
          padding: 10px;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
`
