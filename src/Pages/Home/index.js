import HomeBanner from "../../Components/Header/HomeBanner";
import Button from "@mui/material/Button";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProducItem from "../../Components/Productitem";
import HomeCat from "../../Components/HomeCat";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/poster.png";
import banner3 from "../../assets/images/bnn5.png";
import banner4 from "../../assets/images/bnnn2.png";
import banner5 from "../../assets/images/bnnn1.png";
import banner6 from "../../assets/images/poster2.png";
import footer1 from "../../assets/images/footer1.png";
import { IoMailOutline } from "react-icons/io5";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeCat />
      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
                <div className="banner">
                  <img src={banner6} className="cursor w-100" alt="Banner" />
                </div>
                <div className="banner mt-4">
                  <img src={banner2} className="cursor w-100" alt="Banner" />
                </div>
              </div>
            </div>

            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center justify-content-between">
                <div className="info w-75">
                  <h3 className="mb-0 hd">SẢN PHẨM BÁN CHẠY</h3>
                  <p className="text-light text-sml mb-0">
                    Đừng bỏ lỡ các ưu đãi hiện tại cho đến cuối tháng 11
                  </p>
                </div>
                <Button className="viewAllButton ml-auto">See all</Button>
              </div>

              <div className="product_row  w-100 mt-4 d-flex">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={10}
                  slidesPerGroup={1}
                  navigation={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProducItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProducItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProducItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProducItem />
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="d-flex align-items-center justify-content-between mt-4">
                <div className="info w-75">
                  <h3 className="mb-0 hd">SẢN PHẨM MỚI</h3>
                  <p className="text-light text-sml mb-0">
                    Mua ngay để bắt kịp xu hướng.
                  </p>
                </div>
                <Button className="viewAllButton ml-auto">See all</Button>
              </div>

              <div className="product_row productRow2 w-100 mt-4 d-flex">
                <ProducItem />
                <ProducItem />
                <ProducItem />
                <ProducItem />
                <ProducItem />
                <ProducItem />
                <ProducItem />
                <ProducItem />
              </div>

              <div className="d-flex mt-4 mb-5 bannerSec">
                <div className="banner">
                  <img src={banner3} className="cursor w-100" alt="Banner" />
                </div>
                <div className="banner">
                  <img src={banner4} className="cursor w-100" alt="Banner" />
                </div>
                <div className="banner">
                  <img src={banner5} className="cursor w-100" alt="Banner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="newsLetterSection mt-3 mb-3 d-flex align-items-left">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white">
                Giảm 15% cho khách hàng đặt hàng lần đầu
              </p>
              <h4 className="text-white"> ĐĂNG KÝ NHẬN TIN KHUYẾN MÃI</h4>
              <p className="text-light">
                Tham gia đăng ký email của chúng tôi ngay để nhận thông tin cập
                nhật về các
                <br /> chương trình khuyến mãi và phiếu giảm giá.
              </p>
              <form>
                <IoMailOutline />
                <input
                  type="text"
                  placeholder="Vui lòng nhập địa chỉ Email của bạn"
                />
                <Button> Đăng kí</Button>
              </form>
            </div>
            <div className="col-md-6">
              <img src={footer1} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
