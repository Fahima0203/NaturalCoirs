import { Swiper, SwiperSlide } from 'swiper/react';
import { West, East} from '@mui/icons-material';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/HomeSlider.css'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// import slide_image_1 from '../assets/coco_peat/image1.png';
import slide_image_3 from '../assets/coco_peat/image3.png';
import slide_image_6 from '../assets/coco_peat/image6.png';
import slide_image_7 from '../assets/coco_peat/load image/image3.png';
import slide_image_8 from '../assets/coco_peat/image8.jpg';
import block5b from "../assets/coco_peat/load image/row_no_watermark.png";
import chips6 from "../assets/products/Coco Chips Blocks/packed.jpg"; 
import ply_5mm from "../assets/products/Coir Yarn/2 Ply 5 mm/2 Ply 5mm 48 Inches 40 Feet.jpg";
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
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_8} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={block5b} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={chips6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={block5a} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={block650g8} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={coirFibre30Kg} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={coirFibre120Kg3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ply4mm_6} alt="slide_image" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={ply_5mm} alt="slide_image" />
        </SwiperSlide> */}
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
    </div>
  );
}

export default HomeSlider