import styled from "styled-components";

export const FiturContainer = styled.div`
    height: 100%;
    padding-top: 65px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;

    ${'' /* @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    } */}
`

export const FiturWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 25px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const FiturCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.25);
    border-radius: 36px;
    max-height: 520px;
    padding: 30px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const FiturIcon = styled.img`
    height: 250px;
    width: 250px;
    margin-bottom: 10px;
`

export const FiturH1 = styled.h1`
    font-size: 32px;
    font-weight: bold;
    color: #000;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 26px;
    }
`

export const FiturH2 = styled.h2`
    font-size: 24px;
    margin-bottom: 10px;
`

export const FiturP = styled.p`
    font-size: 16px;
    text-align: center;
`


// /* Feature Component 1 */

// position: absolute;
// width: 378px;
// height: 518px;
// left: 78px;
// top: 956px;



// /* Rectangle 3 */

// position: absolute;
// width: 378px;
// height: 518px;
// left: 78px;
// top: 956px;

// background: #FFFFFF;
// box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.25);
// border-radius: 36px;


// /* Discount-cuate 1 */

// position: absolute;
// width: 250px;
// height: 250px;
// left: 142px;
// top: 997px;

// background: url(Discount-cuate.png);


// /* Harga Kompetitif */

// position: absolute;
// width: 303px;
// height: 55px;
// left: 116px;
// top: 1270px;

// font-family: Varela Round;
// font-style: normal;
// font-weight: normal;
// font-size: 36px;
// line-height: 43px;
// text-align: center;
// letter-spacing: -0.02em;

// color: #000000;



// /* Deskirpsi dari feature tersebut yang merupakan perpanjangan dari fitur utama yang telah dideskripsikan bla bla */

// position: absolute;
// width: 303px;
// height: 93px;
// left: 116px;
// top: 1340px;

// font-family: Varela Round;
// font-style: normal;
// font-weight: normal;
// font-size: 18px;
// line-height: 22px;
// text-align: center;
// letter-spacing: -0.02em;

// color: #000000;

// /* Fitur */

// position: absolute;
// width: 130px;
// height: 62px;
// left: 655px;
// top: 851px;

// font-family: Poppins;
// font-style: normal;
// font-weight: bold;
// font-size: 48px;
// line-height: 72px;
// text-align: center;
// letter-spacing: -0.02em;

// color: #000000;

