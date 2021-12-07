import styled from "styled-components"

export const Navbar = styled.div`
  background-color: #fdefe1;
  padding: 15px 0px;
  .container {
    width: 85%;
    display: flex;
    align-items: center;

    img {
      width: 16%;
      height: 15%;
      &:hover {
        cursor: pointer;
      }
    }

    .navbar {
      display: flex;
      padding: 5px 17px;
      width: 100%;
      margin-left: 15px;
      ul {
        margin: 0px;
        display: flex;
        li {
          a {
            text-decoration: none;
            color: black;
            &:hover {
              color: #f79421;
            }
          }
          font-size: 16px;
          list-style: none;
          padding: 5px 13px;
        }
      }
      button {
        padding: 5px 15px;
        font-size: 18px;
        background-color: #f47f0b;
        border: 1px solid;
        border-radius: 5px;
        &:hover {
          background-color: #f9a94d;
        }
        a {
          text-decoration: none;
          color: white;
        }
      }
    }
  }
`
