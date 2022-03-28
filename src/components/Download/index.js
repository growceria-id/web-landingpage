import CountdownTimer from "../CountdownTimer/CountdownTimer";
import {
  DownloadContainer,
  DownloadHeading,
  DownloadImage,
  DownloadImageWrap,
  DownloadWrap,
} from "./DownloadElements";

const Download = () => {
  return (
    <div>
      <DownloadContainer>
        <DownloadWrap>
          <DownloadImageWrap>
            <DownloadImage
              src={`./images/Growceria SVG_landscape all white.svg`}
            />
          </DownloadImageWrap>
          <DownloadHeading>
            Kami akan segera merilis aplikasi pada Juli 2022
          </DownloadHeading>
          <CountdownTimer countdownTimestampMs={1656708691000} />
        </DownloadWrap>
      </DownloadContainer>
    </div>
  );
};

export default Download;
