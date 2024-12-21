import { GrUpdate } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";
import { CiBadgeDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="topInfo row">
          <div className="col d-flex align-items-center">
            <span>
              <GrUpdate />
            </span>
            <span className="ml-2"> Luôn cập theo xu hướng</span>
          </div>

          <div className="col d-flex align-items-center">
            <span>
              <TbTruckDelivery />
            </span>
            <span className="ml-2"> Freeship cho hóa đơn trên 500K</span>
          </div>

          <div className="col d-flex align-items-center">
            <span>
              <RiDiscountPercentLine />
            </span>
            <span className="ml-2"> Săn Deal hời hàng ngày</span>
          </div>

          <div className="col d-flex align-items-center">
            <span>
              <CiBadgeDollar />
            </span>
            <span className="ml-2"> Hàng xịn giá rẻ nhất thị trường</span>
          </div>
        </div>
        <div className="row mt-5 linksWrap">
          <div className="col">
            <ul>
              <h5> DỊCH VỤ KHÁCH HÀNG</h5>
              <li>
                <Link to="#">Chính sách khách hàng thân thiết</Link>
              </li>
              <li>
                <Link to="#">Chính sách đổi trả</Link>
              </li>
              <li>
                <Link to="#">Chính sách bảo mật</Link>
              </li>
              <li>
                <Link to="#">Hướng dẫn chọn size</Link>
              </li>
              <li>
                <Link to="#">Đăng ký đối tác</Link>
              </li>
            </ul>
          </div>

          <div className="col">
            <ul>
              <h5> THÔNG TIN VỀ CHÚNG TÔI</h5>
              <li>
                <Link to="/introduct-dalatfashion">Giới thiệu</Link>
              </li>
              <li>
                <Link to="/contact-dalatfashion">Liên hệ</Link>
              </li>
              <li>
                <Link to="#">Tuyển dụng</Link>
              </li>
              <li>
                <Link to="#">Tin tức</Link>
              </li>
              <li>
                <Link to="#">Hệ thống cửa hàng</Link>
              </li>
            </ul>
          </div>

          <div className="col">
            <ul>
              <h5>LIÊN HỆ</h5>
              <li>
                <Link to="https://s.net.vn/bgDd"target="_blank">
                  Địa chỉ: 120 Hoàng Minh Thảo, Hòa Khánh Nam,
                   Liên Chiểu,  Đà Nẵng
                </Link>
              </li>
              <li>
                <Link to="#">Số điện thoại: 1900.1900</Link>
              </li>
              <li>
                <Link to="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBnqBvnLVmmKLZvMFvGghbmZbShBQVJCzCrsccSVCbXdHlKzzQDkqSKzbqmsvxgJfTnlbKh" target="_blank">
                  Email: support@dalatfashion.com.vn
                </Link>
              </li>
              <li className="Social">
                <span className="mxh">
                  <h5>Mạng xã hội: </h5>{" "}
                </span>

                <span>
                  <Link to="https://www.facebook.com/" target="_blank">
                    <img
                      className="imgsocial"
                      src={
                        "https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-facebook.png"
                      }
                    />
                  </Link>
                </span>
                <span>
                  <Link to="https://www.instagram.com/" target="_blank">
                    <img
                      className="imgsocial"
                      src={
                        "https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-instagram.png"
                      }
                    />
                  </Link>
                </span>
                <span>
                  <Link to="https://www.tiktok.com/"  target="_blank">
                    <img
                      className="imgsocial"
                      src={
                        "https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-tiktok.png"
                      }
                    />
                  </Link>
                </span>
                <span>
                  <Link to="https://www.youtube.com/" target="_blank">
                    <img
                      className="imgsocial"
                      src={
                        "https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-youtube.png"
                      }
                    />
                  </Link>
                </span>
              </li>
            </ul>
          </div>

          <div className="col">
            <ul>
              <h5> THANH TOÁN VÀ VẬN CHUYỂN</h5>

              <h5> Thanh toán miễn phí với</h5>
              <li>
                <span>
                  <img
                    src={"https://hoanghamobile.com/Content/web/img/visa.png"}
                  />
                </span>
                <span>
                  <img
                    src={"https://hoanghamobile.com/Content/web/img/vnpay.png"}
                  />
                </span>
                <span>
                  <img
                    src={
                      "https://hoanghamobile.com/Content/web/img/zalopay.png"
                    }
                  />
                </span>
              </li>
              <h5> Vận chuyển</h5>
              <li>
                <span>
                  <img
                    src={"https://hoanghamobile.com/Content/web/img/vnpost.png"}
                  />
                </span>
                <span>
                  <img
                    src={
                      "https://hoanghamobile.com/Content/web/img/nhattin.png"
                    }
                  />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" copyright mt-3 pt-3 pb-1 d-flex">
        <ul>
          <li> Đồ án nhóm 1 - DALAT Fashion</li>
         
          
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
