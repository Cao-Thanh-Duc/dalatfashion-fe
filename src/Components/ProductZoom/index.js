import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { useRef } from "react";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

const ProductZoom = ({ activeColor }) => {
  // const zoomSliderBig = useRef();
  // const zoomSlider = useRef();
  // const goto = (index) => {
  //   zoomSlider.current.slickGoTo(index);
  //   zoomSliderBig.current.slickGoTo(index);
  // };
  // var settings = {
  //   dots: false,
  //   infinite: false,
  //   speed: 100,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   fade: false,
  //   arrows: true,
  // };

  // var setting2 = {
  //   dots: false,
  //   infinite: false,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   speed: 100,
  //   fade: false,
  //   arrows: false,
  // };
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();
  const goto = (index) => {
    zoomSlider.current.slickGoTo(index);
    zoomSliderBig.current.slickGoTo(index);
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 100,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };
  const setting2 = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 100,
    fade: false,
    arrows: false,
  };
  const images = {
    1: [
      "https://product.hstatic.net/200000642007/product/50bks_3atsl0134_1_1bb3848de8f84e66b01e56f66edd5898_51bcbdb5334245c28e49a77eaa3300b1_master.jpg",
      "https://product.hstatic.net/200000642007/product/50bks_3atsl0134_2_ee2906b3af5343189ae618be5b4cd7bb_94f09751303a40aeac2d5374cf2b19d4_master.jpg",
      "https://product.hstatic.net/200000642007/product/50bks_3atsl0134_3_c8664dd11dfa4ad498443d65cce89df7_b0c49b2191364e2ea97d2c4bb684f412_master.jpg",
      "https://product.hstatic.net/200000642007/product/50bks_3atsl0134_4_8ea34e8994384a17a951447ebd3bb385_ab7a0c2f6e8647b490efbae4bd33fafe_master.jpg",
      "https://product.hstatic.net/200000642007/product/50bks_3atsl0134_7_13b22f9eaa6342d08cf9d4640403bc5e_b71776d00e3641edba49ed05b7babe41_master.jpg",
    ],
    2: [
      "https://product.hstatic.net/200000642007/product/50sal_3atsl0134_1_2c6860f8cd4144fcae2ba058a942732f_b66fb94c53c54620897ee61a8565aea0_master.jpg",
      "https://product.hstatic.net/200000642007/product/50sal_3atsl0134_2_31ffe1dd319a46298d47e005e37bb379_78846693f06642dd99c49e31d7771d54_master.jpg",
      "https://product.hstatic.net/200000642007/product/50sal_3atsl0134_3_0874f43682c244769b02d308c7276ce5_9e0512d2a40a46ba8221cf1a6f743911_master.jpg",
      "https://product.hstatic.net/200000642007/product/50sal_3atsl0134_4_36ca67172deb4e37a7b3da76440ad8e8_328c6e449993411dbd46758c1f1574cc_master.jpg",
      "https://product.hstatic.net/200000642007/product/50sal_3atsl0134_6_f08e2244ac764579a1f8864db6821e7d_a96dd95496d544b988b8570c77846dc8_master.jpg",
    ],
    3: [
      "https://product.hstatic.net/200000642007/product/07mtl_3atsl0134_1_fd8f1c9cc034497e9619df8e5d7911c8_f02e695ec8c74f5e9143d96aa73eb121_master.jpg",
      "https://product.hstatic.net/200000642007/product/07mtl_3atsl0134_2_d83bcee7fa934c96bca7a84e23b5f348_ae74c5383cad4cf18e56332fb8014a3b_master.jpg",
      "https://product.hstatic.net/200000642007/product/07mtl_3atsl0134_3_4e213458dfc243e893c5c7e981a78507_300493e42d524a849dc4597b0ab465c1_master.jpg",
      "https://product.hstatic.net/200000642007/product/07mtl_3atsl0134_4_b8c9fd16cfee46759bd2c37d44fb1fe6_79f0db95d4ab4f329738bd72670108cf_master.jpg",
      "https://product.hstatic.net/200000642007/product/07mtl_3atsl0134_6_184de34706774f8fa29452cef530f430_f97a6b849272422eb62412007fefe37b_master.jpg",
    ],
    4: [
      "https://product.hstatic.net/200000642007/product/43mgl_3atsl0134_1_3d0cfd6650a648399df30cbbc1b8cab8_ae7ad873261d41839e4118e680c01fbc_master.jpg",
      "https://product.hstatic.net/200000642007/product/43mgl_3atsl0134_2_19c220a0d074425184a235d2931b7fa8_810e88ddad6445ea81ce2ee8c9a40fc7_master.jpg",
      "https://product.hstatic.net/200000642007/product/43mgl_3atsl0134_3_5a072798f98c45b292993e7efbe848b5_66cffe088dfb471d9373fd581365f6e9_master.jpg",
      "https://product.hstatic.net/200000642007/product/43mgl_3atsl0134_4_10f41f68fc75488f9364741a5e54faa7_fb1cd50ba1344455baf64ed330aa3c3e_master.jpg",
      "https://product.hstatic.net/200000642007/product/43mgl_3atsl0134_6_a5efd7cd2f3a42deaccc2747885023df_d97c8510d92a447da4685b4ff6726d68_master.jpg",
    ],
  };
  return (
    // <div className="product-zoom">
    //   {" "}
    //   <div className="productZoom position-relative">
    //     {" "}
    //     <div className="badge bg-primary">-30%</div>{" "}
    //     <Slider {...setting2} className="zoomSliderBig" ref={zoomSliderBig}>
    //       {" "}
    //       {images[activeColor].map((src, index) => (
    //         <div className="item" key={index}>
    //           {" "}
    //           <InnerImageZoom
    //             zoomType="hover"
    //             zoomScale={1}
    //             src={
    //               "https://product.hstatic.net/200000642007/product/50bks_3atsl0134_1_1bb3848de8f84e66b01e56f66edd5898_51bcbdb5334245c28e49a77eaa3300b1_master.jpg"
    //             }
    //           />
    //         </div>
    //       ))}{" "}
    //     </Slider>{" "}
    //   </div>{" "}
    //   <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
    //     {" "}
    //     {images[activeColor].map((src, index) => (
    //       <div className="item" key={index}>
    //         {" "}
    //         <img
    //           src={
    //             "https://product.hstatic.net/200000642007/product/50bks_3atsl0134_1_1bb3848de8f84e66b01e56f66edd5898_51bcbdb5334245c28e49a77eaa3300b1_master.jpg"
    //           }
    //           className="w-100"
    //           onClick={() => goto(index)}
    //         />{" "}
    //       </div>
    //     ))}{" "}
    //   </Slider>{" "}
    // </div>
    <div className="product-zoom">
      <div className="productZoom position-relative">
        <div className="badge bg-primary">-30%</div>
        <Slider {...setting2} className="zoomSliderBig" ref={zoomSliderBig}>
          {images[activeColor] && Array.isArray(images[activeColor]) ? (
            images[activeColor].map((src, index) => (
              <div className="item" key={index}>
                <InnerImageZoom zoomType="hover" zoomScale={1} src={src} />
              </div>
            ))
          ) : (
            <>
              <div className="item">
                <InnerImageZoom
                  zoomType="hover"
                  zoomScale={1}
                  src="https://product.hstatic.net/200000642007/product/50bks_3atsl0134_1_1bb3848de8f84e66b01e56f66edd5898_51bcbdb5334245c28e49a77eaa3300b1_master.jpg"
                />
              </div>
            </>
          )}
        </Slider>
      </div>
      <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
        {images[activeColor] && Array.isArray(images[activeColor]) ? (
          images[activeColor].map((src, index) => (
            <div className="item" key={index}>
              <img src={src} className="w-100" onClick={() => goto(index)} />
            </div>
          ))
        ) : (
          <>
            <div className="item">
              <img
                src="https://product.hstatic.net/200000642007/product/50bks_3atsl0134_1_1bb3848de8f84e66b01e56f66edd5898_51bcbdb5334245c28e49a77eaa3300b1_master.jpg"
                className="w-100"
              />
            </div>
          </>
        )}
      </Slider>
    </div>
  );
};
export default ProductZoom;
