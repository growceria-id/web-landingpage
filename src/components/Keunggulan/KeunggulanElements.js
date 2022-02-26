import styled from "styled-components";

export const KeunggulanContainer = styled.div`
    height: 100%;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
`

export const KeunggulanWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100%;
    width: 100%;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    align-items: center;
    grid-template-columns: 35% 65%;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const KeunggulanH1 = styled.h1`
    font-size: 32px;
    font-weight: bold;
    color: #000;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 26px;
    }
`

export const Col1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ImageWrap = styled.div`
    max-width: 300px;
    height: 100%;
`

export const PhoneImage = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

export const PointWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
`

export const Point = styled.div`
    display: grid;
    grid-template-columns: 15% 85%;
    grid-gap: 25px;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    padding: 0px 5px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const RoundNumber = styled.div`
    height: 75px;
    width: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #C44CA4;
`

export const Numbering = styled.p`
    font-size: 18px;
    color: #fff;
    text-align: center;
`

export const PointHolder = styled.div`
    background: #FEEFFA;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 15px 30px;
    border-radius: 45px;
`

export const PointH2 = styled.h2`
    font-size: 20px;
    text-align: left;
    margin-bottom: 10px;
`

export const PointP = styled.p`
    font-size: 16px;
    text-align: left;
`