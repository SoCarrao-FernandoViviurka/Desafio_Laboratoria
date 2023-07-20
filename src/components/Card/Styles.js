import { styled } from "styled-components"

export const ContainerCard = styled.div`
    width: 90vw;
    border-radius: 20px;
    background-color: rgb(165, 163, 163, 29%);
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (min-width: 640px){
        width: ${props => props.cardView === "horizontal" ? "290px": "90vw"};
    }

`;
export const Section = styled.div`
    &.img-infos{
        width: 100%;
        border-radius: 20px;

        display: flex;
        flex-direction: ${props => props.cardView === "horizontal" ? "column": "row"};

        @media (min-width: 640px){
            width: ${props => props.cardView === "horizontal" ? "290px": "90vw"};
        }

        
    }
    &.img{
        background-color: #FDE535;
        width: ${props => props.cardView === "horizontal" ? "100%" : "50%"};
        
        border-radius: 10px;
        @media (min-width: 640px){
            width: ${props => props.cardView === "horizontal" ? "100%" : "30%"};
        }

    }
    &.info-cars{
        
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 10px 10px;
        justify-content: space-around;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

    }
    &.description{
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        padding: 8px 0;
    }

    &.city-like{
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border-top: 1px solid #8C8C88;
        align-items: center;

        p{
            font-size: 1.2rem;
        }
        i{
            font-size: 1.6rem;
        }
    }
    &.city{
        display: flex;
        gap: 5px;
        align-items: center;
}

`;
export const Image = styled.img`
    width: 100%;
    height: 80%;
    border-radius: 10px;
    @media (min-width: 7200px){
        height: auto;
    }

`;
export const Price = styled.h2`
    padding: 10px ;
    font-size: ${props => props.cardView === "horizontal" ? "2.2rem" : "1.6rem"};
    color: #000;
    @media (min-width: 520px){
        font-size: 2.2rem;
    }
`;
export const Marca = styled.h1`
    font-size:2.2rem;
    white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

`;

export const Modelo = styled.h3`
    font-size: 1.6rem;
    color: #8C8C88;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    
`;
export const DivInfo = styled.div`
    background-color: #7C7A6D;
    min-width:50px;
    min-height:20px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1px;
    @media (min-width: 640px){
        min-width:100px;
    }
    
`;
export const Info = styled.p`
    color: #fff;
    font-weight:500;
    font-size: 1rem;
    @media (min-width: 640px){
        font-size: 1.3rem;
    }
`;
export const DivButton = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2px;
    
`;
