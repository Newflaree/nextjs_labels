import {Box} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


export const SlideShow = () => {
  return (
    <Box
      sx={{
        height: {
          xs: '300px',
          sm: '400px'
        }
      }}
    >
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[ Autoplay, EffectFade, Navigation, Pagination ]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dtkffzs3f/image/upload/v1684949282/slideshow3_trpndo.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dtkffzs3f/image/upload/v1684949282/slideshow2_a6hsj7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dtkffzs3f/image/upload/v1684949282/slideshow1_zplxwp.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dtkffzs3f/image/upload/v1684949282/slideshow4_aqzhw9.jpg" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
