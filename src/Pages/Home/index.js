import Button from '@mui/material/Button';
import React from 'react';
import { IoMailOutline } from 'react-icons/io5';
import 'swiper/css';
import 'swiper/css/navigation';
import HomeBanner from '../../Components/Header/HomeBanner';
import HomeCat from '../../Components/HomeCat';
import ProducItem from '../../Components/Productitem';
import banner3 from '../../assets/images/bnn5.png';
import banner5 from '../../assets/images/bnnn1.png';
import banner4 from '../../assets/images/bnnn2.png';
import footer1 from '../../assets/images/footer1.png';
import banner2 from '../../assets/images/poster.png';
import banner6 from '../../assets/images/poster2.png';

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeCat />
      <section className='homeProducts'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <div className='sticky'>
                <div className='banner'>
                  <img src={banner6} className='cursor w-100' alt='Banner' />
                </div>
                <div className='mt-4 banner'>
                  <img src={banner2} className='cursor w-100' alt='Banner' />
                </div>
              </div>
            </div>

            <div className='col-md-9 productRow'>
              <div className='d-flex align-items-center justify-content-between'>
                <div className='info w-75'>
                  <h3 className='mb-0 hd'>SẢN PHẨM BÁN CHẠY</h3>
                  <p className='mb-0 text-light text-sml'>
                    Đừng bỏ lỡ các ưu đãi hiện tại cho đến cuối tháng 11
                  </p>
                </div>
                <Button className='ml-auto viewAllButton'>See all</Button>
              </div>

              <div className='mt-4 product_row w-100 d-flex'>
                <ProducItem />
              </div>

              <div className='mt-4 d-flex align-items-center justify-content-between'>
                <div className='info w-75'>
                  <h3 className='mb-0 hd'>SẢN PHẨM MỚI</h3>
                  <p className='mb-0 text-light text-sml'>Mua ngay để bắt kịp xu hướng.</p>
                </div>
                <Button className='ml-auto viewAllButton'>See all</Button>
              </div>

              <div className='mt-4 product_row productRow2 w-100 d-flex'>
                <ProducItem />
                <ProducItem />
                <ProducItem />
                <ProducItem />
                <ProducItem />
                <ProducItem />
                <ProducItem />
                <ProducItem />
              </div>

              <div className='mt-4 mb-5 d-flex bannerSec'>
                <div className='banner'>
                  <img src={banner3} className='cursor w-100' alt='Banner' />
                </div>
                <div className='banner'>
                  <img src={banner4} className='cursor w-100' alt='Banner' />
                </div>
                <div className='banner'>
                  <img src={banner5} className='cursor w-100' alt='Banner' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-3 mb-3 newsLetterSection d-flex align-items-left'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <p className='text-white'>Giảm 15% cho khách hàng đặt hàng lần đầu</p>
              <h4 className='text-white'> ĐĂNG KÝ NHẬN TIN KHUYẾN MÃI</h4>
              <p className='text-light'>
                Tham gia đăng ký email của chúng tôi ngay để nhận thông tin cập nhật về các
                <br /> chương trình khuyến mãi và phiếu giảm giá.
              </p>
              <form>
                <IoMailOutline />
                <input type='text' placeholder='Vui lòng nhập địa chỉ Email của bạn' />
                <Button> Đăng kí</Button>
              </form>
            </div>
            <div className='col-md-6'>
              <img src={footer1} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
