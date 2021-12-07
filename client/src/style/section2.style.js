import styled from "styled-components"

export const Section2Style = styled.div`
  .container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    .row {
      width: 100%;
      .details {
        width: 60%;
        .text {
          margin-top: 25px;
          opacity: 0.6;
        }
        button {
          padding: 10px 25px;
          font-size: 18px;
          background-color: #f47f0b;
          border: 1px solid;
          border-radius: 5px;
          &:hover {
            background-color: #f9a94d;
          }
        }
      }
      .image {
        width: 40%;
        img {
          width: 100%;
        }
      }
    }
  }
`
