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
import FacebookAppSymbol from "../../images/facebook-app-symbol.png";
import InstagramAppSymbol from "../../images/instagram.png";
import LinkedinAppSymbol from "../../images/linkedin-logo.png";
import GrowceriaLandscapeAllWhite from "../../images/growceria-svg-landscape-all-white.svg";
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
                src={GrowceriaLandscapeAllWhite}
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
                <SmallImg src={FacebookAppSymbol} />
              </a>
              <a href="https://www.instagram.com/growceria?utm_medium=copy_link">
                <SmallImg src={InstagramAppSymbol} />
              </a>
              <a href="https://www.linkedin.com/company/growceria">
                <SmallImg src={LinkedinAppSymbol} />
              </a>
            </ImgWrap>
          </Column>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
