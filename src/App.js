import React, { useState, useEffect, useRef, Fragment } from 'react';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import GlobalTheme from "./GlobalStyles";
import Card from './components/Card/Card';
import { Container, SectionCards, } from "./AppStyles"
import Button from './components/Button/Button';
import data from "./data.json";
import Header from './components/Header/Header';
import Select from './components/Select/Select';


function App() {

  const listCars = (cars, actualPage, limiteItens) => {
    let page = [];
    let totalPage = Math.ceil(cars.length / limiteItens);
    let count = (actualPage * limiteItens) - limiteItens;
    let delimiter = count + limiteItens;

    if (actualPage <= totalPage) {
      for (let i = count; i < delimiter; i++) {
        page.push(cars[i])
        count++;
      }
    }
    return page;
  }

  const qtdItensPage = useRef()

  const [theme, setTheme] = useState('light');
  const [cardView, setCardView] = useState("horizontal");
  const [qtdCards, setQtdCards] = useState("");
  const [cars, setCars] = useState([]);

  useEffect(() => {
    if (qtdItensPage.current && qtdItensPage.current.value) {
      setQtdCards(qtdItensPage.current.value);
    }

    const cardsFilter = listCars(data, 1, qtdCards)
    if (Array.isArray(cardsFilter)) {
      setCars(cardsFilter)
    }
  }, [qtdCards]);


  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, [qtdCards]);


  const changeCardView = (viewCard) => {
    viewCard === "horizontal" ? setCardView("vertical") : setCardView("horizontal")
    // console.log(cardView)
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Fragment>
        <GlobalTheme />
        <Container>
          <Header theme={theme} setTheme={setTheme} />
          <SectionCards theme={theme} setTheme={setTheme}>
            <div className='filter'>
              <Button
                typeBtn='cardView'
                onClick={() => changeCardView(cardView)}
                content={cardView === "horizontal" ? <i className="bi bi-distribute-vertical"></i> : <i className="bi bi-distribute-horizontal"></i>}
              />
              <Select ref={qtdItensPage} onChange={() => setQtdCards(qtdItensPage.current.value)} />
            </div>
            <div className='cards'>
              {cars.map(car => (
                <Card car={car} key={car.veiculo_id} data-cardView={cardView} />
              ))}
            </div>

          </SectionCards>
        </Container>
      </Fragment>
    </ThemeProvider>
  )
}

export default App;
