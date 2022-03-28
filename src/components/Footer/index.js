import { animateScroll as scroll } from "react-scroll";
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
              <Img
                to="/"
                onClick={toggleHome}
                src={`./images/Growceria SVG_landscape all white.svg`}
              />
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
                <SmallImg src={`./images/facebook-app-symbol.png`} />
              </a>
              <a href="https://www.instagram.com/growceria?utm_medium=copy_link">
                <SmallImg src={`./images/instagram.png`} />
              </a>
              <a href="https://www.linkedin.com/company/growceria">
                <SmallImg src={`./images/linkedin-logo.png`} />
              </a>
            </ImgWrap>
          </Column>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
