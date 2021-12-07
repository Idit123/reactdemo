import styled from "styled-components"

export const LoginStyle = styled.div`
  .container {
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .box {
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
      .submit {
        padding: 10px;
        display: flex;
        justify-content: center;
      }
    }
  }
`
