import {React} from 'react'
import Headline from "../components/Headline";
import Products from "../components/Products";

const Produk = () => {
  return (
    <>
      <Headline 
      title="Menyediakan lebih dari 200+ bahan segar untuk kebutuhan bisnis Anda"
      description="Beragam pilihan yang ditawarkan untuk memberikan kemudahan berbelanja di satu platform yang sama"
      button="Beli Sekarang"
      buttonHref="https://wa.me/6281919071301"
      alignRight={true}
      image='./produk-banner.jpeg'
      />
      <Products/>
    </>
  );
};

export default Produk;