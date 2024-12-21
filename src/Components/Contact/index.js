import React from "react";

const Contact = () => {
  return (
    <section className="introduction border">
      <h3>Thông tin liên hệ </h3>
      <table className="table">
        <thead>
          <tr>
            <th>Tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cao Thanh Đức</td>
            <td>caothanhduc@dtu.edu.vn</td>
            <td>012345678</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Nguyễn Thị Lưu Ly</td>
            <td>nguyenthiluuly@dtu.edu.vn</td>
            <td>012345678</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Đoàn Hải Trân</td>
            <td>doanhaitran@dtu.edu.vn</td>
            <td>012345678</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Lê Đại Ánh</td>
            <td>ledaianh@dtu.edu.vn</td>
            <td>012345678</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Trương Thị Ngọc Ánh</td>
            <td>truongthingocanh@dtu.edu.vn</td>
            <td>012345678</td>
          </tr>
        </tbody>
      </table>
      <br />
      <h7>THÔNG TIN CỬA HÀNG</h7>
      <table className="table">
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Địa chỉ: 120 Hoàng Minh Thảo, phường Hòa Khánh Nam, Quận Liên
              Chiểu, Thành phố Đà Nẵng
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Số điện thoại: 1900.1900 </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Thời gian mở cửa: 08h00 - 21h00 </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Hỗ trợ: support@dalatfashion.com.vn </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Khiếu nại: chamsockhachhang@dalatfashion.com.vn </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Contact;
