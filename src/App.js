import Cards from './Componentes/Cards/Cards.jsx';
import Header from './Componentes/Header/Header.jsx';
import styled from 'styled-components';

const AppContainer = styled.div `
  // width: 100vw;
  height: 100vh;

`

function App() {
  return (
      <AppContainer>
        <Header/>
        <Cards/>
      </AppContainer>
  );
}

export default App;
