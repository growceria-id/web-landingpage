import { animateScroll as scroll } from "react-scroll";
import facebook from "../../images/facebook-app-symbol.png";
import growceriaLogo from "../../images/Growceria SVG_landscape all white.svg";
import instagram from "../../images/instagram.png";
import linkedin from "../../images/linkedin-logo.png";
import {
  Column,
  Deskripsi,
  FooterContainer,
  FooterWrapper,
  Img,
  ImgJudul,
  ImgWrap,
  Judul,
  SmallImg,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <Column>
            <ImgWrap>
              <Img to="/" onClick={toggleHome} src={growceriaLogo} />
            </ImgWrap>
          </Column>
          <Column>
            <Judul>Hubungi Kami</Judul>
            <Deskripsi>growceria.id@gmail.com</Deskripsi>
          </Column>
          <Column>
            <Judul>Phone</Judul>
            <Deskripsi>+62 830 76876322</Deskripsi>
          </Column>
          <Column>
            <ImgJudul>Social Media</ImgJudul>
            <ImgWrap>
              <a href="https://www.facebook.com/growceria">
                <SmallImg src={facebook} />
              </a>
              <a href="https://www.instagram.com/growceria?utm_medium=copy_link">
                <SmallImg src={instagram} />
              </a>
              <a href="https://www.linkedin.com/company/growceria">
                <SmallImg src={linkedin} />
              </a>
            </ImgWrap>
          </Column>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
