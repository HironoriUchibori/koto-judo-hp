// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Panel } from './Panel';

export const Carousel: React.FC = () => {
  const slides = [
    { image: '/src/assets/samples/sample_1.jpg', text: '江東区民大会のお知らせ' },
    { image: '/src/assets/samples/sample_2.jpg', text: '形講習会のお知らせ' },
    { image: '/src/assets/samples/sample_3.png', text: '柔道まつりのお知らせ' },
    { image: '/src/assets/samples/sample_4.jpeg', text: 'HP開設のお知らせ' },
    { image: '/src/assets/samples/sample_5.jpg', text: 'スライド5のテストです' },
  ];

  return ( 
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      loop={true}
      speed={3000} // 少しゆっくり(デフォルトは300)
      autoplay={{
        delay: 5000 // 5秒後に次のスライド
      }}
      spaceBetween={0}
      slidesPerView={3}
      navigation
      pagination={{ el: '.swiper-pagination',clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <Panel image={slide.image} text={slide.text} />
        </SwiperSlide>
      ))}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
};
