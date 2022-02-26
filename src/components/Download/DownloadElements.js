import styled from "styled-components";

export const DownloadContainer = styled.div`
    background: linear-gradient(180deg, #8C2C6C 0%, #C4C4C4 0%, rgba(196, 196, 196, 0.989583) 0.01%, rgba(196, 196, 196, 0.979373) 0.02%, rgba(196, 196, 196, 0.974467) 0.03%, #8C2C6C 0.04%, rgba(171, 60, 143, 0.72) 100%);
    /* background-image: url('Background-template.png'); */
    /* background-position: center; */
    /* background-size: cover; */
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DownloadWrap = styled.div`
    margin: 0 auto;
    padding: 0 20px;
`

export const DownloadImageWrap = styled.div`
    margin-top: -30%;
    max-width: 800px;
    height: 100%;
`

export const DownloadImage = styled.img`
    display: block;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
`

export const DownloadHeading = styled.h2`
    margin-top: -80px;
    font-size: 32px;
    text-align: center;
    font-weight: bold;
    color: #fff;
    margin-bottom: 40px;
`