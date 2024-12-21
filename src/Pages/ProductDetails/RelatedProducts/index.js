import { Button } from "@mui/material";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Productitem from "../../../Components/Productitem";

const RelatedProducts = (props) => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between mt-3">
        <div className="info w-75">
          <h3 className="mb-0 hd  ">{props.title}</h3>
        </div>
        <Button className="viewAllButton ml-auto">See all</Button>
      </div>

      <div className="product_row w-100 mt-4">
        <Swiper
          slidesPerView={4}
          spaceBetween={8}
          slidesPerGroup={1}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Productitem />
          </SwiperSlide>
          <SwiperSlide>
            <Productitem />
          </SwiperSlide>
          <SwiperSlide>
            <Productitem />
          </SwiperSlide>
          <SwiperSlide>
            <Productitem />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default RelatedProducts;
