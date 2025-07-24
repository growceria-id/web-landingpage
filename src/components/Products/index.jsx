// Products.jsx
import React, { useState, useEffect } from "react";
import {
  ProductsContainer,
  ProductsWrapper,
  ProductsTitle,
  ProductsListContainer,
  ProductsList,
  ProductsData,
  ProductsImg,
  ProductsName,
  ProductsCategoryContainer,
  ProductsCategoryList,
  ProductsCategoryData,
  ProductShowcaseContainer,
} from "./ProductElements";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";


const animation = { duration: 45000, easing: (t) => t };

const productMap = {
  sayuran: [
    { name: "Brokoli", image: "./produk/BROKOLI.jpg" },
    { name: "Buncis", image: "./produk/BUNCIS.jpg" },
    { name: "Caisim", image: "./produk/CAISIM.jpg" },
    { name: "Daun Bayam", image: "./produk/DAUN BAYAM.png" },
    { name: "Jagung", image: "./produk/JAGUNG.jpg" },
    { name: "Kacang Panjang", image: "./produk/KACANG PANJANG.jpg" },
    { name: "Kailan", image: "./produk/KAILAN.jpg" },
    { name: "Kembang Kol", image: "./produk/KEMBANG KOL.jpg" },
    { name: "Kentang", image: "./produk/KENTANG.jpg" },
    { name: "Kol", image: "./produk/KOL.jpg" },
    { name: "Labu Siam", image: "./produk/LABU SIAM.jpg" },
    { name: "Lobak", image: "./produk/LOBAK.jpg" },
    { name: "Oyong", image: "./produk/OYONG.jpg" },
    { name: "Pak Choy", image: "./produk/PAK CHOY.jpg" },
    { name: "Pare", image: "./produk/PARE.jpg" },
    { name: "Salada Keriting", image: "./produk/SALADA KERITING.jpg" },
    { name: "Sawi Hijau", image: "./produk/SAWI HIJAU.jpg" },
    { name: "Sawi Putih", image: "./produk/SAWI PUTIH.jpg" },
    { name: "Sayur Nangka", image: "./produk/SAYUR NANGKA.jpg" },
    { name: "Siomak", image: "./produk/SIOMAK.jpg" },
    { name: "Terong Ungu", image: "./produk/TERONG UNGU.jpg" },
    { name: "Timun", image: "./produk/TIMUN.jpg" },
    { name: "Toge", image: "./produk/TOGE.jpg" },
    { name: "Tomat Hijau", image: "./produk/TOMAT HIJAU.jpg" },
    { name: "Tomat Merah", image: "./produk/TOMAT MERAH.jpg" },
    { name: "Ubi Merah", image: "./produk/UBI MERAH.jpg" },
    { name: "Ubi Putih", image: "./produk/UBI PUTIH.jpg" },
    { name: "Seledri", image: "./produk/SELEDRI.jpg" },
    { name: "Wortel", image: "./produk/WORTEL.jpg" }
  ],
  cabeBawang: [
    { name: "Bawang Bombay", image: "./produk/BAWANG BOMBAY.jpg" },
    { name: "Bawang Putih", image: "./produk/BAWANG PUTIH.jpg" },
    { name: "Cabai Keriting Hijau", image: "./produk/CABAI KERITING HIJAU.jpg" },
    { name: "Cabe Merah Besar", image: "./produk/CABE MERAH BESSAR.jpg" },
    { name: "Cabe Rawit Hijau", image: "./produk/CABE RAWIT HIJAU.jpg" },
    { name: "Cabe Rawit Merah", image: "./produk/CABE RAWIT MERAH.jpg" },
    { name: "Cabe Rawit Putih", image: "./produk/CABE RAWIT PUTIH.png" }
  ],
  buah: [
    { name: "Jeruk Limau", image: "./produk/JERUK LIMAU.jpg" },
    { name: "Jeruk Nipis", image: "./produk/JERUK NIPIS.jpg" },
    { name: "Lemon", image: "./produk/LEMON.jpg" }
  ],
  rempah: [
    { name: "Daun Bawang", image: "./produk/DAUN BAWANG.jpg" },
    { name: "Daun Jeruk", image: "./produk/DAUN JERUK.jpg" },
    { name: "Daun Ketumbar", image: "./produk/DAUN KETUMBAR.jpg" },
    { name: "Daun Salam", image: "./produk/DAUN SALAM.jpg" },
    { name: "Daun Seledri", image: "./produk/DAUN SELEDRI.jpg" },
    { name: "Jahe", image: "./produk/JAHE.jpg" },
    { name: "Kemiri Bulat", image: "./produk/KEMIRI BULAT.png" },
    { name: "Kemiri Pecah", image: "./produk/KEMIRI PECAH.png" },
    { name: "Kencur", image: "./produk/KENCUR.jpg" },
    { name: "Ketumbar", image: "./produk/KETUMBAR.jpg" },
    { name: "Kunyit", image: "./produk/KUNYIT.jpg" },
    { name: "Lengkuas", image: "./produk/LENGKUAS.jpg" },
    { name: "Merica", image: "./produk/MERICA.jpg" },
    { name: "Sereh", image: "./produk/SEREH.jpg" },
    { name: "Singkong", image: "./produk/SINGKONG.jpg" }
  ]
};



