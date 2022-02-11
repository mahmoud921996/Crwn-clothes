import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  margin:0 auto;
  @media screen and (max-width:767px){
    width:100%;
    text-align:center;
    margin-top:10px;

    form{
      width:80%;
      margin:0 auto
    }
   span{
     font-size:14px
   }
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
  @media screen and (max-width:767px){
    font-size:18px
  }

`;