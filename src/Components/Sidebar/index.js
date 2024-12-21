import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [value, setValue] = useState([0, 9999999]);
  const [value2, setValue2] = useState(0);

  return (
    <>
      <div className="sidebar">
        <div className="sticky">
          <div className="filterBox">
            <h6>DANH MỤC SẢN PHẨM</h6>
            <div className="scroll">
              <ul>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Áo"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Quần"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Váy"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Áo khoác"
                  />
                </li>

                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Phụ kiện"
                  />
                </li>

                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Giày"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Túi xách"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="filterBox">
            <h6>LỌC THEO GIÁ</h6>
            <RangeSlider
              value={value}
              onInput={setValue}
              min={0}
              max={9999999}
              step={10000}
            />
            <div className="d-flex pt-2 pb-2 priceRange">
              <span>
                {" "}
                <strong className="text-dark"> {value[0]} đ </strong>{" "}
              </span>
              <span className="ml-auto">
                {" "}
                <strong className="text-dark">{value[1]} đ</strong>{" "}
              </span>
            </div>
          </div>
          <div className="filterBox">
            <h6>TRẠNG THÁI</h6>
            <div className="scroll">
              <ul>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Sẵn kho"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Giảm giá"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="filterBox">
            <h6>HÃNG SÁN XUẤT</h6>
            <div className="scroll">
              <ul>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="MLB"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="H&M"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="UNIQLO"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="ZARA"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="ADIDAS"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="NIKE"
                  />
                </li>
              </ul>
            </div>
          </div>

          <Link to="#">
            <img
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif"
              className="w-100"
            />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