const Products = () => {
  const [selected, setSelected] = useState("sayuran");

  const commonSliderOptions = {
    loop: true,
    slides: { perView: 4.5, spacing: 15 },
    breakpoints: {
      '(max-width: 768px)': {
        slides: {
          perView: 1.5, // show 1 full + half of next
          spacing: 12,
        },
      },
    },
    created(s) {
      if (s.track.details.slides.length > 5) {
        s.moveToIdx(5, true, animation);
      }
    },
    updated(s) {
      const next = s.track.details.abs + 5;
      s.moveToIdx(next < s.track.details.slides.length ? next : 0, true, animation);
    },
    animationEnded(s) {
      const next = s.track.details.abs + 5;
      s.moveToIdx(next < s.track.details.slides.length ? next : 0, true, animation);
    },
  };

  const [categorySliderRef, instanceRef] = useKeenSlider(
    {
      loop: false,
      slides: {
        perView: 4,
        spacing: 15,
      },
      breakpoints: {
        '(max-width: 640px)': {
          slides: {
            perView: 1.5, // show 1 full + half of next
            spacing: 12,
          },
        },
      },
    }
  )

  const [sayuranRef] = useKeenSlider(commonSliderOptions);
  const [cabeBawangRef] = useKeenSlider(commonSliderOptions);
  const [buahRef] = useKeenSlider(commonSliderOptions);
  const [rempahRef] = useKeenSlider(commonSliderOptions);

  const categories = [
    { key: "sayuran", label: "Sayuran", img: "SAYUR.png" },
    { key: "cabeBawang", label: "Cabe Bawang", img: "CABE BAWANG.png"},
    { key: "buah", label: "Buah", img: "BUAH.png"},
    { key: "rempah", label: "Rempah", img: "REMPAH.png"},
  ];

  const sliderMap = {
    sayuran: sayuranRef,
    cabeBawang: cabeBawangRef,
    buah: buahRef,
    rempah: rempahRef,
  };

  return (
    <ProductsContainer>
      <ProductsWrapper>
        <ProductsTitle>Produk Growceria</ProductsTitle>

        <ProductShowcaseContainer>
          <ProductsCategoryContainer>
            <ProductsCategoryList>
              {categories.map((cat) => (
                <ProductsCategoryData
                  key={cat.key}
                  onClick={() => setSelected(cat.key)}
                  className={`keen-slider__slide ${selected === cat.key ? "active" : ""}`}
                >
                  <ProductsImg $src={"./produk/"+cat.img} />
                  <ProductsName>{cat.label}</ProductsName>
                </ProductsCategoryData>
              ))}
            </ProductsCategoryList>
          </ProductsCategoryContainer>

          <ProductsListContainer>
            <ProductsList ref={sliderMap[selected]} className="keen-slider">
              {productMap[selected].map((item, idx) => (
                <ProductsData
                  key={idx}
                  $src={item.image}
                  className="keen-slider__slide"
                >
                  <ProductsImg $src={item.image} />
                  <ProductsName>{item.name}</ProductsName>
                </ProductsData>
              ))}
            </ProductsList>
          </ProductsListContainer>

        </ProductShowcaseContainer>

      </ProductsWrapper>
    </ProductsContainer>
  );
};

export default Products;
