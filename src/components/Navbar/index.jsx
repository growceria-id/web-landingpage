import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  ImageLogo,
  MobileIcon,
  Nav,
  NavItem,
  NavItemEmpty,
  NavLinks,
  NavMenu,
  NavbarContainer,
  NavLinkHighlightOnActive,
  NavLinkHighlight,
  NavLinksContact,
} from "./NavbarElements";
import { useLocation } from 'react-router-dom';

const Navbar = ({ toggle }) => {
  const { pathname } = useLocation();

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
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem to="/" onClick={toggleHome} span={2}>
              <ImageLogo src={`/growceria-logo.png`} />
            </NavItem>
            <NavItemEmpty span={3.5}></NavItemEmpty>
            <NavItem span={1.5}>
              <NavLinks
                to="/"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                <NavLinkHighlightOnActive className={pathname === '/' ? 'active' : ''}>
                  Home
                </NavLinkHighlightOnActive> 
              </NavLinks>
            </NavItem>
            <NavItem span={1.5}>
              <NavLinks
                to="produk"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                <NavLinkHighlightOnActive className={pathname === '/produk' ? 'active' : ''}>
                  Produk
                </NavLinkHighlightOnActive> 
              </NavLinks>
            </NavItem>
            {/* <NavItem span={1.5}>
              <NavLinks
                to="keunggulan"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                // offset={-80}
              >
                Blog
              </NavLinks>
            </NavItem> */}
            <NavItem span={2}>
              <NavLinks
                to="about-us"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                // offset={-80}
              >
                <NavLinkHighlightOnActive className={pathname === '/about-us' ? 'active' : ''}>
                  About Us
                </NavLinkHighlightOnActive> 
              </NavLinks>
            </NavItem>
            <NavItem span={1.5}>
              <NavLinksContact href="https://wa.me/6281919071301?text=Hi%20kak,%20mau%20cek%20untuk%20produknya%20apa%20saja%20beserta%20dengan%20harganya%20kak">
                <NavLinkHighlight>Contact</NavLinkHighlight>
              </NavLinksContact>
            </NavItem>
          </NavMenu>

        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
