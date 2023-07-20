import styled from "styled-components";

export const ContainerCards = styled.section`
  display: flex;
  flex-direction: ${(props) => (props.vertical ? "row" : "column")};
  justify-content: ${(props) => (props.vertical ? "space-around" : "center")};
  flex-wrap: ${(props) => (props.vertical ? "wrap" : "nowrap")};
  align-items: center;
  margin: 0.2rem;
`;

export const Card = styled.section`
  width: ${(props) => (props.vertical ? "45vw" : "80vw")};
  height: ${(props) => (props.vertical ? "25rem" : "15rem")};
  flex-direction: ${(props) => (props.vertical ? "column" : "row")};
  justify-content: space-between;
  align-items: center;
  background-color: var(--yellow);
  border-radius: 10px;
  display: flex;
  margin-bottom: 1rem;

  img {
    width: ${(props) => (props.vertical ? "100%" : "40vw")};
    height: ${(props) => (props.vertical ? "auto" : "100%")};
    border-radius: 10px;
  }

  @media (min-width: 320px) and (max-width: 380px) {
    width: ${(props) => (props.vertical ? "70vw" : "90vw")};
    height: ${(props) => (props.vertical ? "28rem" : "15rem")};
    font-size: 0.8rem;
  }
`;
export const Carrossel = styled.div`
  width: ${(props) => (props.vertical ? "100%" : "40vw")};
  height: ${(props) => (props.vertical ? "auto" : "100%")};
 
`;

export const InfoCar = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 0.9rem;
  padding: 0.2rem;
  width: ${(props) => (props.vertical ? "100%" : "40vw")};
`;

export const CarModelName = styled.div`
  width: ${(props) => (props.vertical ? "100%" : "100%")};

  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const ContainerButtonCurrentPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
`;

export const ButtonCurrentPage = styled.button`
  width: 1.2rem;
  height: 1%.2rem;
  font-weight: bold;
  padding: 0.3rem;
`;

export const FinancingButton = styled.button`
  background-color: var(--blue);
  font-size: 0.6rem;
`;
export const ContactsButton = styled.button`
  background-color: var(--blue);
  font-size: 0.6rem;
`;
