import { Swiper, SwiperSlide } from 'swiper/react';
import { West, East} from '@mui/icons-material';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/HomeSlider.css'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from '../assets/coco_peat/image1.png';
import slide_image_2 from '../assets/coco_peat/image2.png';
import slide_image_3 from '../assets/coco_peat/image3.png';
import slide_image_4 from '../assets/coco_peat/image4.png';
import slide_image_5 from '../assets/coco_peat/image5.jpg';
import slide_image_6 from '../assets/coco_peat/image6.png';
import slide_image_7 from '../assets/coco_peat/image7.png';
import slide_image_8 from '../assets/coco_peat/image8.jpg';

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
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
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