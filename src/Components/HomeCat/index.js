import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const HomeCat = () => {
  const [itemBg, setItemBg] = useState([
    "#faf8f8",
    "#faf8f8",
    "#faf8f8",
    "#faf8f8",
    "#faf8f8",
    "#faf8f8",
  ]);
  return (
    <section className="homeCat">
      <div className="container">
        <h3 className="mb-3 hd">DANH MỤC NỔI BẬT</h3>
        <Swiper
          slidesPerView={6}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          slidesPerGroup={5}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {itemBg.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="item text-center cursor"
                style={{ background: item }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4659/4659379.png"
                  alt="Category"
                />
                <h5>Nam</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeCat;
