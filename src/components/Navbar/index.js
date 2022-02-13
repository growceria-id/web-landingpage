import React, { useEffect, useState } from 'react';
import growceria from '../../images/Growceria SVG_landscape all white.svg'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavbarLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
  <>
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavbarLogo to='/' onClick={toggleHome} src={growceria} />
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to='tentang' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Tentang</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='fitur' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Fitur</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='keunggulan' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Keunggulan</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='bantuan' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Bantuan</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='unduh' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Unduh</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  </>);
};

export default Navbar;
