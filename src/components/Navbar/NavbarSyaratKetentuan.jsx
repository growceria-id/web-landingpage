import { AnchorButton } from "../ButtonElement";
import {
  ImageLogo,
  Nav,
  NavBtn,
  NavItem,
  NavMenu,
  NavbarContainer,
  NavbarLogo,
  Navlinkr,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavbarLogo to="/">
            <ImageLogo src={`./images/growceria-svg-landscape-all-white.svg`} />
          </NavbarLogo>
          <NavMenu>
            <NavItem>
              <Navlinkr to="/" exact="true">
                Home
              </Navlinkr>
            </NavItem>
            <NavItem>
              <Navlinkr to="/syarat-ketentuan" exact="true">
                Syarat dan Ketentuan
              </Navlinkr>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <AnchorButton
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.jason1152.growceriamobileclient"
            >
              Unduh
            </AnchorButton>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
