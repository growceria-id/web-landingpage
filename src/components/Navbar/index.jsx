import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { AnchorButton } from "../ButtonElement";
import {
  ImageLogo,
  MobileIcon,
  Nav,
  NavBtn,
  NavItem,
  NavLinks,
  NavMenu,
  NavbarContainer,
  NavbarLogo,
  Navlinkr
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
            <NavItem>
              <Navlinkr
                to="/syarat-ketentuan"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Syarat dan Ketentuan
              </Navlinkr>
            </NavItem>
          </NavMenu>
          
          <NavBtn>
            <AnchorButton target="_blank" href='https://play.google.com/store/apps/details?id=com.jason1152.growceriamobileclient'>Unduh</AnchorButton>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
