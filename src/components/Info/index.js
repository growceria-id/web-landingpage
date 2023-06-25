import React from 'react';
import { AnchorButton } from '../ButtonElement';
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
                            <AnchorButton target="_blank" href='https://play.google.com/store/apps/details?id=com.jason1152.growceriamobileclient'>{buttonLabel}</AnchorButton>
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