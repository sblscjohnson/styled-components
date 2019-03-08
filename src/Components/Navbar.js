import React from 'react';
import styled from 'styled-components'
import StyledComponent from './StyledComponent'

const Navbar = (props) => {

  const BlackBackground = styled.nav`
    background-color: black;
    color: white;
    height: 15vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `

  const NavTop = styled.img`
    height: 8vw;
    width: auto;
    margin: auto
    background-color: white;
    border-radius: 50%;
    position: absolute; 
    left: 3vw;
  `

  const Admin = styled.h2`
    width: 40vw;
    position: absolute;
    left: 30vw;
    font-size: 100px;
    text-align: center;
    display: ${(props.yes) ? "auto" : "none"}
  `

  
console.log(props.yes)

  return(
    <BlackBackground>
      <NavTop src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' alt='logo' />
      <StyledComponent />
      <Admin>Hello Admin</Admin>
    </BlackBackground>
  )
  
}

export default Navbar
