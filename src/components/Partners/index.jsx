import {
  PartnersContainer,
  PartnersWrapper,
  PartnersTitle,
  PartnersListContainer,
  PartnersList,
  PartnersLogo
} from './PartnerElements';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

const animation = { duration: 25000, easing: (t) => t }

const Partners = () => {
  
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 4,
        spacing: 15,
      },
      breakpoints: {
        '(max-width: 640px)': {
          slides: {
            perView: 1.5, // show 1 full + half of next
            spacing: 12,
          },
        },
      },
      created(s) {
        s.moveToIdx(5, true, animation)
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
      },
    }
  )
    
  return (
    <>
      <PartnersContainer>
        <PartnersWrapper>
          <PartnersTitle>
            Dipercayai Lebih dari Ratusan HoReCa di Jakarta
          </PartnersTitle>
          <PartnersListContainer>
            <PartnersList ref={sliderRef} className="keen-slider">
              <PartnersLogo key={0} $src="./logo-1.jpg" className="keen-slider__slide"/>
              <PartnersLogo key={1} $src="./logo-2.jpg" className="keen-slider__slide"/>
              <PartnersLogo key={2} $src="./logo-3.png" className="keen-slider__slide"/>
              <PartnersLogo key={3} $src="./logo-4.png" className="keen-slider__slide"/>
              <PartnersLogo key={4} $src="./logo-5.png" className="keen-slider__slide"/>
              <PartnersLogo key={5} $src="./logo-6.png" className="keen-slider__slide"/>
              <PartnersLogo key={6} $src="./logo-7.png" className="keen-slider__slide"/>
              <PartnersLogo key={6} $src="./logo-8.png" className="keen-slider__slide"/>
              <PartnersLogo key={6} $src="./logo-9.png" className="keen-slider__slide"/>
              <PartnersLogo key={6} $src="./logo-10.png" className="keen-slider__slide"/>
              <PartnersLogo key={6} $src="./logo-11.png" className="keen-slider__slide"/>
              <PartnersLogo key={6} $src="./logo-12.png" className="keen-slider__slide"/>
              <PartnersLogo key={6} $src="./logo-13.png" className="keen-slider__slide"/>
            </PartnersList>
          </PartnersListContainer>
        </PartnersWrapper>
      </PartnersContainer>
    </>
  );
};

export default Partners;
