import { styled } from "styled-components"

export const StyledButton = styled.button`
    &.theme{
        width: 40px;
        height: 40px;
        margin-right: 20px;
        border: none;
        outline: none;
        border-radius: 10px;
        background-color: #555555;
        opacity: .8;
        color: #fff;
        font-size: 1.8rem;
    }
    &.cardView{
        width: 40px;
        height: 40px;
        border: none;
        background-color: transparent;
        font-size: 2rem;
        margin-left: 7px;
        
    
    }
    &.finan, &.contact{
    width: 100%;
    height: 25px;
    border-radius: 5px;
    outline: none;
    font-weight: 700;
    font-size: 1.1rem;
    @media (min-width: 440px){
            font-size: 1.4rem;
            height: 35px;
            border-radius: 10px;
        }
    &:hover{
            background-color: #FDE535;
            border-color: #FDE535;
            color: #000;
           
    }
    &:active{
        opacity: .8;
    }
    }


`;