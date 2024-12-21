import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { MdClose } from "react-icons/md";
import Rating from "@mui/material/Rating";
import { useContext } from "react";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { IoIosHeartEmpty } from "react-icons/io";
import QuantityBox from "../QuantityBox";
import { MdCompareArrows } from "react-icons/md";
import { MyContext } from "../../App";
import ProductZoom from "../ProductZoom";

const ProducModal = (props) => {
  const context = useContext(MyContext);

  return (
    <>
      <Dialog
        open={true}
        className="productModal"
        onClose={() => context.setisOpenProductModal(false)}
      >
        <Button
          className="close"
          onClick={() => context.setisOpenProductModal(false)}
        >
          <MdClose />
        </Button>
        <h4 className="mb-1 font-weight-bold">
          MLB - Áo thun unisex cổ tròn tay ngắn form suông hiện đại
        </h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center mr-4">
            <span className="text-light"> Thương hiệu: </span>
            <span className="ml-2">
              <b>MLB</b>{" "}
            </span>
          </div>
          <Rating
            name="read-only"
            value={5}
            size="small"
            precision={0.5}
            readOnly
          />
        </div>
        <hr />
        <div className="row mt-2  productDetailsModal">
          <div className="col-md-5">
            <ProductZoom />
          </div>
          <div className="col-md-6">
            <div className=" d-flex info align-items-center mb-3">
              <span className="oldPrice lg mr-2">499.000 đ</span>
              <span className="newPrice text-danger lg">299.000 đ</span>
            </div>
            <span className="badge bg-success">Sẵn hàng</span>
            <p className="mt-3">
              Không phải ngẫu nhiên mà những chiếc áo thun đến từ thương hiệu
              MLB lại chiếm được nhiều cảm tình từ các bạn trẻ đến vậy. Bất kể
              là khi kết hợp với những trang phục hay phụ kiện nào, chiếc áo
              thun lý tưởng này sẽ luôn là tâm điểm cho mọi outfit của bạn.
            </p>
            <div className="d-flex align-items-center">
              <QuantityBox />
              <Button className="btn-blue btn-lg btn-big btn-round ml-3">
                Thêm vào giỏ hàng
              </Button>
            </div>
            <div className="d-flex align-items-center mt-5 actions">
              <Button className="btn-round btn-sml" variant="outlined">
                <IoIosHeartEmpty /> &nbsp; Yêu thích
              </Button>
              {/* <Button className="btn-round btn-sml ml-3" variant="outlined">
                <MdCompareArrows /> &nbsp; So sánh
              </Button> */}
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProducModal;
// 44p22s part13
