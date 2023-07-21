import { FaBars, FaSearch } from "react-icons/fa";
import styled from 'styled-components';

export const LogoContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const IconeMenu = styled(FaBars)`
    font-size: 28px;
    color: #ffffff;
    margin-left: 12px;
    cursor: pointer;
`;

export const LogoImagem = styled.img `
    height: 70px;

    @media (max-width: 499px) {
        height: 50px;
        margin-top: 3.5vw;
    }

    @media (max-width: 999px) {
        height: 50px;
        margin-top: 2.5vw;
    }

    @media (min-width: 1000px) {
        height: 50px;
        margin-top: 1.5vw;
    }
`;

export const IconePesquisa = styled(FaSearch)`
    font-size: 26px;
    color: #ffffff;
    margin-right: 12px;
    cursor: pointer;
`;