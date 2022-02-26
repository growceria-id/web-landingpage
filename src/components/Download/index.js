import React from 'react'
import { DownloadContainer, DownloadWrap, DownloadImageWrap, DownloadImage, DownloadHeading } from './DownloadElements'
import CountdownTimer from '../CountdownTimer/CountdownTimer'
import growceriaLogo from '../../images/Growceria SVG_landscape all white.svg';

const Download = () => {
  return (
    <div>
        <DownloadContainer>
            <DownloadWrap>
              <DownloadImageWrap>
                <DownloadImage src={growceriaLogo}/>
              </DownloadImageWrap>
              <DownloadHeading>Kami akan segera merilis aplikasi pada Juli 2022</DownloadHeading>
              <CountdownTimer countdownTimestampMs={1656708691000}/>
            </DownloadWrap>
        </DownloadContainer>
    </div>
  )
}

export default Download