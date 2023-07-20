import { useState } from "react";
import { register } from "swiper/element/bundle";
register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

import data from "../../data/data.json";
import {
  ButtonCurrentPage,
  CarModelName,
  Card,
  Carrossel,
  ContactsButton,
  ContainerButtonCurrentPage,
  ContainerCards,
  FinancingButton,
  InfoCar,
} from "./Cards.styled";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const Cards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(6);
  const [options] = useState([6, 10, 20, 30, 50]);

  const [verticalLayout, setVerticalLayout] = useState(false);

  const toggleLayout = () => {
    setVerticalLayout(!verticalLayout);
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  console.log(indexOfLastCard);
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  console.log(indexOfFirstCard);
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);
  console.log(currentCards);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const handleCardsPerPageChange = (e) => setCardsPerPage(e.target.value);

  return (
    <div>
      <Header />
      <label>
        <span></span>
        <select value={cardsPerPage} onChange={handleCardsPerPageChange}>
          {options.map((item) => (
            <option key={item.id} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <button onClick={toggleLayout}>Alternar Layout</button>
      <ContainerCards vertical={verticalLayout}>
        {currentCards.map((item) => (
          <div key={item.id}>
            <Card vertical={verticalLayout}>
              <Carrossel>
              <Swiper slidesPerView={1}
              pagination={{clickable: true}}
              navigation
              >
                {item.veiculo_foto.map((img) => (
                  <SwiperSlide key={img.id}>                   
                      <img src={img} alt="" />                   
                  </SwiperSlide>
                ))}
              </Swiper>
              </Carrossel>

              <InfoCar>
                <h2>{item.veiculo_marca}</h2>
                <CarModelName>
                  <p>{item.veiculo_modelo}</p>
                </CarModelName>
                <p>{item.modelo_nome_pai}</p>
                <p>{item.veiculo_cambio}</p>
                <p>{item.ano_modelo}</p>
                <h3>
                  {Number(item.veiculo_valor).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </h3>
                <p>{item.veiculo_km} Km</p>

                <div>
                  <FinancingButton>
                    <Link to="financiamento">Simular Financiamento</Link>
                  </FinancingButton>
                  <ContactsButton>
                    <Link to="contatos">Entrar em Contato</Link>
                  </ContactsButton>
                </div>
              </InfoCar>
            </Card>
          </div>
        ))}
      </ContainerCards>
      <ContainerButtonCurrentPage>
        {Array.from({ length: Math.ceil(data.length / cardsPerPage) }).map(
          //A função Math.ceil(x) retorna o menor número inteiro maior ou igual a "x". // O método Array.from() cria uma nova instância(chama-se instância de uma classe, um objeto cujo comportamento e estado são definidos pela classe) de um Array quando for passado um array-like ou um iterable object como argumento.
          (item, index) => (
            <ButtonCurrentPage
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </ButtonCurrentPage>
          )
        )}
      </ContainerButtonCurrentPage>
    </div>
  );
};

export default Cards;
