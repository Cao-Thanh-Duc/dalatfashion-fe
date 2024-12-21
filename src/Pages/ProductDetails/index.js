import ProductZoom from "../../Components/ProductZoom";
import Rating from "@mui/material/Rating";
import { FiShoppingCart } from "react-icons/fi";
import { Button } from "@mui/material";
import QuantityBox from "../../Components/QuantityBox";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import RelatedProducts from "./RelatedProducts";

const ProducDetails = () => {
  const [activeSize, setActiveSize] = useState(null);
  const [activeColor, setActiveColor] = useState(1);
  const [activeTabs, setActiveTabs] = useState(0);
  const isActive = (index) => {
    setActiveSize(index);
  };
  const isActiveColor = (index) => {
    setActiveColor(index);
  };
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <section className="productDetails section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 pl-5">
            <ProductZoom activeColor={activeColor} />
          </div>

          <div className="col-md-7 pl-5 pr-5">
            <h2 className="hd text-capitalize">
              MLB - Áo thun unisex cổ tròn tay ngắn hiện đại
            </h2>
            <ul className="list list-inline d-flex align-items-center">
              <li className="list-inline-item">
                <div className="d-flex align-items-center">
                  <span className="text-light mr-2"> Thương hiệu: </span>
                  <span>
                    <b>MLB</b>{" "}
                  </span>
                </div>
              </li>
              <li className="list-inline-item ">
                <div className="d-flex align-items-center">
                  {" "}
                  <Rating
                    name="read-only"
                    value={4.5}
                    size="small"
                    precision={0.5}
                    readOnly
                  />
                  <span className="text-light cursor ml-2">2 Đánh giá</span>
                </div>
              </li>
            </ul>
            <div className="d-flex info mb-3">
              <span className="oldPrice"> 499.000 đ</span>
              <span className="newPrice text-danger ml-3"> 299.000 đ</span>
            </div>
            <span className="badge bg-success">Sẵn hàng</span>
           
            <p className="mt-3">
              Không phải ngẫu nhiên mà những chiếc áo thun đến từ thương hiệu
              MLB lại chiếm được nhiều cảm tình từ các bạn trẻ đến vậy. Bất kể
              là khi kết hợp với những trang phục hay phụ kiện nào, chiếc áo
              thun lý tưởng này sẽ luôn là tâm điểm cho mọi outfit của bạn.
            </p>
            {/* Size */}
            <div className="ProductSize d-flex align-items-center">
              <span className="size">Size:</span>

              <ul className="list list-inline mb-0 pl-2">
                <li className="list-inline-item">
                  <a
                    className={`tag ${activeSize === 1 ? "active" : ""}`}
                    onClick={() => isActive(1)}
                  >
                    XS
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className={`tag ${activeSize === 2 ? "active" : ""}`}
                    onClick={() => isActive(2)}
                  >
                    S
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className={`tag ${activeSize === 3 ? "active" : ""}`}
                    onClick={() => isActive(3)}
                  >
                    M
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className={`tag ${activeSize === 4 ? "active" : ""}`}
                    onClick={() => isActive(4)}
                  >
                    L
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className={`tag ${activeSize === 5 ? "active" : ""}`}
                    onClick={() => isActive(5)}
                  >
                    XL
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className={`tag ${activeSize === 6 ? "active" : ""}`}
                    onClick={() => isActive(6)}
                  >
                    2XL
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className={`tag ${activeSize === 7 ? "active" : ""}`}
                    onClick={() => isActive(7)}
                  >
                    3XL
                  </a>
                </li>
              </ul>
            </div>
            {/* Màu */}
            <div className="ProductSize d-flex align-items-center">
              <span className="color">Màu:</span>
              <ul className="list list-inline mb-0 pl-2">
                <li className="list-inline-item">
                  <a
                    className={`tag ${activeColor === 1 ? "active" : ""}`}
                    onClick={() => isActiveColor(1)}
                  >
                    {" "}
                    Đen{" "}
                  </a>
                </li>{" "}
                <li className="list-inline-item">
                  {" "}
                  <a
                    className={`tag ${activeColor === 2 ? "active" : ""}`}
                    onClick={() => isActiveColor(2)}
                  >
                    {" "}
                    Vàng{" "}
                  </a>{" "}
                </li>
                <li className="list-inline-item">
                  <a
                    className={`tag ${activeColor === 3 ? "active" : ""}`}
                    onClick={() => isActiveColor(3)}
                  >
                    {" "}
                    Xanh{" "}
                  </a>
                </li>{" "}
                <li className="list-inline-item">
                  {" "}
                  <a
                    className={`tag ${activeColor === 4 ? "active" : ""}`}
                    onClick={() => isActiveColor(4)}
                  >
                    {" "}
                    Xám{" "}
                  </a>{" "}
                </li>
              </ul>
            </div>

            <div className="d-flex align-items-center mt-1">
              <QuantityBox />
              <Button className="btn-blue btn-lg btn-big btn-round ml-2 addtocart">
                <FiShoppingCart />
                &nbsp; Thêm vào giỏ hàng
              </Button>
              <Tooltip title="Yêu thích" placement="top-start">
                <Button className="btn-blue btn-lg btn-big btn-circle ml-4">
                  <IoIosHeartEmpty />
                </Button>
              </Tooltip>
              {/* <Tooltip title="So sánh" placement="top-start">
                <Button className="btn-blue btn-lg btn-big btn-circle ml-4">
                  <MdCompareArrows />
                </Button>
              </Tooltip> */}
            </div>
          </div>
        </div>

        <br />
        <div className="card mt-5 p-5 detailsPageTabs ">
          <div className="CustomTabs">
            <ul className="list list-inline">
              <li className="list list-inline-item">
                <Button
                  className={`${activeTabs === 0 && "active"}`}
                  onClick={() => {
                    setActiveTabs(0);
                  }}
                >
                  Mô tả sản phẩm
                </Button>
              </li>
              <li className="list list-inline-item">
                <Button
                  className={`${activeTabs === 1 && "active"}`}
                  onClick={() => {
                    setActiveTabs(1);
                  }}
                >
                  Thông tin bổ sung
                </Button>
              </li>

              <li className="list list-inline-item">
                <Button
                  className={`${activeTabs === 2 && "active"}`}
                  onClick={() => {
                    setActiveTabs(2);
                  }}
                >
                  Đánh giá từ khách hàng (2)
                </Button>
              </li>
            </ul>
            <br />
            {activeTabs === 0 && (
              <div className="tabContent">
                <p>
                  Đơn giản nhưng vô cùng thoải mái, chiếc áo thun với hoạ tiết
                  logo đặc trưng quen thuộc được cách điệu khéo léo, in nổi bật
                  ở trước ngực áo là một điểm nhấn bắt mắt, giúp bạn tỏa sáng
                  với vẻ ngoại hình trẻ trung và năng động. Không ngạc nhiên khi
                  đây là một trong những sản phẩm hot nhất của
                </p>
                <br />
                <img
                  className="choosesize"
                  src={
                    "https://file.hstatic.net/1000284478/file/mlb_new_ao_unisex_-_desktop_9701027a890a4e1d885ae36d5ce8ece7.jpg"
                  }
                />
              </div>
            )}
            {activeTabs === 1 && (
              <div className="tabContent">
                <div className="table-reponsive">
                  <table className="table table-bordered">
                    <tbody>
                      <tr className="demo">
                        <th> Thương hiệu</th>
                        <td>
                          <p>MLB</p>
                        </td>
                      </tr>
                      <tr className="test">
                        <th> Xuất xứ</th>
                        <td>
                          <p>Hàn Quốc</p>
                        </td>
                      </tr>
                      <tr className="test">
                        <th> Giới tính</th>
                        <td>
                          <p>Unisex</p>
                        </td>
                      </tr>
                      <tr className="test">
                        <th> Kiểu dáng</th>
                        <td>
                          <p> Áo thun</p>
                        </td>
                      </tr>
                      <tr className="test">
                        <th> Màu sắc</th>
                        <td>
                          <p>Navy, Beige, Grey, Black, Cream</p>
                        </td>
                      </tr>
                      <tr className="test">
                        <th> Chất liệu</th>
                        <td>
                          <p>Cotton</p>
                        </td>
                      </tr>
                      <tr className="test">
                        <th> Hoạ tiết</th>
                        <td>
                          <p> Trơn một màu</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTabs === 2 && (
              <div className="row">
                <div className="col-md-8">
                  <h3> Đánh giá của khách hàng</h3>
                  <br />
                  <div className="card p-4 reviewsCard flex-row">
                    <div className="image">
                      <div className="rounded-circle">
                        <img
                          src="https://ss-images.saostar.vn/wp700/2024/11/10/pc/1731215273859/askv1ugsiu1-5aisdxopmd2-cl87f4bhs83.jpg"
                          alt="Ms. An Tây"
                        />
                      </div>
                      <span className="text-g d-block text-center font-weight-bold">
                        Ms. An Tây
                      </span>
                    </div>
                    <div className="info pl-5">
                      <div className="d-flex align-items-center w-100">
                        <ul className="list-unstyled">
                          <li>
                            <h6 className="text-light">14/11/2024 17:32:19</h6>
                          </li>
                          <li>
                            <p>
                              Sản phẩm rất tốt, chất lượng mà giá lại hời nữa.
                              Nhất định tôi sẽ ủng hộ shop này trong thời gian
                              tới
                            </p>
                          </li>
                        </ul>
                        <div className="ml-auto">
                          <Rating
                            name="half-rating-read"
                            value={4}
                            precision={0.5}
                            readOnly
                            size="small"
                          />
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>

                  <div className="card p-4 reviewsCard flex-row">
                    <div className="image">
                      <div className="rounded-circle">
                        <img
                          src="https://cherryradio.com.au/uploads/singer/avatar/2019/01/695/1547199065_600.jpg"
                          alt="Mr. Chi Dân"
                        />
                      </div>
                      <span className="text-g d-block text-center font-weight-bold">
                        Mr. Chi Dân
                      </span>
                    </div>
                    <div className="info pl-5">
                      <div className="d-flex align-items-center w-100">
                        <ul className="list-unstyled">
                          <li>
                            <h6 className="text-light">14/11/2024 21:03:16</h6>
                          </li>
                          <li>
                            <p>
                              Hàng ở đây chất lượng lắm nha mn, tôi đã mua và sử
                              dụng các sản phẩm ở đây được vài năm rồi, chất
                              lượng luôn đi đầu trong ngành bán lẻ này
                            </p>
                          </li>
                        </ul>
                        <div className="ml-auto">
                          <Rating
                            name="half-rating-read"
                            value={5}
                            precision={0.5}
                            readOnly
                            size="small"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <form className="reviewForm">
                    <h4>Thêm đánh giá cho sản phẩm</h4>
                    <br />
                    <h9></h9>
                    <div className=" form-group">
                      <textarea
                        className="form-control "
                        placeholder=" Hãy viết đánh giá của bạn vào đây with love of you <3"
                        name="review"
                        style={{ height: "150px" }}
                      ></textarea>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control "
                            placeholder=" Tên của bạn"
                            name="username"
                          ></input>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="rating">
                            {" "}
                            {[...Array(5)].map((star, index) => {
                              index += 1;
                              return (
                                <button
                                  type="button"
                                  key={index}
                                  className={
                                    index <= (hover || rating) ? "on" : "off"
                                  }
                                  onClick={() => setRating(index)}
                                  onMouseEnter={() => setHover(index)}
                                  onMouseLeave={() => setHover(rating)}
                                >
                                  {" "}
                                  <span className="star">&#9733;</span>{" "}
                                </button>
                              );
                            })}{" "}
                          </div>
                        </div>
                      </div>
                    </div>

                    <br />
                    <div className="form-group">
                      <Button
                        type="Gửi"
                        className="btn-blue btn-lg btn-big btn-round"
                      >
                        {" "}
                        Gửi đánh giá
                      </Button>
                    </div>
                  </form>
                </div>

                <div className="col-md-4 review">
                  <div className="reviewBox">
                    <h5>Đánh giá tổng quan</h5>
                    <div className="d-flex align-items-center mt-2 Start">
                      <Rating
                        name="half-rating-read"
                        defaultValue={4.5}
                        precision={0.5}
                        readOnly
                      />
                      <strong className="ml-3"> 4.5/5</strong>
                    </div>
                    <div className="progressBarBox d-flex align-items-center">
                      <span className="mr-3"> 5 sao</span>
                      <div
                        className="progress"
                        style={{ width: "85%", height: "20px" }}
                      >
                        <div
                          className="progress-bar bg-success"
                          style={{ width: "50%", height: "20px" }}
                        >
                          50%
                        </div>
                      </div>
                    </div>
                    <div className="progressBarBox d-flex align-items-center">
                      <span className="mr-3"> 4 sao</span>
                      <div
                        className="progress"
                        style={{ width: "85%", height: "20px" }}
                      >
                        <div
                          className="progress-bar bg-success"
                          style={{ width: "50%", height: "20px" }}
                        >
                          50%
                        </div>
                      </div>
                    </div>
                    <div className="progressBarBox d-flex align-items-center">
                      <span className="mr-3"> 3 sao</span>
                      <div
                        className="progress"
                        style={{ width: "85%", height: "20px" }}
                      >
                        <div
                          className="progress-bar bg-success"
                          style={{ width: "0%", height: "20px" }}
                        >
                          0%
                        </div>
                      </div>
                    </div>
                    <div className="progressBarBox d-flex align-items-center">
                      <span className="mr-3"> 2 sao</span>
                      <div
                        className="progress"
                        style={{ width: "85%", height: "20px" }}
                      >
                        <div
                          className="progress-bar bg-success"
                          style={{ width: "0%", height: "20px" }}
                        >
                          0%
                        </div>
                      </div>
                    </div>
                    <div className="progressBarBox d-flex align-items-center">
                      <span className="mr-3"> 1 sao</span>
                      <div
                        className="progress"
                        style={{ width: "85%", height: "20px" }}
                      >
                        <div
                          className="progress-bar bg-success"
                          style={{ width: "0%", height: "20px" }}
                        >
                          0%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <br />
        <RelatedProducts title="DÀNH CHO BẠN" />
      </div>
    </section>
  );
};
export default ProducDetails;
