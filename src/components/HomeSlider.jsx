import { Swiper, SwiperSlide } from 'swiper/react';
import { West, East} from '@mui/icons-material';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/HomeSlider.css'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import plants from '../assets/coco_peat/plants.png';
import organic_product from '../assets/coco_peat/organic_product.png';
import best_cocopeat from '../assets/coco_peat/load image/best_cocopeat.png';
import best_supplier from '../assets/coco_peat/best_supplier.jpg';
import block5b from "../assets/coco_peat/load image/row_no_watermark.png";
import chips6 from "../assets/products/Coco Chips Blocks/packed.jpg"; 
import block5a from "../assets/products/Cocopeat Blocks/5Kg/3inarow.png";
import block650g8 from "../assets/products/Cocopeat Blocks/650g/image8.png";
import coirFibre30Kg from "../assets/products/Coir Fibre/30 Kg Bale/image1.jpg";
import coirFibre120Kg3 from "../assets/products/Coir Fibre/120 Kg Bale/image3.png";
import ply4mm_6 from "../assets/products/Coir Yarn/2 Ply 4 mm/2 Ply 4mm 18 Inches 40 Feet 6.png";


function HomeSlider() {
  return (
    <div className='home-slider-wrapper'>
    <div className="container">
      <h1 className="heading">Warehouse Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {/* <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide> */}
        <SwiperSlide>
          <img src={plants} alt="Premium Cocopeat Blocks Manufacturer India" />
          <div className="slide-caption">Premium Cocopeat Blocks Manufacturer & Exporter in India</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={organic_product} alt="Buy Organic Products" />
          <div className="slide-caption">Buy Organic Products – Natural Cocos</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={best_cocopeat} alt="Best Cocopeat Supplier South India" />
          <div className="slide-caption">Best Cocopeat Supplier in South India</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={best_supplier} alt="Eco-Friendly Cocopeat Exporter" />
          <div className="slide-caption">Eco-Friendly Cocopeat Exporter – Trusted by Growers Worldwide</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={block5b} alt="Cocopeat Blocks for Hydroponics" />
          <div className="slide-caption">Cocopeat Blocks for Hydroponics & Greenhouse Farming</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={chips6} alt="Coconut Husk Chips Bulk Export" />
          <div className="slide-caption">Coconut Husk Chips – Bulk Export & Custom Mixes</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={block5a} alt="Low EC & High EC Cocopeat" />
          <div className="slide-caption">Low EC & High EC Cocopeat – Quality Guaranteed</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={block650g8} alt="650g Cocopeat Bricks Wholesale" />
          <div className="slide-caption">650g Cocopeat Bricks – Wholesale & Retail Supply</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={coirFibre30Kg} alt="Coir Fibre Bales for Export" />
          <div className="slide-caption">Coir Fibre Bales – Export Quality for Mattress & Rope</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={coirFibre120Kg3} alt="Natural Coir Rope Manufacturer" />
          <div className="slide-caption">Natural Coir Rope Manufacturer – Eco-Friendly Solutions</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ply4mm_6} alt="Coir Yarn & Rope for Agriculture" />
          <div className="slide-caption">Coir Yarn & Rope for Agriculture, Packaging & Crafts</div>
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <West style={{ width: '2.2rem', color: '#fff' }}/>
          </div>
          <div className="swiper-button-next slider-arrow">
            <East style={{ width: '2.2rem', color: '#fff' }}/>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
    <style>
      {`
        .slide-caption {
          position: absolute;
          bottom: 18px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0,0,0,0.55);
          color: #fff;
          padding: 0.5rem 1.2rem;
          border-radius: 8px;
          font-size: 1.08rem;
          font-weight: 600;
          text-align: center;
        }
        .swiper-slide {
          position: relative;
        }
      `}
    </style>
    </div>
  );
}

export default HomeSlider