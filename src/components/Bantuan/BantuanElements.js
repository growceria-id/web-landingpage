import styled from "styled-components";

export const BantuanContainer = styled.div`
    max-height: 750px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;

    @media screen and (max-width: 768px) {
        max-height: 1100px;
    }

    @media screen and (max-width: 480px) {
        max-height: 1300px;
    }
`

export const BantuanWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
`

export const Pertanyaan = styled.div`
    background: #fff;
    width: 1000px;
    max-height: 70px;
    display: grid;
    grid-template-columns: 90% 10%;
    justify-content: space-between;
    margin-bottom: 50px;
    padding: 25px 25px;
    box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.25);
    border-radius: 36px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }
`

export const BantuanH1 = styled.h1`
    font-size: 32px;
    font-weight: bold;
    color: #000;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 26px;
    }
`

export const PertanyaanP = styled.p`
    font-size: 18px;
    text-align: left;
`

export const PertanyaanIcon = styled.div`
    display: flex;
    align-items: center;
    direction: rtl;
    font-size: 1.3rem;
    cursor: pointer;
    color: #DCDCDC;
`

// /* FAQ */

// position: absolute;
// width: 1440px;
// height: 742px;
// left: 0px;
// top: 2483px;



// /* Rectangle 9 */

// position: absolute;
// width: 1440px;
// height: 742px;
// left: 0px;
// top: 2483px;

// background: #FFFFFF;


// /* Pertanyaan 4 */

// position: absolute;
// width: 1036px;
// height: 110px;
// left: 202px;
// top: 3046px;



// /* Rectangle 3 */

// position: absolute;
// width: 1036px;
// height: 110px;
// left: 202px;
// top: 3046px;

// background: #FFFFFF;
// box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.25);
// border-radius: 36px;


// /* Vector */

// position: absolute;
// left: 81.88%;
// right: 16.39%;
// top: 74.35%;
// bottom: 25.28%;

// background: #B7B7B7;


// /* Apakah ada minimum order. Syarat dan ketentuan untuk retur */

// position: absolute;
// width: 846px;
// height: 72px;
// left: 232px;
// top: 3063px;

// font-family: Varela Round;
// font-style: normal;
// font-weight: normal;
// font-size: 28px;
// line-height: 34px;
// display: flex;
// align-items: center;
// letter-spacing: -0.02em;

// color: #000000;



// /* Pertanyaan 3 */

// position: absolute;
// width: 1036px;
// height: 110px;
// left: 204px;
// top: 2901px;



// /* Rectangle 3 */

// position: absolute;
// width: 1036px;
// height: 110px;
// left: 204px;
// top: 2901px;

// background: #FFFFFF;
// box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.25);
// border-radius: 36px;


// /* Vector */

// position: absolute;
// left: 82.01%;
// right: 16.25%;
// top: 70.87%;
// bottom: 28.76%;

// background: #B7B7B7;


// /* Bagaimana cara bergabung */

// position: absolute;
// width: 846px;
// height: 72px;
// left: 234px;
// top: 2918px;

// font-family: Varela Round;
// font-style: normal;
// font-weight: normal;
// font-size: 28px;
// line-height: 34px;
// display: flex;
// align-items: center;
// letter-spacing: -0.02em;

// color: #000000;



// /* Pertanyaan 2 */

// position: absolute;
// width: 1036px;
// height: 110px;
// left: 202px;
// top: 2756px;



// /* Rectangle 3 */

// position: absolute;
// width: 1036px;
// height: 110px;
// left: 202px;
// top: 2756px;

// background: #FFFFFF;
// box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.25);
// border-radius: 36px;


// /* Vector */

// position: absolute;
// left: 81.88%;
// right: 16.39%;
// top: 67.38%;
// bottom: 32.25%;

// background: #B7B7B7;


// /* Bagaimana cara bergabung */

// position: absolute;
// width: 846px;
// height: 72px;
// left: 232px;
// top: 2773px;

// font-family: Varela Round;
// font-style: normal;
// font-weight: normal;
// font-size: 28px;
// line-height: 34px;
// display: flex;
// align-items: center;
// letter-spacing: -0.02em;

// color: #000000;



// /* Pertanyaan 1 */

// position: absolute;
// width: 1036px;
// height: 110px;
// left: 202px;
// top: 2611px;



// /* Rectangle 3 */

// position: absolute;
// width: 1036px;
// height: 110px;
// left: 202px;
// top: 2611px;

// background: #FFFFFF;
// box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.25);
// border-radius: 36px;


// /* Vector */

// position: absolute;
// left: 81.88%;
// right: 16.39%;
// top: 63.89%;
// bottom: 35.73%;

// background: #B7B7B7;


// /* Bagaimana cara bergabung */

// position: absolute;
// width: 846px;
// height: 72px;
// left: 232px;
// top: 2630px;

// font-family: Varela Round;
// font-style: normal;
// font-weight: normal;
// font-size: 28px;
// line-height: 34px;
// display: flex;
// align-items: center;
// letter-spacing: -0.02em;

// color: #000000;



// /* Bantuan */

// position: absolute;
// width: 219px;
// height: 45px;
// left: 611px;
// top: 2503px;

// font-family: Poppins;
// font-style: normal;
// font-weight: bold;
// font-size: 48px;
// line-height: 72px;
// text-align: center;
// letter-spacing: -0.02em;

// color: #000000;

