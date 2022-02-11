import styled from "styled-components";
export const FormContainer = styled.div`
  width: 380px;
  margin: 0 auto;
  border: 1px solid #ccc;
  padding: 10px 25px;
  @media screen and (max-width:767px){
    width:100%;
    margin:20px auto;
  }
`;

export const FormTitle = styled.h2`
  font-size: 30px;
  text-align: center;
  @media screen and (max-width:767px){
    font-size:18px
  }
`;
