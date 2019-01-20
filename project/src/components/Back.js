import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavigationWrapper = styled.ul`
    top: 0;
    margin-left: 1rem;
    padding: 0;
    list-style: none;
    font-family: 'Montserrat';
    font-weight: 700;
    display: flex;
`;



const StyledLink = styled(Link)`
    background: transparent;
    text-decoration: none;
    color: #242628;
`;

const Back = () => (
    <NavigationWrapper>
        <StyledLink to={'/'}>Back</StyledLink>
    </NavigationWrapper>
)
export default Back;