import FiturDiv from "./FiturDiv";
import { FiturContainer, FiturH1, FiturWrapper } from "./FiturElements";
import DiscountCuate from "../../images/discount2.png";
import BarcodeAmico from "../../images/barcode.png";
import InNoTimeAmico from "../../images/in-no-time.png";

const Fitur = () => {
  return (
    <>
      <FiturContainer id="fitur">
        <FiturH1>Fitur</FiturH1>
        <FiturWrapper>
          <FiturDiv
            icon={DiscountCuate}
            heading="Fleksibilitas Harga"
            desc="Pemberian harga yang menganut prinsip Economic of Scale dimana pembelian yang lebih banyak akan mendapatkan harga yang lebih murah"
          />
          <FiturDiv
            icon={BarcodeAmico}
            heading="MOQ"
            desc="MOQ yang rendah ditujukan pada pelaku usaha mikro, kecil, dan menengah untuk meningkatkan keuntungan dan fleksibilitas"
          />
          <FiturDiv
            icon={InNoTimeAmico}
            heading="Pengiriman Kilat"
            desc="Pengiriman yang cepat dan terjadwal dengan penjaminan yang menyesuaikan pada kebutuhan harian atau mingguan dari bisnis Anda"
          />
        </FiturWrapper>
      </FiturContainer>
    </>
  );
};

export default Fitur;
