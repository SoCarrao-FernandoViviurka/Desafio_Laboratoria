import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;   
  }

  body {
      font-family: Arial, Helvetica, sans-serif;
      background-color: var(--black);
      
    }

  a {
    text-decoration: none;
    color: inherit
  }
  
  li{
    list-style:none;
    color: inherit
  }

  button{
    cursor: pointer;
    border-radius: 5px;
    text-transform: uppercase;
    border: none;  
    padding: .4rem; 
    color: var(--white);
    background-color: var(--blue);
    margin: .2rem;
  }

  input, select{
    border-radius: 10px;
    border: none;
  }

  :root{
    --yellow: #ffff01;
    --blue: #054F77;
    --white: #fff;
    --black: #131819;
    
  }
 `;
