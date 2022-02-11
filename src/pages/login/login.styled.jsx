import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    width: 80%;
    margin: 0 auto;
    span {
      text-align: center;
    }
  }
  @media screen and (max-width: 400px) {
    span {
      font-size: 14px;
    }
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
  @media screen and (max-width: 767px) {
    text-align: center;
  }
  @media screen and (max-width: 400px) {
    font-size: 16px;
  }
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
