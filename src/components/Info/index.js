import React from 'react';
import { Button } from '../ButtonElement';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap } from './InfoElements';

const Info = ({top, id, imgStart, topLine, headline, description, buttonLabel, img, alt}) => {
  return (
  <>
    <InfoContainer top={top} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading>{headline}</Heading>
                        <Subtitle>{description}</Subtitle>
                        <BtnWrap>
                            <Button to='unduh' smooth={true} duration={500} spy={true} exact='true' offset={-80}>{buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={img} alt={alt}/>
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
  </>
  )
};

export default Info;