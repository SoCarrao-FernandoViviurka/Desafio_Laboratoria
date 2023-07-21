import styled from "styled-components";

export const ContainerCards = styled.section`
  display: flex;
  flex-direction: ${(props) => (props.vertical ? "row" : "column")};
  justify-content: ${(props) => (props.vertical ? "space-around" : "center")};
  flex-wrap: ${(props) => (props.vertical ? "wrap" : "nowrap")};
  align-items: center;
  margin: 0.2rem;
  margin-top: 2rem;
`;

export const Card = styled.section`
  width: ${(props) => (props.vertical ? "45vw" : "80vw")};
  height: ${(props) => (props.vertical ? "25rem" : "15rem")};
  flex-direction: ${(props) => (props.vertical ? "column" : "row")};
  justify-content: space-between;
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  margin-bottom: 1rem;
`;

export const Carrossel = styled.div`
  display: flex;
  justify-content: center;
  width: ${(props) => (props.vertical ? "100%" : "40vw")};
  height: 100%;

  img {
    width: ${(props) => (props.vertical ? "100%" : "40vw")};
    height: 100%;
    border-radius: 10px;
  }
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
  background-color: transparent;
  border: .1rem solid var(--darkBlue);
  font-size: 0.6rem;
  color: var(--darkBlue)
`;
