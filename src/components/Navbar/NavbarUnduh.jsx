import { animateScroll as scroll } from "react-scroll";
import {
  ImageLogo,
  Nav,
  NavbarContainer,
  NavbarLogo,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const NavbarUnduh = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavbarLogo to="/" onClick={toggleHome}>
            <ImageLogo src={`./images/growceria-svg-landscape-all-white.svg`} />
          </NavbarLogo>
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

export default NavbarUnduh;
