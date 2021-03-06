import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  margin-left: 20px;
  &:hover {
    color: grey;
  }
  @media screen and (max-width:768px){
    margin-left:0
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
`;
