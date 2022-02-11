import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items:center;

  @media screen and (max-width: 992px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (max-width: 767px) {
    height: 50px;
    margin-bottom: 0px;
    margin-top:10px;
    padding:0
    
  }

`;
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 20px;
  @media screen and (max-width: 992px) {
    padding: 10px;
    width: 60px;
  }
  @media screen and (max-width: 767px) {
    padding: 0;
    width: 50px;
  }

`;
export const IconsContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
`;
export const OptionsContainer = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 767px) {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 70px;
    width: 100%;
    height: calc(100vh - 70px);
    align-items: flex-start;
    z-index: 100;
    align-items: center;
    justify-content: flex-start;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    transition: 0.5s;
    right: 0;
  }
`;
export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    font-size: 1.4rem;
    padding: 15px 0;
    &:hover {
      color: #09c;
    }
  }
`;

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.6rem;
  height: 1.6rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 1.6rem;
    height: 0.25rem;
    background: #000000c2;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  @media screen and (min-width: 767px) {
    display: none;
  }
`;
