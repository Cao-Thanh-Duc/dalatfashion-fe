import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import sp1 from "../../assets/images/sp1.png";
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import { useContext } from "react";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";

const Productitem = (props) => {
  const context = useContext(MyContext);
  const viewProductDetails = (id) => {
    context.setisOpenProductModal(true);
  };

  return (
    <>
      <div className={`productItem ${props.itemview}`}>
        <Link to="/product">
          <div className="imgWrapper">
            <img src={sp1} className="w-100" />
            <span className="badge bg-primary"> -30%</span>
            <div className="actions">
              <Button onClick={() => viewProductDetails(1)}>
                <TfiFullscreen />
              </Button>
              <Button>
                <IoMdHeartEmpty style={{ fontSize: "20px" }} />
              </Button>
            </div>
          </div>
          <div className="info">
            <Link to="/product" className="name">
              <h6> MLB - Áo thun unisex cổ tròn tay ngắn hiện đại</h6>
            </Link>

            <span className="text-success d-block"> Sẵn hàng </span>
           
            <Rating
              className="mt-2 mb-2"
              name="read-only"
              value={5}
              readOnly
              size="small"
              precision={0.1}
            />
            <div className="d-flex">
              <span className="oldPrice"> 499.000 đ</span>
              <span className="newPrice text-danger ml-3"> 299.000 đ</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Productitem;
