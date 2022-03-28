import FiturDiv from "./FiturDiv";
import { FiturContainer, FiturH1, FiturWrapper } from "./FiturElements";

const Fitur = () => {
  return (
    <>
      <FiturContainer id="fitur">
        <FiturH1>Fitur</FiturH1>
        <FiturWrapper>
          <FiturDiv
            icon={`./images/Discount-cuate.png`}
            heading="Fleksibilitas Harga"
            desc="Pemberian harga yang menganut prinsip Economic of Scale dimana pembelian yang lebih banyak akan mendapatkan harga yang lebih murah"
          />
          <FiturDiv
            icon={`./images/Barcode-amico.png`}
            heading="MOQ"
            desc="MOQ yang rendah ditujukan pada pelaku usaha mikro, kecil, dan menengah untuk meningkatkan keuntungan dan fleksibilitas"
          />
          <FiturDiv
            icon={`./images/In no time-amico.png`}
            heading="Pengiriman Kilat"
            desc="Pengiriman yang cepat dan terjadwal dengan penjaminan yang menyesuaikan pada kebutuhan harian atau mingguan dari bisnis Anda"
          />
        </FiturWrapper>
      </FiturContainer>
    </>
  );
};

export default Fitur;
