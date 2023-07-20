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

  const qtdItensPage = useRef()

  const [theme, setTheme] = useState('light');
  const [cardView, setCardView] = useState("horizontal");
  const [qtdCards, setQtdCards] = useState("");
  const [cars, setCars] = useState([]);
  const [totalOfPage, setTotalOfPage] = useState(10);
  const [pageActual, setPageActual] = useState(1)

  const listCars = (cars, actualPage, limiteItens) => {
    
    console.log(cars, actualPage, limiteItens)
    let page = [];
    let totalPage = Math.ceil(cars.length / limiteItens);
    let count = (actualPage * limiteItens) - limiteItens;
    let delimiter = count + limiteItens;
    setTotalOfPage(totalPage);
   

    if (actualPage <= totalPage) {
      for (let i = count; i < delimiter; i++) {
        page.push(cars[i])
        count++;
      }
    }
    console.log(page)
    return page;
  }

  console.log(totalOfPage)

  useEffect(() => {
    if (qtdItensPage.current && qtdItensPage.current.value) {
      setQtdCards(qtdItensPage.current.value);
    }
  }, [qtdItensPage]);

  useEffect(()=> {
    const NumberQtdCards = Number(qtdCards)
    const cardsFilter = listCars(data, pageActual, NumberQtdCards);
    if (Array.isArray(cardsFilter) && cardsFilter) {
       setCars(cardsFilter)
    }
  }, [qtdCards, pageActual]);


  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, [qtdCards]);


  const changeCardView = (viewCard) => {
    viewCard === "horizontal" ? setCardView("vertical") : setCardView("horizontal")
    // console.log(cardView)
  }
  const changePage = (action) => {
    let calcChangePage = pageActual ;
    if (action === "increase" && pageActual < totalOfPage) {
      calcChangePage++;
    } else if (action === "decrease" && pageActual > 1) {
      calcChangePage--;
    }
    console.log(calcChangePage)
    setPageActual(calcChangePage);
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
              {cars.length > 0 ? (
                cars.map(car => (
                <Card car={car} key={car.veiculo_id} cardView={cardView}/>
              )))
              : (<p>Nenhum carro foi encontrado</p>)
            }              
            </div>
            <div className='DivButtons'>
              <Button typeBtn="pages" content="Anterior" onClick={()=>changePage("decrease")}/>
              <Button typeBtn="pages" content="Próximo" onClick={()=>changePage("increase")}/>
            </div>

          </SectionCards>
        </Container>
      </Fragment>
    </ThemeProvider>
  )
}

export default App;
