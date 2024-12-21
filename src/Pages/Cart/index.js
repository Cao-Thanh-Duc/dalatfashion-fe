import { Button } from '@mui/material';
import Rating from '@mui/material/Rating';
import Tooltip from '@mui/material/Tooltip';
import { IoBagCheckOutline } from 'react-icons/io5';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import QuantityBox from '../../Components/QuantityBox';

const Cart = () => {
  return (
    <>
      <section className='section cartPage'>
        <div className='container border'>
          <h2 className='hd mb-0 mt-3'>Giỏ hàng</h2>
          <p>
            Có <b className='text-red'>3</b> sản phẩm trong giỏ hàng của bạn
          </p>
          <div className='row '>
            <div className='col-md-9 pr-5 '>
              <div className='table-responsive '>
                <table className='table border '>
                  <thead>
                    <tr>
                      <th width='30%' className='item'>
                        {' '}
                        Sản phẩm
                      </th>
                      <th width='20%' className='item'>
                        {' '}
                        Giá
                      </th>
                      <th width='20%' className='item'>
                        {' '}
                        Số lượng
                      </th>
                      <th width='20%' className='item'>
                        {' '}
                        Thành tiền
                      </th>
                      <th width='10%' className='item'>
                        {' '}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td width='35%'>
                        <Link to='/product/1'>
                          <div className='d-flex align-items-center cartItemimgWrapper'>
                            <div className='imgWrapper'>
                              <img
                                src='https://product.hstatic.net/200000642007/product/50bks_3atsl0134_1_1bb3848de8f84e66b01e56f66edd5898_51bcbdb5334245c28e49a77eaa3300b1_master.jpg'
                                className='w-100'
                              />
                            </div>

                            <div className='info px-3'>
                              <h6> Áo thun unisex MLB</h6>
                              <Rating
                                name='read-only'
                                value={4.5}
                                readOnly
                                precision={0.5}
                                size='small'
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width='20%'> 299.000 đ</td>
                      <td width='20%'>
                        <QuantityBox />
                      </td>
                      <td width='20%'>299.000 đ</td>
                      <td width='10%'>
                        <Tooltip
                          title='Xóa khỏi giỏ hàng'
                          placement='top-start'
                        >
                          <span className='delete'>
                            <RiDeleteBin5Fill />
                          </span>
                        </Tooltip>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td width='35%'>
                        <Link to='/product/1'>
                          <div className='d-flex align-items-center cartItemimgWrapper'>
                            <div className='imgWrapper'>
                              <img
                                src='https://product.hstatic.net/200000642007/product/50bks_3atsl0134_1_1bb3848de8f84e66b01e56f66edd5898_51bcbdb5334245c28e49a77eaa3300b1_master.jpg'
                                className='w-100'
                              />
                            </div>

                            <div className='info px-3'>
                              <h6> Áo thun unisex MLB</h6>
                              <Rating
                                name='read-only'
                                value={4.5}
                                readOnly
                                precision={0.5}
                                size='small'
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width='20%'> 299.000 đ</td>
                      <td width='20%'>
                        <QuantityBox />
                      </td>
                      <td width='20%'>299.000 đ</td>
                      <td width='10%'>
                        <Tooltip
                          title='Xóa khỏi giỏ hàng'
                          placement='top-start'
                        >
                          <span className='delete'>
                            <RiDeleteBin5Fill />
                          </span>
                        </Tooltip>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td width='35%'>
                        <Link to='/product/1'>
                          <div className='d-flex align-items-center cartItemimgWrapper'>
                            <div className='imgWrapper'>
                              <img
                                src='https://product.hstatic.net/200000642007/product/50bks_3atsl0134_1_1bb3848de8f84e66b01e56f66edd5898_51bcbdb5334245c28e49a77eaa3300b1_master.jpg'
                                className='w-100'
                              />
                            </div>

                            <div className='info px-3'>
                              <h6> Áo thun unisex MLB</h6>
                              <Rating
                                name='read-only'
                                value={4.5}
                                readOnly
                                precision={0.5}
                                size='small'
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width='20%'> 299.000 đ</td>
                      <td width='20%'>
                        <QuantityBox />
                      </td>
                      <td width='20%'>299.000 đ</td>
                      <td width='10%'>
                        <Tooltip
                          title='Xóa khỏi giỏ hàng'
                          placement='top-start'
                        >
                          <span className='delete'>
                            <RiDeleteBin5Fill />
                          </span>
                        </Tooltip>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card border p-3 cartDetails'>
                <h4>Tạm tính</h4>
                <div className='d-flex align-items-center mb-3'>
                  <span> Tổng cộng</span>
                  <span className='ml-auto text-red font-weight-bold'>
                    {' '}
                    897.000 đ
                  </span>
                </div>
                <div className='d-flex align-items-center  mb-3'>
                  <span>Phí vận chuyển</span>
                  <span className='ml-auto text-red'> 0 đ</span>
                </div>
                <div className='d-flex align-items-center  mb-3'>
                  <span>Giao tới</span>
                  <span className='ml-auto '> Quảng Bình</span>
                </div>
                <div className='d-flex align-items-center mb-3 '>
                  <span> Thành tiền</span>
                  <span className='ml-auto text-red font-weight-bold'>
                    {' '}
                    897.000 đ
                  </span>
                </div>
                <Button className='btn-blue btn-lg btn-big '>
                  <IoBagCheckOutline className='checkout' />
                  Thanh toán
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Cart;
