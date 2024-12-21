import Sidebar from "../../Components/Sidebar";
import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { FaAngleDown } from "react-icons/fa6";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Productitem from "../../Components/Productitem"; // Đảm bảo đường dẫn chính xác
import bannerr from "../../assets/images/banne.jpg";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Listing = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [productView, setproductView] = useState("four");
  const openDropdown = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <section className="product_Listing_Page">
        <div className="container">
          <div className="productListing d-flex">
            <Sidebar />
            <div className="content-right">
              <img
                src={bannerr}
                className="w-100"
                style={{ borderRadius: "8px" }}
              />

              <div className="showBy mt-3 mb-3 d-flex align-items-center">
                <div className="d-flex align-items-center btnWrapper">
                  <Button
                    className={productView === "one" && "act"}
                    onClick={() => setproductView("one")}
                  >
                    <IoIosMenu />
                  </Button>
                  {/* <Button onClick={() => setproductView("two")}>
                    <HiViewGrid />
                  </Button> */}
                  <Button
                    className={productView === "three" && "act"}
                    onClick={() => setproductView("three")}
                  >
                    <CgMenuGridO />
                  </Button>
                  <Button onClick={() => setproductView("four")}>
                    <TfiLayoutGrid4Alt />
                  </Button>
                </div>
                <div className="ml-auto showByFilter">
                  <Button onClick={handleClick}>
                    Show <FaAngleDown />
                  </Button>
                  <Menu
                    className="w-100 showPerPageDropdown"
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openDropdown}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}> 10</MenuItem>
                    <MenuItem onClick={handleClose}> 20</MenuItem>
                    <MenuItem onClick={handleClose}> 30</MenuItem>
                    <MenuItem onClick={handleClose}> 40</MenuItem>
                    <MenuItem onClick={handleClose}> 50</MenuItem>
                  </Menu>
                </div>
              </div>

              <div className="productListing">
                <Productitem itemview={productView} />
                <Productitem itemview={productView} />
                <Productitem itemview={productView} />
                <Productitem itemview={productView} />
                <Productitem itemview={productView} />
                <Productitem itemview={productView} />
                <Productitem itemview={productView} />
                <Productitem itemview={productView} />
                <Productitem itemview={productView} />
                <Productitem itemview={productView} />
                <Productitem itemview={productView} />
                <Productitem itemview={productView} />
                <Productitem itemview={productView} />
                <Productitem itemview={productView} />
                <Productitem itemview={productView} />
                <Productitem itemview={productView} />
                <Productitem itemview={productView} />
                <Productitem itemview={productView} />
                <Productitem itemview={productView} />
                <Productitem itemview={productView} />
              </div>

              <div className="d-flex align-items-center justify-content-center mt-5">
                <Pagination count={10} color="primary" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
