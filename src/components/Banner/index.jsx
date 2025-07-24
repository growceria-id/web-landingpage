import {
    BannerContainer,
    BannerWrapper,
    BannerTitle,
    BannerDescription
} from './BannerElements'

const Banner = ({title, description, background, gradient}) => {
  return (
    <>  
        <BannerContainer $background={background} $gradient={gradient}>
            <BannerWrapper>
                <BannerTitle>
                    {title}
                </BannerTitle>
                <BannerDescription>
                    {description}
                </BannerDescription>
            </BannerWrapper>
        </BannerContainer>
    </>
  );
};

export default Banner;
