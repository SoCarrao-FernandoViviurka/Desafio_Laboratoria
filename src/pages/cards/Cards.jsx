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
import { SiGooglemaps } from "react-icons/si";
import { CiGrid2V } from "react-icons/ci";
import { CiGrid2H } from "react-icons/ci";

const Cards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(6);
  const [options] = useState([6, 10, 20, 30, 50]);
  const [verticalLayout, setVerticalLayout] = useState(false);
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
          <CiGrid2V /> Layout Vertical
        </>
      ) : (
        <>
          <CiGrid2H /> Layout Horizontal
        </>
      )
    );
  };

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

  // Filtra os carros com base nos critérios selecionados
  const carrosFiltrados = currentCards.filter((carro) => {
    const validBrand = !brand || carro.veiculo_marca === brand;
    const validModel = !model || carro.modelo_nome_pai === model;
    const validExchange = !exchange || carro.veiculo_cambio === exchange;
    const validYear = !year || carro.ano_fabricacao === parseInt(year);

    return validBrand && validModel && validExchange && validYear;
  });

  // Obtém as opções únicas de marca e modelo para preencher os selects
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

  return (
    <div>
      <Header />
      <label>
        <span>Número de Cards por página</span>
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
      <button onClick={toggleLayout}>{buttonText}</button>

      <div>
        <h2>Filtrar Dados</h2>
        <label>
          Marca:
          <select value={brand} onChange={(e) => setBrand(e.target.value)}>
            <option value="">Todas</option>
            {uniqueBrand.map((marca) => (
              <option key={marca} value={marca}>
                {marca}
              </option>
            ))}
          </select>
        </label>
        <label>
          Modelo:
          <select value={model} onChange={(e) => setModel(e.target.value)}>
            <option value="">Todos</option>
            {uniqueModel.map((modelo) => (
              <option key={modelo} value={modelo}>
                {modelo}
              </option>
            ))}
          </select>
        </label>

        <label>
          Cambio:
          <select
            value={exchange}
            onChange={(e) => setExchange(e.target.value)}
          >
            <option value="">Todos</option>
            {uniqueExchange.map((cambio) => (
              <option key={cambio} value={cambio}>
                {cambio}
              </option>
            ))}
          </select>
        </label>

        <label>
          Ano:
          <select value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">Todos</option>
            {uniqueYear.map((ano) => (
              <option key={ano} value={ano}>
                {ano}
              </option>
            ))}
          </select>
        </label>
      </div>

      <ContainerCards vertical={verticalLayout}>
        {carrosFiltrados.map((item) => (
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
                <p>
                  {item.ano_fabricacao}/{item.ano_modelo}
                </p>
                <h3>
                  {Number(item.veiculo_valor).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </h3>
                <p>{Number(item.veiculo_km).toLocaleString()} Km</p>
                <p>
                  <SiGooglemaps />
                  {item.veiculo_cidade}
                </p>

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
