import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'gatsby';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Navigation from '../components/Navigation';
import backgroundImage from '../images/background.jpg'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background-image: url(${backgroundImage});
    background-repeat: repeat-x, repeat;
  }
`

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


const index = () => (
  <>
    <GlobalStyle />
      <Container>
        <Header>
        Hello!
        </Header>
        <SubHeader>
          +Sub header
        </SubHeader>
        <Navigation />

    </Container>
  </>
)

export default index