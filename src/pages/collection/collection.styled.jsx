import styled from "styled-components";

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
  @media screen and (max-width:767px){
    font-size: 28px;
    margin: 10px auto 40px;
  }
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  & > div {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 991px){
    grid-template-columns: 1fr 1fr 1fr;

  } 
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
    grid-gap:15px
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    width: 100%;
    grid-gap: 0;
    & > div {
      margin: 0 auto 30px;
    }
  }

 
`;
