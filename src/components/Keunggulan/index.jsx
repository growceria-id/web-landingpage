import {
  Col1,
  ImageWrap,
  KeunggulanContainer,
  KeunggulanH1,
  KeunggulanWrapper,
  PhoneImage,
  PointWrapper,
} from "./KeunggulanElements";
import { Point1, Point2, Point3, Point4 } from "./PointData";
import PointDiv from "./PointDiv";
import FlatIphone from "../../images/flat-iphone.png";
const Keunggulan = () => {
  return (
    <>
      <KeunggulanContainer id="keunggulan">
        <KeunggulanH1>Keunggulan</KeunggulanH1>
        <KeunggulanWrapper>
          <Col1>
            <ImageWrap>
              <PhoneImage src={FlatIphone} alt="Keunggulan" />
            </ImageWrap>
          </Col1>
          <Col1>
            <PointWrapper>
              <PointDiv {...Point1} />
              <PointDiv {...Point2} />
              <PointDiv {...Point3} />
              <PointDiv {...Point4} />
            </PointWrapper>
          </Col1>
        </KeunggulanWrapper>
      </KeunggulanContainer>
    </>
  );
};

export default Keunggulan;
