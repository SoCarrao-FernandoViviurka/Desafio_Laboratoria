import './Card.css';
import { React, useEffect, useState } from "react";
import data from './data/data.json';
import Button from './Components/Button/Button';

const Card = () => {

  const [cardPerPage, setCardPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [isCardVertical, setIsCardVertical] = useState(true);

  //numero de paginas com total de cards
  //arredondar pra cima
  const numberOfPages = Math.ceil(data.length / cardPerPage);
  //filtrar o array de itens
  const startIndex = currentPage * cardPerPage; //0 //5 //10
  const endIndex = startIndex + cardPerPage; //5 //10 //15
  const currentCard = data.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(0);
  }, [setCardPerPage])

  const handleClickLayoutChange = () => {
    setIsCardVertical(!isCardVertical);
  }
  //console.log(cardPerPage, currentPage)

  return (
    <main className='Geral'>
      <section className='Filters'>
        <h5>Filtro:</h5>
        <select className='Select-quantity' value={cardPerPage} onChange={(e) => setCardPerPage(Number(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
        <Button className='Bg-orange' onClick={handleClickLayoutChange} children='Mudar Apresentação'/>
      </section>
      <div className='Position-cards'>
        {currentCard.map((card) => (
          <section key={card.veiculo_id} className={isCardVertical ? 'Vertical-card' : 'Horizontal-card'}>
            <img className='Photo-card' src={card.veiculo_foto[0]} alt={`foto do veiculo ${card.veiculo_marca}`}/>
              <p className='Elipse'>{card.veiculo_marca} {card.veiculo_modelo}</p>
              <h4>{Number(card.veiculo_valor).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h4>
              <p>{card.veiculo_km}km - {card.veiculo_cambio} - {card.ano_modelo}</p>
              <Button className='Border-orange' children='Simular Financiamento'/>
              <Button className='Border-orange' children='Entrar em contato'/>
          </section>
      ))}
      </div>
      <section>
        {Array.from(Array(numberOfPages), (_, i) => {
          return <Button className='Button-pages' key={i} value={i} onClick={(e) => setCurrentPage(Number(e.target.value))} children={i+1} />
        })}
      </section>
    </main>
  );
}

export default Card;
