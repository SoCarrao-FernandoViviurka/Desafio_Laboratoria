import { useState } from "react";
import data from "../data/data.json";
import { ButtonCurrentPage, Card, ContainerButtonCurrentPage, ContainerCards, InfoCar } from "./Cards.styled";

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
              <>
                <img src={item.veiculo_foto[0]} alt="" />
              </>
              <InfoCar>
              
                <h1>{item.veiculo_marca}</h1>
                <p>{item.veiculo_modelo}</p>
                <p>{item.veiculo_cambio}</p>
                <p>{item.ano_modelo}</p>
                <h4>                  
                {item.veiculo_valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                </h4>
                <p>{item.veiculo_km} Km</p>

                <div>
              <button>Financiamento</button>
              <button>Contatos</button>
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
