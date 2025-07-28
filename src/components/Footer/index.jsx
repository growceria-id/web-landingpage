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
  FooterHeadlineContainer,
  FooterHeadlineWrapper,
  FooterHeadlineTitle,
  FooterHeadlineDescription,
  FooterHeadlineButton,
} from "./FooterElements";
import FacebookAppSymbol from "../../images/facebook-app-symbol.png";
import InstagramAppSymbol from "../../images/instagram.png";
import LinkedinAppSymbol from "../../images/linkedin-logo.png";
import TiktokAppSymbol from "../../images/tiktok.png";
import GrowceriaLandscapeAllWhite from "../../images/growceria-svg-landscape-all-white.svg";
const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterHeadlineContainer>
        <FooterHeadlineWrapper>
          <FooterHeadlineTitle>
            Menyuplai kebutuhan bahan-bahan segar bagi bisnis anda
          </FooterHeadlineTitle>
          <FooterHeadlineDescription>
            Mempermudah UMKM dalam menemukan bahan dasar produksi dengan kualitas dan harga yang kompetitif untuk meningkatkan profit dan kepuasan pelanggan
          </FooterHeadlineDescription>
          <FooterHeadlineButton>
            <a href="https://wa.me/6281919071301?text=Hi%20kak,%20mau%20cek%20untuk%20produknya%20apa%20saja%20beserta%20dengan%20harganya%20kak">Hubungi Kami</a>
          </FooterHeadlineButton>
        </FooterHeadlineWrapper>
      </FooterHeadlineContainer>
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
            <Deskripsi href="mailto:info@growceria.com">info@growceria.com</Deskripsi>
          </Column>
          <Column>
            <Judul>Phone</Judul>
            <Deskripsi href="https://wa.me/6281919071301?text=Hi%20kak,%20mau%20cek%20untuk%20produknya%20apa%20saja%20beserta%20dengan%20harganya%20kak">+62 819-1907-1301</Deskripsi>
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
              <a href="https://www.tiktok.com/@growceria.id">
                <SmallImg src={TiktokAppSymbol} />
              </a>
            </ImgWrap>
          </Column>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
