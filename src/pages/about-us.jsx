import {React} from 'react'
import Banner from "../components/Banner";

const AboutUs = () => {
  const gradient1 = 'to bottom, rgba(255,255,255,0.9), rgba(255, 200, 230,0.4)';
  const gradient2 = 'to bottom, rgba(255, 200, 230, 0.4), rgba(255, 160, 220, 0.6)';
  const gradient3 = 'to bottom, rgba(255, 160, 220, 0.5), rgba(255, 141, 224, 0.9)';
  return (
    <>
        <Banner 
            title="Visi"
            description={"Sebagai distributor, memberikan dan menyediakan bahan sayuran segar dan buah-buahan lokal di Indonesia, serta memastikan pelayanan yang baik kepada setiap konsumen growceria"}
            background="'./visi-background.jpeg'"
            // gradient={gradient1}
            gradient={'to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.8)'}
        />
        <Banner 
            title="Misi"
            description={
                <ul>
                    <li>Menyediakan layanan pengiriman bahan makanan yang inovatif dan efisien.</li>
                    <li>Mendukung petani lokal dan praktik pertanian berkelanjutan.</li>
                    <li>Mengedukasi masyarakat tentang pentingnya konsumsi makanan segar dan sehat.</li>
                    <li>Terus berinovasi dalam teknologi untuk meningkatkan pengalaman belanja pelanggan.</li>
                </ul>
            } 
            background="'./misi-background.jpg'"
            // gradient={gradient2}
            gradient={'to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.8)'}
        />
        <Banner 
            title="Bekerjasama dengan Kami"
            description={
                <ul>
                    <li>Menyediakan layanan pengiriman bahan makanan yang inovatif dan efisien.</li>
                    <li>Mendukung petani lokal dan praktik pertanian berkelanjutan.</li>
                    <li>Mengedukasi masyarakat tentang pentingnya konsumsi makanan segar dan sehat.</li>
                    <li>Terus berinovasi dalam teknologi untuk meningkatkan pengalaman belanja pelanggan.</li>
                </ul>
            } 
            background="'./partner-background.webp'"
             // gradient={gradient3}
            gradient={'to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.8)'}
        /> 
    </>
  );
};

export default AboutUs;