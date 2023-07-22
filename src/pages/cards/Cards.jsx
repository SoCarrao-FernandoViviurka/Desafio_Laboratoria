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
  Filter,
  FinancingButton,
  InfoCar,
  MainCards,
} from "./Cards.styled";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { SiGooglemaps } from "react-icons/si";
import { CiGrid2V } from "react-icons/ci";
import { CiGrid2H } from "react-icons/ci";

const Cards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(6);
  const [options] = useState([6, 12, 18, 32, 50]);
  const [verticalLayout, setVerticalLayout] = useState(true);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [exchange, setExchange] = useState("");
  const [year, setYear] = useState("");
  const [buttonText, setButtonText] = useState(
    <>
      <CiGrid2V /> Layout Vertical
    </>
  );

  const toggleLayout = () => {
    setVerticalLayout(!verticalLayout);
    setButtonText(
      verticalLayout ? (
        <>
          <CiGrid2V /> Layout Vertical{" "}
        </>
      ) : (
        <>
          <CiGrid2H /> Layout Horizontal
        </>
      )
    );
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const carrosFiltrados = data.filter((carro) => {
    const validBrand = !brand || carro.veiculo_marca === brand;
    const validModel = !model || carro.modelo_nome_pai === model;
    const validExchange = !exchange || carro.veiculo_cambio === exchange;
    const validYear = !year || carro.ano_fabricacao === parseInt(year);

    return validBrand && validModel && validExchange && validYear;
  });

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = carrosFiltrados.slice(indexOfFirstCard, indexOfLastCard);
  console.log(currentCards);

  const uniqueBrand = Array.from(
    new Set(data.map((carro) => carro.veiculo_marca))
  );
  const uniqueModel = Array.from(
    new Set(data.map((carro) => carro.modelo_nome_pai))
  );
  const uniqueExchange = Array.from(
    new Set(data.map((carro) => carro.veiculo_cambio))
  );
  const uniqueYear = Array.from(
    new Set(data.map((carro) => carro.ano_fabricacao))
  );
  uniqueYear.sort();

  const handleFinancingButtonClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleContactsButtonClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const clearFilter = () => {
    setBrand("");
    setModel("");
    setExchange("");
    setYear("");
  };

  return (
    <div>
      <Header />
      <MainCards>
        <Filter>
          <div>
            <button onClick={toggleLayout}>{buttonText}</button>
            <div>
              <label>
                <span>Cards por página: </span>
                <select
                  value={cardsPerPage}
                  onChange={(e) => setCardsPerPage(e.target.value)}
                >
                  {options.map((item) => (
                    <option key={item.id} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
          <div>
            <div>
              <label>
                Marca:
                <select
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                >
                  <option value="">Todas</option>
                  {uniqueBrand.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div>
              <label>
                Modelo:
                <select
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                >
                  <option value="">Todos</option>
                  {uniqueModel.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div>
              <label>
                Cambio:
                <select
                  value={exchange}
                  onChange={(e) => setExchange(e.target.value)}
                >
                  <option value="">Todos</option>
                  {uniqueExchange.map((exchange) => (
                    <option key={exchange} value={exchange}>
                      {exchange}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div>
              <label>
                Ano:
                <select value={year} onChange={(e) => setYear(e.target.value)}>
                  <option value="">Todos</option>
                  {uniqueYear.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div>
              <button onClick={clearFilter}>Limpar Filtro</button>
            </div>
          </div>
        </Filter>

        <ContainerCards vertical={verticalLayout}>
          {carrosFiltrados &&
            currentCards.map((item) => (
              <div key={item.id}>
                <Card vertical={verticalLayout}>
                  <Carrossel>
                    <Swiper
                      slidesPerView={1}
                      pagination={{ clickable: true }}
                      navigation
                    >
                      {item.veiculo_foto.map((img) => (
                        <SwiperSlide key={img.id}>
                          <img src={img} alt="fotos dos carros" />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </Carrossel>

                  <InfoCar>
                    <h3>{item.veiculo_marca}</h3>
                    <CarModelName>
                      <p>{item.veiculo_modelo}</p>
                    </CarModelName>
                    <p>{item.modelo_nome_pai}</p>
                    <p>{item.veiculo_cambio}</p>
                    <p>
                      {item.ano_fabricacao}/{item.ano_modelo}
                    </p>
                    <p>{Number(item.veiculo_km).toLocaleString()} Km</p>
                    <p>
                      {" "}
                      <SiGooglemaps />
                      {item.veiculo_cidade}
                    </p>
                    <h3>
                      {Number(item.veiculo_valor).toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </h3>
                    <div>
                      <FinancingButton onClick={handleFinancingButtonClick}>
                        <Link to="financiamento">Simular Financiamento</Link>
                      </FinancingButton>
                      <ContactsButton onClick={handleContactsButtonClick}>
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
            (item, index) => (
              <ButtonCurrentPage
                key={index}
                onClick={() => handlePageChange(index + 1)}
                active={currentPage === index + 1}
              >
                {index + 1}
              </ButtonCurrentPage>
            )
          )}
        </ContainerButtonCurrentPage>
      </MainCards>
    </div>
  );
};

export default Cards;
