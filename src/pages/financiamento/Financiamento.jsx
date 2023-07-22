import { styled } from "styled-components";
import Header from "../../components/Header";
import { FaTools } from "react-icons/fa"
import { useNavigate } from "react-router-dom";

const Financiamento = () => {
  const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    color: var(--white);
    height: 100vh;
    
    button{
      margin: 2rem;
    }
  `;

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container>
        <div><FaTools size={50}/></div>
        <h1>Págima em contrução...</h1>
        <button onClick={() => navigate(-1)}>voltar</button>
      </Container>
    </>
  );
};

export default Financiamento;
