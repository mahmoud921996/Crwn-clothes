import { Link } from "react-router-dom";
import styled from "styled-components";

export const FormContainer = styled.div`
  width: 380px;
  margin: 0 auto;
  border: 1px solid #ccc;
  padding: 10px 25px;
  @media screen and (max-width:767px){
    width:100%;
    margin:30px auto;
    padding:10px;
  }
`;
export const FormTitle = styled.h2`
  font-size: 30px;
  text-align: center;
  @media screen and (max-width:767px){
    font-size:18px;
  }
`;

export const FormSpan = styled.span`
  position: relative;
  display: block;
  text-align: center;
  margin: 20px 0;
`;
export const FormLink = styled(Link)`
  text-align: center;
  display: block;
  font-weight:bold;
  margin:0 0 5px;
  cursor:pointer;
`;
