import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const HomeBanner = () => {
  return (
    <div className="container mt-3">
      <div className="homeBannerSection ">
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          navigation={true}
          loop={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item">
              <img
                src="https://m.yodycdn.com/fit-in/filters:format(webp)/fit-in/filters:format(webp)/products/m3s88399wgxkh3wu7jluong%20ve%20t111800x833.jpg"
                className="w-100"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://m.yodycdn.com/fit-in/filters:format(webp)/fit-in/filters:format(webp)/products/m3cgadg6sxl9s705geohero-ever-phao%20(1).jpg"
                className="w-100"
                alt="Banner 2"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://m.yodycdn.com/fit-in/filters:format(webp)/fit-in/filters:format(webp)/products/m35dpzbctjnatmvg9f83110_1800x833-07.png"
                className="w-100"
                alt="Banner 3"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://m.yodycdn.com/fit-in/filters:format(webp)/fit-in/filters:format(webp)/products/m35dp7owekw8kqlya11800x833%20PC%20hero%20banner%2011.png"
                className="w-100"
                alt="Banner 4"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeBanner;
