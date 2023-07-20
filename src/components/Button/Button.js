import React from "react";
import {StyledButton} from "./Styles"
import 'bootstrap-icons/font/bootstrap-icons.css';

const Button = ({content, onClick, typeBtn}) => { 
      
    return(
        <StyledButton className={typeBtn} onClick={onClick}>
            {content}
        </StyledButton>
    )
}
export default Button;