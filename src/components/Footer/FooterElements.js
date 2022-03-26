import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 100%;
  background: #701a53;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding-bottom: 30px;
  }

  @media screen and (max-width: 480px) {
    padding-bottom: 50px;
  }
`;

export const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 40px;
  padding: 0 20px;

  @media screen and (max-width: 1000x) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const Column = styled.div`
  margin-bottom: 10px;
  padding: 0 15px;
`;

export const ImgWrap = styled.div`
  max-width: 300px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 15px 0;
  padding-right: 0;
  cursor: pointer;
`;

export const SmallImg = styled.img`
  max-width: 40px;
  max-height: 35px;
  padding-right: 10px;
`;

export const Judul = styled.h3`
  font-size: 16px;
  margin-bottom: 30px;
  text-align: left;
  color: #fff;
`;

export const ImgJudul = styled.h3`
  font-size: 16px;
  margin-bottom: 20px;
  text-align: left;
  color: #fff;
`;

export const Deskripsi = styled.p`
  font-size: 16px;
  text-align: left;
  color: #fff;
`;

// /* Footer */

// position: absolute;
// width: 1440px;
// height: 214px;
// left: 0px;
// top: 3946px;

// /* Rectangle 9 */

// position: absolute;
// width: 1440px;
// height: 214px;
// left: 0px;
// top: 3946px;

// background: #701A53;

// /* growceria.id@gmail.com */

// position: absolute;
// width: 287px;
// height: 26px;
// left: 423px;
// top: 4057px;

// font-family: Varela Round;
// font-style: normal;
// font-weight: normal;
// font-size: 24px;
// line-height: 29px;

// color: #FFFFFF;

// /* Hubungi Kami */

// position: absolute;
// width: 176px;
// height: 26px;
// left: 423px;
// top: 4004px;

// font-family: Varela Round;
// font-style: normal;
// font-weight: normal;
// font-size: 24px;
// line-height: 29px;

// color: #FFFFFF;

// /* Social Media */

// position: absolute;
// width: 161px;
// height: 26px;
// left: 1137px;
// top: 4004px;

// font-family: Varela Round;
// font-style: normal;
// font-weight: normal;
// font-size: 24px;
// line-height: 29px;

// color: #FFFFFF;

// /* Phone */

// position: absolute;
// width: 84px;
// height: 26px;
// left: 809px;
// top: 4004px;

// font-family: Varela Round;
// font-style: normal;
// font-weight: normal;
// font-size: 24px;
// line-height: 29px;

// color: #FFFFFF;

// /* +62 830 76876322 */

// position: absolute;
// width: 239px;
// height: 26px;
// left: 809px;
// top: 4057px;

// font-family: Varela Round;
// font-style: normal;
// font-weight: normal;
// font-size: 24px;
// line-height: 29px;

// color: #FFFFFF;

// /* Final logo_landscape all white 1 */

// position: absolute;
// width: 280px;
// height: 76px;
// left: 75px;
// top: 4007px;

// background: url(Final logo_landscape all white.png);

// /* instagram */

// position: absolute;
// width: 45px;
// height: 45px;
// left: 1186px;
// top: 4047px;

// background: url(instagram.png);

// /* facebook-app-symbol */

// position: absolute;
// width: 45px;
// height: 45.65px;
// left: 1131px;
// top: 4044px;

// background: url(facebook-app-symbol.png);

// /* linkedin-logo */

// position: absolute;
// width: 45px;
// height: 45px;
// left: 1253px;
// top: 4047px;

// background: url(linkedin-logo.png);
