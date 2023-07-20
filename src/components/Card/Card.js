import React from "react";
import {ContainerCard, Section, Image, Price, Marca, Modelo, DivInfo, Info, DivButton} from "./Styles"
import Button from "../Button/Button";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Card = ({car, cardView}) => {

    return(
        <ContainerCard cardView={cardView} >
            <Section className="img-infos" cardView={cardView}>
            <Section className="img" cardView={cardView}>
                <Image src={car.veiculo_foto[0]}/>
                <Price>{parseFloat(car.veiculo_valor).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Price>
            </Section>
            <Section className="info-cars" cardView={cardView}>
                <Marca>{car.veiculo_marca} {car.modelo_nome_pai}</Marca>
                <Modelo>{car.veiculo_modelo}</Modelo>
              

                <Section className="description">
                    <DivInfo>
                        <Info>{car.veiculo_km}km</Info>
                    </DivInfo>
                    <DivInfo>
                        <Info>{car.veiculo_cambio}</Info>
                    </DivInfo>
                    <DivInfo>
                        <Info>{car.ano_fabricacao}/{car.ano_modelo}</Info>
                    </DivInfo>
                    <DivInfo>
                        <Info>{car.veiculo_combustivel}</Info>
                    </DivInfo>
                </Section>
                <DivButton>
                    <Button typeBtn="contact" content="Entrar em contato"/>
                    <Button typeBtn="finan" content="Simular financiamento"/>
                </DivButton>
               
            </Section>
            </Section>
            <Section className="city-like" cardView={cardView}>
            <Section className="city">
                <i className="bi bi-geo-alt"></i>
                <p>{car.cidade_nome}</p>
            </Section>
            <i className="bi bi-heart"></i>
            </Section>
        </ContainerCard>
    )
}
export default Card;