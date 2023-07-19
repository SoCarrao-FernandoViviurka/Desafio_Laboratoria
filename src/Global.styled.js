import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;   
  }

  body {
      font-family: Arial, Helvetica, sans-serif;
      background-color: red;
      
    }

  a {
    text-decoration: none;
  }
  
  li{
    list-style:none;
    color: inherit
  }

  button{
    cursor: pointer;
    border-radius: 10px;
    text-transform: uppercase;
    border: none;   
  }

  input, select{
    border-radius: 10px;
    border: none;
  }

  :root{
    --yellow: #ffff01;
    
  }
 `;
