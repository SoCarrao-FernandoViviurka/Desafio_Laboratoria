import { styled } from 'styled-components';
import { FaMapMarkerAlt } from "react-icons/fa";

export const ListaDeCards = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 600px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 15px;
    }

    @media (min-width: 1200px) {
        gap: 55px;
    }
`;

export const Card = styled.div `
    display: flex;
    flex-direction: ${(props) => (props.layout === 'horizontal' ? 'row' : 'column')};
    width: 90vw; 
    max-width: ${(props) => (props.layout === 'horizontal' ? '348px' : '280px')};
    height: ${(props) => (props.layout === 'horizontal' ? '170px' : '476px')};
    background-color: #EDDA27;
    border-radius: 20px;
    margin: 20px 0 0px 0;
    box-shadow: 3px 3px 3px 0px rgba(237, 218, 39, 0.5);
    position: relative;

    @media (min-width: 360px) {
        height: ${(props) => (props.layout === 'horizontal' ? '200px' : '476px')};
    }
`;

export const ImagemCarro = styled.img `
    width: 90vw; 
    max-width: ${(props) => (props.layout === 'horizontal' ? '160px' : '280px')};
    height: ${(props) => (props.layout === 'horizontal' ? '170px' : '217px')};
    border-radius: ${(props) => (props.layout === 'horizontal' ? '20px 0 0 20px' : '20px 20px 0 0')};

    @media (min-width: 360px) {
        height: ${(props) => (props.layout === 'horizontal' ? '200px' : '217px')};
    }
`;

export const Cidade = styled.p `
    display: flex;
    align-items: center;
    position: absolute;
    margin: 0;
    top: 8px;
    left: 8px;
    background-color: rgba(255, 255, 255, 0.8);
    color: #2a374f;
    font-size: 9px;
    font-weight: bold;
    padding: 3px;
    border-radius: 2px;
`;

export const IconeLocation = styled(FaMapMarkerAlt) `
    font-size: 10px;
    color: #2a374f;
    margin-right: 5px;
`;

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Marca = styled.p `
    margin: ${(props) => (props.layout === 'horizontal' ? '5px 5px 0 5px' : '7px 12px 0 10px')};
    font-size: ${(props) => (props.layout === 'horizontal' ? '15px' : '22px')};
    width: ${(props) => (props.layout === 'horizontal' ? '97px' : 'auto')};
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (min-width: 360px) {
        font-size: ${(props) => (props.layout === 'horizontal' ? '18px' : '22px')};
        width: ${(props) => (props.layout === 'horizontal' ? '153px' : 'auto')};
    }
`;

export const Modelo = styled.p `
    margin: ${(props) => (props.layout === 'horizontal' ? '0px 5px 0 5px' : '0 12px 0 12px')};
    font-size: ${(props) => (props.layout === 'horizontal' ? '11px' : '16px')};
    width: ${(props) => (props.layout === 'horizontal' ? '110px' : 'auto')};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (min-width: 360px) {
        font-size: ${(props) => (props.layout === 'horizontal' ? '12px' : '16px')};
        width: ${(props) => (props.layout === 'horizontal' ? '155px' : 'auto')};
    }
`;

export const InformacoesDetalhes = styled.div `
    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.layout === 'horizontal' ? 'flex-start' : 'space-evenly')};
    margin: ${(props) => (props.layout === 'horizontal' ? '2px 5px 0 5px' : '10px 0 0 0')};
    flex-wrap: ${(props) => (props.layout === 'horizontal' ? 'wrap' : 'nowrap')};

    p {
        margin: ${(props) => (props.layout === 'horizontal' ? '3px 2px 0 0' : '0px')};
        background-color: #020101;
        color: #ffffff;
        border-radius: 20px;
        padding: ${(props) => (props.layout === 'horizontal' ? '2px 4px' : '5px 7px')};
        font-size: ${(props) => (props.layout === 'horizontal' ? '8px' : '13px')};

        @media (min-width: 360px) {
            font-size: ${(props) => (props.layout === 'horizontal' ? '12px' : '13px')};
        }
    }
`;

export const Valor = styled.p `
    margin: ${(props) => (props.layout === 'horizontal' ? '5px 0 0 0' : '10px 0 0 0')};
    display: flex;
    justify-content: center;
    font-size: ${(props) => (props.layout === 'horizontal' ? '17px' : '25px')};
    font-weight: bold;

    @media (min-width: 360px) {
        font-size: ${(props) => (props.layout === 'horizontal' ? '20px' : '25px')};
    }
`;

export const BotaoContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const Botao = styled.button `
    background-color: ${props => props.primary ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.9)'};
    width: 90vw; 
    max-width: ${(props) => (props.layout === 'horizontal' ? '117px' : '231px')};
    padding: ${(props) => (props.layout === 'horizontal' ? '5px 10px' : ' 10px 20px')};
    border: ${props => props.primary ? '1px solid #ffffff' : 'none'};
    border-radius: 5px;
    cursor: pointer;
    font-size: ${(props) => (props.layout === 'horizontal' ? ' 9.6px' : ' 16px')};
    margin-top: ${(props) => (props.layout === 'horizontal' ? '5px' : ' 10px')};

    @media (min-width: 360px) {
        max-width: ${(props) => (props.layout === 'horizontal' ? '151px' : '231px')};
        font-size: ${(props) => (props.layout === 'horizontal' ? ' 13px' : ' 16px')};
        margin-top: ${(props) => (props.layout === 'horizontal' ? '8px' : ' 10px')};
    }
`;