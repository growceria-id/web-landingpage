import React from 'react';
import growceria from '../../images/Growceria SVG_landscape all white.svg'
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavbarLogo, ImageLogo, NavBtn, NavBtnLink } from './NavbarElements';

const NavbarUnduh = ({ toggle }) => {
  
    const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
  <>
    <Nav>
      <NavbarContainer>
        <NavbarLogo to='/' onClick={toggleHome}>
          <ImageLogo src={growceria} />
        </NavbarLogo>
        <NavBtn>
          <NavBtnLink to='/unduh' onClick={toggleHome}>Unduh</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  </>);
};

export default NavbarUnduh;
