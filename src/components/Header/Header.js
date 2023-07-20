import React from "react";
import Button from "../Button/Button";
import {Container, Logo} from "./Styles"
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = ({theme,setTheme}) => { 
    const changeTheme = (currentTheme) => {
        if (currentTheme === "light" ) {
            window.localStorage.setItem("theme", "dark");
            setTheme("dark");
          } else {
            window.localStorage.setItem("theme", "light");
            setTheme("light");
          }
    }
    return(
        <Container>
            <Logo src="https://github.com/ajuliamm/ajuliamm/assets/93016620/949384eb-8076-4544-9420-5ad611795778"/>
            <Button 
            typeBtn="theme" 
            onClick={()=>changeTheme(theme)}
            content={theme==="dark"? <i className="bi bi-brightness-high-fill"></i>:<i className="bi bi-moon-fill"></i>}/>
        </Container>
    )
}
export default Header;
