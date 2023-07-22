import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--blue);
  width: 100vw;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 150px;
  }

  @media (min-width: 800px) {
	height: 10rem;
      img {
      width: 250px;
    }
  }
`;


export const Icone = styled.div`
  @media (min-width: 800px) {
    display: none;

    img {
      width: 400px;
    }
  }
`;
