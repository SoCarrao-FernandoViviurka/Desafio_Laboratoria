import { styled } from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SectionCards = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  div{
    &.cards{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 25px;
  

    &.DivButtons{
      
      width: 100vw;
      display: flex;
      gap: 50px;
      justify-content: space-around;
      
    }
    }
    &.filter{
      width: 100%;
      height: auto;
      background-color: rgb(165, 163, 163, 29%);
      display: flex;
      margin: 5px 0;
      align-items: center;
      justify-content: space-between;
      
     
    }
  }
`;
