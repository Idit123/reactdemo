import styled from "styled-components"

export const Section1Style = styled.div`
  .container {
    width: 100%;
    height: 80vh;
    display: flex;
    padding-top: 20px;
    //justify-content: center;
    .row {
      width: 100%;
      display: flex;
      align-items: center;
      .details {
        width: 40%;
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
        width: 60%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`
