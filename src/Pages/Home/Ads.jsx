import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

// Import local images
import A1 from '../../img/A1.png';
import A2 from '../../img/A2.png';
import A3 from '../../img/A3.png';
import A4 from '../../img/A4.png';


// Update adsElement to reference local images
const adsElement = [
  { imageUrl: A1 },
  { imageUrl: A2 },
  { imageUrl: A3 },
  { imageUrl: A4 },

];

const Ads = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay]}
      className="rounded-lg overflow-hidden"
    >
      {adsElement.map(({ imageUrl }, index) => (
        <SwiperSlide key={index}>
          <img
            src={imageUrl}
            alt={`Ad${index + 1}`}
            className="w-full object-contain rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Ads;
