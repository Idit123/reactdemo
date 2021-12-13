import styled from "styled-components"

export const RegisterStyle = styled.div`
.container {
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  .registrationForm {
    width: auto;
    border: 1px solid #000;
    border-radius: 5px;
    form {
      font-size: 18px;
      padding: 20px 25px;
      .title-header {
        display: flex;
        align-items: center;
        justify-content:center;
        .title {
          width: 100%;
        }
        img {
          width: 125px;
          height: 125px;
          border-radius: 50%;
        }
      }
      .success-message {
        color: green;
      }
      .error-message {
        color: red;
        font-size: 20px;
      }
      .image-data {
        display: flex;
        align-items: center;
        padding: 5px;
        label {
          width: 40%;
          text-align: center;
        }
        input {
          width: 100%;
          font-size: 17px;
        }
      }
      .input-data {
        display: flex;
        align-items: center;
        padding: 5px;
        label {
          width: 40%;
          text-align: center;
          jus
        }
        input {
          width: 100%;
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
          margin-left: 20px;
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
          margin-left: 20px;
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
