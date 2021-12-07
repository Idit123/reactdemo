import styled from "styled-components"

export const RegisterStyle = styled.div`
  .container {
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .registration {
      border: 1px solid #000;
      border-radius: 5px;
      form {
        font-size: 18px;
        padding: 20px 25px;
      }
      .row {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 5px;
        label {
          width: 30%;
        }
      }
      .formsection {
        width: 100%;
        display: flex;
        align-items: center;
        .checkbox {
          .chklabel {
            font-size: 18px;
            padding: 5px;
          }
        }
        .radiobutton {
          margin-left: 40px;
          .radiolabel {
            font-size: 18px;
            padding: 5px;
          }
        }
        .dropdown {
          margin-left: 40px;
        }
      }
      .submit {
        padding: 10px;
        display: flex;
        text-decoration: none;
        justify-content: center;
      }
    }
  }
`
