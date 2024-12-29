import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import sp1 from '../../assets/images/sp1.png';
import { TfiFullscreen } from 'react-icons/tfi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { useContext } from 'react';
import { MyContext } from '../../App';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ProductApi } from '../../apis/product.api';
import { formatCurrency } from '../../utils/currency';

const Productitem = (props) => {
  const {
    data: getProduct,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['products'],
    queryFn: () => ProductApi.getProducts(),
  });

  const context = useContext(MyContext);
  const viewProductDetails = (id) => {
    context.setisOpenProductModal(true);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <>
      <div className={`productItem ${props.itemview} flex`}>
        <div className='flex flex-wrap items-center gap-8'>
          {getProduct?.data?.map((item) => (
            <Link to='/product' key={item.id}>
              <div className='w-64 border rounded-md h-96'>
                <div className='imgWrapper'>
                  <img src={item?.image} className='w-20 h-60 w-100' />
                  <span className='badge bg-primary'> -30%</span>
                  <div className='actions'>
                    <Button onClick={() => viewProductDetails(1)}>
                      <TfiFullscreen />
                    </Button>
                    <Button>
                      <IoMdHeartEmpty style={{ fontSize: '20px' }} />
                    </Button>
                  </div>
                </div>
                <div className='info'>
                  <Link to='/product' className='name'>
                    <h6>{item.name}</h6>
                  </Link>

                  <span className='text-success d-block'> Sẵn hàng </span>

                  <Rating
                    className='mt-2 mb-2'
                    name='read-only'
                    value={5}
                    readOnly
                    size='small'
                    precision={0.1}
                  />
                  <div className='d-flex'>
                    <span className='oldPrice'> {formatCurrency(item?.price)} đ</span>
                    <span className='ml-3 newPrice text-danger'>
                      {' '}
                      {formatCurrency(item?.sale_price)} đ
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Productitem;
