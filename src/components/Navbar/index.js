import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  ImageLogo,
  MobileIcon,
  Nav,
  NavbarContainer,
  NavbarLogo,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavMenu,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavbarLogo to="/" onClick={toggleHome}>
            <ImageLogo src={`./images/Growceria SVG_landscape all white.svg`} />
          </NavbarLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="tentang"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Tentang
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="fitur"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Fitur
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="keunggulan"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Keunggulan
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="bantuan"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Bantuan
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/unduh" onClick={toggleHome}>
              Unduh
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
