import React from 'react';
import phone from '../../images/Flat iPhone.png'
import { KeunggulanContainer, KeunggulanH1, KeunggulanWrapper, Col1, ImageWrap, PhoneImage, PointWrapper, Point, PointHolder, RoundNumber, Numbering, PointH2, PointP } from './KeunggulanElements';

const Keunggulan = () => {
  return (
  <>
    <KeunggulanContainer id='keunggulan'>
        <KeunggulanH1>Keunggulan</KeunggulanH1>
        <KeunggulanWrapper>
            <Col1>
                <ImageWrap>
                    <PhoneImage src={phone} alt='Keunggulan'/>
                </ImageWrap>
            </Col1>
            <Col1>
                <PointWrapper>
                    <Point>
                        <RoundNumber>
                            <Numbering>1</Numbering>
                        </RoundNumber>
                        <PointHolder>
                            <PointH2>Membuat hidup anda lebih senyum</PointH2>
                            <PointP>Deskirpsi dari feature tersebut yang merupakan perpanjangan dari fitur utama yang telah dideskripsikan bla bla</PointP>
                        </PointHolder>
                    </Point>
                    <Point>
                        <RoundNumber>
                            <Numbering>2</Numbering>
                        </RoundNumber>
                        <PointHolder>
                            <PointH2>Membuat hidup anda lebih senyum</PointH2>
                            <PointP>Deskirpsi dari feature tersebut yang merupakan perpanjangan dari fitur utama yang telah dideskripsikan bla bla</PointP>
                        </PointHolder>
                    </Point>
                    <Point>
                        <RoundNumber>
                            <Numbering>3</Numbering>
                        </RoundNumber>
                        <PointHolder>
                            <PointH2>Membuat hidup anda lebih senyum</PointH2>
                            <PointP>Deskirpsi dari feature tersebut yang merupakan perpanjangan dari fitur utama yang telah dideskripsikan bla bla</PointP>
                        </PointHolder>
                    </Point>
                    <Point>
                        <RoundNumber>
                            <Numbering>4</Numbering>
                        </RoundNumber>
                        <PointHolder>
                            <PointH2>Membuat hidup anda lebih senyum</PointH2>
                            <PointP>Deskirpsi dari feature tersebut yang merupakan perpanjangan dari fitur utama yang telah dideskripsikan bla bla</PointP>
                        </PointHolder>
                    </Point>
                </PointWrapper>
            </Col1>
        </KeunggulanWrapper>
    </KeunggulanContainer>
  </>
  )
};

export default Keunggulan;