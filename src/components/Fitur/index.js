import React from 'react';
import { FiturContainer, FiturH1, FiturWrapper, FiturCard, FiturIcon, FiturH2, FiturP } from './FiturElements';
import Icon1 from '../../images/Discount-cuate.png'
import Icon2 from '../../images/Barcode-amico.png'
import Icon3 from '../../images/In no time-amico.png'

const Fitur = () => {
  return (
  <>
    <FiturContainer id='fitur'>
        <FiturH1>Fitur</FiturH1>
        <FiturWrapper>
            <FiturCard>
                <FiturIcon src={Icon1}></FiturIcon>
                <FiturH2>Harga Kompetitif</FiturH2>
                <FiturP>Deskirpsi dari feature tersebut yang merupakan perpanjangan dari fitur utama yang telah dideskripsikan bla bla</FiturP>
            </FiturCard>
            <FiturCard>
                <FiturIcon src={Icon2}></FiturIcon>
                <FiturH2>Minimum MOQ</FiturH2>
                <FiturP>Deskirpsi dari feature tersebut yang merupakan perpanjangan dari fitur utama yang telah dideskripsikan bla bla</FiturP>
            </FiturCard>
            <FiturCard>
                <FiturIcon src={Icon3}></FiturIcon>
                <FiturH2>Pengiriman Kilat</FiturH2>
                <FiturP>Deskirpsi dari feature tersebut yang merupakan perpanjangan dari fitur utama yang telah dideskripsikan bla bla</FiturP>
            </FiturCard>
        </FiturWrapper>
    </FiturContainer>
  </>
  )
};

export default Fitur;