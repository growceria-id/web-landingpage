import React from 'react';
import { FiturContainer, FiturH1, FiturWrapper } from './FiturElements';
import Icon1 from '../../images/Discount-cuate.png'
import Icon2 from '../../images/Barcode-amico.png'
import Icon3 from '../../images/In no time-amico.png'
import FiturDiv from './FiturDiv'

const Fitur = () => {
  return (
  <>
    <FiturContainer id='fitur'>
        <FiturH1>Fitur</FiturH1>
        <FiturWrapper>
            <FiturDiv icon={Icon1} heading='Relativitas Harga' desc='Pemberian harga yang menganut prinsip Economic of Scale dimana pembelian yang lebih banyak akan mendapatkan harga yang lebih murah'/>
            <FiturDiv icon={Icon2} heading='Minimum MOQ' desc='Minimum MOQ yang rendah ditujukan pada pelaku usaha mikro, kecil, dan menengah untuk meningkatkan keuntungan dan fleksibilitas'/>
            <FiturDiv icon={Icon3} heading='Pengiriman Kilat' desc='Pengiriman yang cepat dan terjadwal dengan penjaminan yang menyesuaikan pada kebutuhan harian atau mingguan dari bisnis Anda'/>
        </FiturWrapper>
    </FiturContainer>
  </>
  )
};

export default Fitur;