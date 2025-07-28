import React from 'react';
import { WhatsappButton } from './WhatsappElements';

const Whatsapp = () => {
  return (
    <WhatsappButton
        href="https://wa.me/6281919071301?text=Hi%20kak,%20mau%20cek%20untuk%20produknya%20apa%20saja%20beserta%20dengan%20harganya%20kak"
        target="_blank"
        rel="noopener noreferrer"
        >
        <img src="./whatsapp.svg" alt="WhatsApp" width="56" height="56" />
    </WhatsappButton>
  )
};

export default Whatsapp;
