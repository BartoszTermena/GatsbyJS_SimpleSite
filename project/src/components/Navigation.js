import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavigationWrapper = styled.ul`
    padding: 0;
    list-style: none;
    font-family: 'Montserrat';
    color: #242628;
    font-weight: 700;
    display: flex;
`;

const NavigationItem = styled.li`
    margin-right: 15px;
    position: relative; 

    ::after {
        position: absolute;
        top: 0;
        right: -8px;
        content: '';
        display: block;
        height: 100%;
        width: 2px;
        background: #242628;

    }

    :last-child::after {
        display:none;
    }
`;

const StyledLink = styled(Link)`
    color: #242628;
    text-decoration: none;
`;

const Navigation = () => (
    <NavigationWrapper>
        <NavigationItem><StyledLink to={'/about'}>Abut</StyledLink></NavigationItem>
        <NavigationItem><StyledLink to={'/contact'}>Contact</StyledLink></NavigationItem>
        <NavigationItem><StyledLink to={'/more'}>More</StyledLink></NavigationItem>
    </NavigationWrapper>
)
export default Navigation;