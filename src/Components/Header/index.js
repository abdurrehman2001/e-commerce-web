import React from 'react'
// import logo from './images/logo.png';
import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import MyNavBar from '../Navbar';
const Header = () => {
    return (
        <Wrapper>
            <NavLink to="/">
                <img className='logo' src="./img/logo1.png" alt="my logo img" />
            </NavLink>
            <MyNavBar />
        </Wrapper>
    )
}
const Wrapper = styled.section` padding: 0 4.8rem;
height: 10rem;
background-color: ${({ theme }) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;
position: relative;

.logo {
    height: 10rem;
}`;
export default Header;