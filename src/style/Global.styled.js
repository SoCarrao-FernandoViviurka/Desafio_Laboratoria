import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;   
  }

  body {
      font-family: Arial, Helvetica, sans-serif;      
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
    font-size: .7rem;
    border: none;  
    padding: .2rem; 
    color: var(--white);
    background-color: var(--blue);
    margin: .2rem;
    text-align: center;
  }

  select{
    border-radius: 10px;
    border: none;
  }

 

  :root{
    --yellow: #ffff01;
    --blue: #054F77;
    --white: #fff;
    --black: #131819;
    --darkBlue: #011425;
    
  }
 `;
