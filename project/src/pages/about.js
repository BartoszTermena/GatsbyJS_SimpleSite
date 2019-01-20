import React from 'react';
import { Link } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import Back from '../components/Back';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow: hidden;
  }
`;

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: pink;
  position: relative;

`;
const H1 = styled.h1`
    font-size: ${({isBig}) => isBig ? '5em' : '3em'};
    color: ${({isBlue}) => isBlue ? 'blue' : 'black'};
  `;

const about = () => {
  return (
    <>
  <GlobalStyle />
    <Back to={'/'}>Back</Back>
    <StyledWrapper>
      <H1 isBig={true} isBlue>About</H1>
    </StyledWrapper>
 
    </>
  )
}
export default about