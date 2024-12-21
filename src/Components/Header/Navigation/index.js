import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isopenSidebarVal, setisopenSidebarVal] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    if (location.pathname === "/") {
      setisopenSidebarVal(true);
    } else {
      setisopenSidebarVal(false);
    }
  }, [location]);

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1">
            {location.pathname === "/" && (
              <div className="catWrapper">
                <Button
                  className="allCartTab align-items-center"
                  onClick={() => setisopenSidebarVal(!isopenSidebarVal)}
                >
                  <span className="icon1 mr-2">
                    <IoIosMenu />
                  </span>
                  <span className="text"> DANH MỤC </span>
                  <span className="icon2 ml-2">
                    <FaAngleDown />
                  </span>
                </Button>
                <div className={`sidebarnav ${isopenSidebarVal ? "open" : ""}`}>
                  <ul>
                    <li>
                      <Link to="/">
                        <Button>
                          <span style={{ fontWeight: '600' }}>Áo</span>
                           <FaAngleRight className="ml-auto" />
                        </Button>
                      </Link>
                      <div className="submenu ">
                        <Link to="/">
                          <Button> Áo sơ mi  </Button>
                        </Link>
                        <Link to="/">
                          <Button> Áo thun  </Button>
                        </Link>
                        <Link to="/">
                          <Button> Áo khoác  </Button>
                        </Link>
                        <Link to="/">
                          <Button> Áo cadigan </Button>
                        </Link>
                        <Link to="/">
                          <Button> Áo vest - blazer  </Button>
                        </Link>
                        <Link to="/">
                          <Button> Áo chống nắng </Button>
                        </Link>
                        <Link to="/">
                          <Button> Áo phao   </Button>
                        </Link>
                        <Link to="/">
                          <Button> Áo thể thao  </Button>
                        </Link>
                        
                      </div>
                    </li>
                    <li>
                      <Link to="/">
                        <Button>
                        <span style={{ fontWeight: '600' }}>Quần</span>
                            <FaAngleRight className="ml-auto" />
                        </Button>
                      </Link>
                      <div className="submenu  ">
                        <Link to="/">
                          <Button> Quần tây</Button>
                        </Link>
                        <Link to="/">
                          <Button> Quần jeans  </Button>
                        </Link>
                        <Link to="/">
                          <Button>Quần legging</Button>
                        </Link>
                        <Link to="/">
                          <Button> Quần short </Button>
                        </Link>
                        <Link to="/">
                          <Button> Quần thể thao</Button>
                        </Link>
                        <Link to="/">
                          <Button> Quần kaki</Button>
                        </Link><Link to="/">
                          <Button> Quần nỉ</Button>
                        </Link>
                        <Link to="/">
                          <Button> Quần âu</Button>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <Link to="/">
                        <Button>
                        <span style={{ fontWeight: '600' }}>Thời trang nữ</span>
                          <FaAngleRight className="ml-auto" />
                        </Button>
                      </Link>
                      <div className="submenu">
                        <Link to="/">
                          <Button> Đầm  </Button>
                        </Link>
                        <Link to="/">
                          <Button> Chân váy  </Button>
                        </Link>
                        <Link to="/">
                          <Button> Áo croptop </Button>
                        </Link>
                      
                      </div>
                    </li>
                    
                    <li>
                      <Link to="/">
                        <Button>
                        <span style={{ fontWeight: '600' }}>Phụ kiện</span>
                           <FaAngleRight className="ml-auto" />
                        </Button>
                      </Link>
                      <div className="submenu">
                        <Link to="/">
                          <Button> Túi xách</Button>
                        </Link>
                        <Link to="/">
                          <Button> Giày  </Button>
                        </Link>
                        <Link to="/">
                          <Button> Dép</Button>
                        </Link>
                        <Link to="/">
                          <Button> Mũ </Button>
                        </Link>
                        <Link to="/">
                          <Button> Thắt lưng</Button>
                        </Link>
                        <Link to="/">
                          <Button> Kính mắt</Button>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <Link to="/">
                        <Button>
                          <span style={{ fontWeight: '600' }}>Bộ sưu tập</span>  <FaAngleRight className="ml-auto" />
                        </Button>
                      </Link>
                      <div className="submenu">
                        <Link to="/">
                          <Button> Đồ bộ Pijama </Button>
                        </Link>
                        <Link to="/">
                          <Button> Đồ đông cho căp đôi  </Button>
                        </Link>
                        <Link to="/">
                          <Button> Áo giữ nhiệt cao cấp </Button>
                        </Link>
                        <Link to="/">
                          <Button> Áo chông nắng </Button>
                        </Link>
                       
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="col-sm-10 navPart2 d-flex align-center">
            <ul className="list list-inline w100">
              <li className="list-inline-item">
                <Link to="/cat">
                  <Button> NAM</Button>
                </Link>
                <div className="submenu shadow">
                <Link to="/">
                          <Button> Quần tây </Button>
                        </Link>
                        <Link to="/">
                          <Button> Quần jean </Button>
                        </Link>
                        <Link to="/">
                          <Button> Quần short </Button>
                        </Link>
                        <Link to="/">
                          <Button> Quần kaki </Button>
                        </Link>
                        <Link to="/">
                          <Button> Quần jogger  </Button>
                        </Link>
                        <Link to="/">
                          <Button> Áo sơmi </Button>
                        </Link>
                        <Link to="/">
                          <Button> Áo thun  </Button>
                        </Link>
                        <Link to="/">
                          <Button> Áo polo  </Button>
                        </Link>
                        <Link to="/">
                          <Button> Áo hoodie  </Button>
                        </Link>
                        <Link to="/">
                          <Button> Áo vest  </Button>
                        </Link>
                        <Link to="/">
                          <Button> Áo khoác </Button>
                        </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/cat">
                  <Button> UNISEX </Button>
                </Link>
                <div className="submenu shadow">
                  
                <Link to="/">
                          <Button> Áo thun unisex</Button>
                        </Link>
                        <Link to="/">
                          <Button> Áo hoodie  </Button>
                        </Link>
                        <Link to="/">
                          <Button> Áo khoác</Button>
                        </Link>
                        <Link to="/">
                          <Button> Quần jeans </Button>
                        </Link>
                        <Link to="/">
                          <Button> Quần jogger</Button>
                        </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/cat">
                  <Button> NỮ </Button>
                </Link>
                <div className="submenu shadow">
                 
                <Link to="/">
                          <Button> Áo sơ mi </Button>
                        </Link>
                        <Link to="/">
                          <Button> Áo thun </Button>
                        </Link>
                        <Link to="/">
                          <Button> Áo croptop </Button>
                        </Link>
                        <Link to="/">
                          <Button> Áo cadigan </Button>
                        </Link>
                        <Link to="/">
                          <Button> Áoo khoác </Button>
                        </Link>
                        <Link to="/">
                          <Button> Chân váy </Button>
                        </Link>
                        <Link to="/">
                          <Button>Đầm body </Button>
                        </Link>
                        <Link to="/">
                          <Button> Váy babydoll </Button>
                        </Link>
                        <Link to="/">
                          <Button> Quần jeans </Button>
                        </Link>
                        <Link to="/">
                          <Button> Quuần legging </Button>
                        </Link>
                        <Link to="/">
                          <Button> Quuần culottes </Button>
                        </Link>
                        <Link to="/">
                          <Button> Quần legging </Button>
                        </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/cat">
                  <Button> PHỤ KIỆN </Button>
                </Link>
                <div className="submenu shadow">
                <Link to="/">
                          <Button> Túi xách</Button>
                        </Link>
                        <Link to="/">
                          <Button> Giày  </Button>
                        </Link>
                        <Link to="/">
                          <Button> Dép</Button>
                        </Link>
                        <Link to="/">
                          <Button> Mũ </Button>
                        </Link>
                        <Link to="/">
                          <Button> Thắt lưng</Button>
                        </Link>
                        <Link to="/">
                          <Button> Kính mắt</Button>
                        </Link>
                </div>
              </li>
              {/* <li className="list-inline-item">
                <Link to="/">
                  <Button> TIN TỨC </Button>
                </Link>
              </li> */}
              <li className="list-inline-item ">
                <Link to="/introduct-dalatfashion">
                  <Button
                    className={
                      isActive("/introduct-dalatfashion") ? "activeGT" : ""
                    }
                  >
                    {" "}
                    GIỚI THIỆU{" "}
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="contact-dalatfashion">
                  <Button> LIÊN HỆ </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
