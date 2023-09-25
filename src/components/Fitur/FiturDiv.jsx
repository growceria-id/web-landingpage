import React from 'react'
import { FiturCard, FiturIcon, FiturH2, FiturP } from './FiturElements'

const FiturDiv = (props) => {
  return (
    <FiturCard>
        <FiturIcon src={props.icon}></FiturIcon>
        <FiturH2>{props.heading}</FiturH2>
        <FiturP>{props.desc}</FiturP>
    </FiturCard>
  )
}

export default FiturDiv