import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import growceriaLogo from '../../images/Growceria SVG_landscape all white.svg';
import facebook from '../../images/facebook-app-symbol.png';
import instagram from '../../images/instagram.png';
import linkedin from '../../images/linkedin-logo.png';
import { FooterContainer, FooterWrapper, Column, ImgWrap, Img, SmallImg, ImgJudul, Judul, Deskripsi } from './FooterElements';

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
                      <Img to='/' onClick={toggleHome} src={growceriaLogo}/>
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
                      <SmallImg src={facebook} />
                      <SmallImg src={instagram} />
                      <SmallImg src={linkedin} />
                  </ImgWrap>
              </Column>
          </FooterWrapper>
      </FooterContainer>
    </>
    )
  };
  
  export default Footer;