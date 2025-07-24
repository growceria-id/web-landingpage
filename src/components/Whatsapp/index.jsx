import React from 'react';
import { WhatsappButton } from './WhatsappElements';

const Whatsapp = () => {
  return (
    <WhatsappButton
        href="https://wa.me/6281919071301"
        target="_blank"
        rel="noopener noreferrer"
        >
        <img src="./whatsapp.svg" alt="WhatsApp" width="56" height="56" />
    </WhatsappButton>
  )
};

export default Whatsapp;
