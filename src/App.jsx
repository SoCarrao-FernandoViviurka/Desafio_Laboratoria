import './App.css';
import { React, useEffect, useState } from "react";
import data from './data/data.json';
import Button from './Components/Button/Button';
import Card from './Components/Card/Card';
import Pagination from './Components/Pagination/Pagination';

const App = () => {
  const [cardPerPage, setCardPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [isCardVertical, setIsCardVertical] = useState(true);

  const numberOfPages = Math.ceil(data.length / cardPerPage);
  const startIndex = currentPage * cardPerPage;
  const endIndex = startIndex + cardPerPage;
  const currentCard = data.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(0);
  }, [setCardPerPage])

  const handleClickLayoutChange = () => {
    setIsCardVertical(!isCardVertical);
  }
  
  const modelFormatting = (model) => {
    const lowercase = model.toLowerCase();
    const separateString = lowercase.split(' ');
    const capitalFirstLetter = separateString.map((letter) => {
      return letter[0].toUpperCase() + letter.substring(1);
    });
    const removeRepeats = new Set(capitalFirstLetter);
    // console.log(removeRepeats);
    //console.log((Array.from(removeRepeats).join(' ')).length)
    const transformToString = Array.from(removeRepeats).join(' ');    
    return transformToString;
  }

  return (
    <main className='Geral'>
      <section className='Filters'>
        <h5>Visualização:</h5>
        <select className='Select-quantity' value={cardPerPage} onChange={(e) => setCardPerPage(Number(e.target.value))}>
          {[5,10,20,50].map((value) => (
            <option key={value} value={value}>{`${value} por página`}</option>
          ))}
        </select>
        <Button className='Bg-orange' onClick={handleClickLayoutChange} children={isCardVertical ? 'Horizontal' : 'Vertical'}/>
      </section>
      <Card 
        isCardVertical={isCardVertical}
        vehicles={currentCard}
        modelFormatting={modelFormatting}
      />
      <Pagination 
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        onClickCurrentPage={(e) => setCurrentPage(Number(e.target.value))}
      />
    </main>
  );
}

export default App;
