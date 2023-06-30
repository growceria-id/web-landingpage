import React, {useState} from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { BantuanContainer, BantuanH1, BantuanWrapper, Pertanyaan, PertanyaanP, PertanyaanIcon, Jawaban, JawabanP } from './BantuanElements';
import { PertanyaanData } from './Data';

const Bantuan = () => {
    const [clicked, setClicked] = useState(false)

    const toggleFAQ = index => {
        if(clicked === index) {
            return setClicked(null)
        }

        setClicked(index)
    }
  
    return (
  <>
    <BantuanContainer id='bantuan'>
        <BantuanH1>Bantuan</BantuanH1>
        <BantuanWrapper>
            {PertanyaanData.map((item, index) => {
                return (
                    <>
                        <Pertanyaan onClick={() => toggleFAQ(index)} key={index}>
                            <PertanyaanP>{item.pertanyaan}</PertanyaanP>
                            <PertanyaanIcon>
                                {clicked === index ? <FaChevronUp /> : <FaChevronDown />}
                            </PertanyaanIcon>
                        </Pertanyaan>
                        {clicked === index ? (
                            <Jawaban>
                                <JawabanP>{item.jawaban}</JawabanP>
                            </Jawaban>
                        ) : null}
                    </>
                );
            })}
        </BantuanWrapper>
    </BantuanContainer>
  </>
  )
};

export default Bantuan;