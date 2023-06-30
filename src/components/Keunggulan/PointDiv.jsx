import React from 'react';
import { Point, RoundNumber, Numbering, PointHolder, PointH2, PointP } from './KeunggulanElements';

const PointDiv = ({no, heading, desc}) => {
  return (
    <Point>
        <RoundNumber>
            <Numbering>{no}</Numbering>
        </RoundNumber>
        <PointHolder>
            <PointH2>{heading}</PointH2>
            <PointP>{desc}</PointP>
        </PointHolder>
    </Point>
  )
}

export default PointDiv