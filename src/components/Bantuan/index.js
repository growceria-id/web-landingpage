import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { BantuanContainer, BantuanH1, BantuanWrapper, Pertanyaan, PertanyaanP, PertanyaanIcon } from './BantuanElements';

const Bantuan = () => {
  return (
  <>
    <BantuanContainer id='bantuan'>
        <BantuanH1>Bantuan</BantuanH1>
        <BantuanWrapper>
            <Pertanyaan>
                <PertanyaanP>Dimanakah daerah operasi?</PertanyaanP>
                <PertanyaanIcon>
                    <FaChevronDown />
                </PertanyaanIcon>
            </Pertanyaan>
            <Pertanyaan>
                <PertanyaanP>Berapakah lama pengiriman yang dibutuhkan?</PertanyaanP>
                <PertanyaanIcon>
                    <FaChevronDown />
                </PertanyaanIcon>
            </Pertanyaan>
            <Pertanyaan>
                <PertanyaanP>Bagaimana cara untuk bergabung?</PertanyaanP>
                <PertanyaanIcon>
                    <FaChevronDown />
                </PertanyaanIcon>
            </Pertanyaan>
            <Pertanyaan>
                <PertanyaanP>Apakah ada minimum order?</PertanyaanP>
                <PertanyaanIcon>
                    <FaChevronDown />
                </PertanyaanIcon>
            </Pertanyaan>
            <Pertanyaan>
                <PertanyaanP>Apakah syarat dan ketentuan untuk retur barang?</PertanyaanP>
                <PertanyaanIcon>
                    <FaChevronDown />
                </PertanyaanIcon>
            </Pertanyaan>
        </BantuanWrapper>
    </BantuanContainer>
  </>
  )
};

export default Bantuan;