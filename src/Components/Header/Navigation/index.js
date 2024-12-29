import Button from '@mui/material/Button';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { IoIosMenu } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';
import { CategoryApi } from '../../../apis/category.api';

const Navigation = () => {
  const [isopenSidebarVal, setisopenSidebarVal] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const { data: getCategory } = useQuery({
    queryKey: ['categorys'],
    queryFn: () => CategoryApi.getCategory(),
  });

  useEffect(() => {
    if (location.pathname === '/') {
      setisopenSidebarVal(true);
    } else {
      setisopenSidebarVal(false);
    }
  }, [location]);

  return (
    <nav>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-2 navPart1'>
            {location.pathname === '/' && (
              <div className='catWrapper'>
                <Button
                  className='allCartTab align-items-center'
                  onClick={() => setisopenSidebarVal(!isopenSidebarVal)}
                >
                  <span className='mr-2 icon1'>
                    <IoIosMenu />
                  </span>
                  <span className='text'> DANH MỤC </span>
                  <span className='ml-2 icon2'>
                    <FaAngleDown />
                  </span>
                </Button>
                <div className={`sidebarnav ${isopenSidebarVal ? 'open' : ''}`}>
                  <ul>
                    <li>
                      {getCategory?.data?.map((item) => (
                        <Link to={`/cat/${item.id}`} key={item.id}>
                          <Button className={isActive(`/cat/${item.id}`) ? 'activeGT' : ''}>
                            {item.name}
                          </Button>
                        </Link>
                      ))}
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className='col-sm-10 navPart2 d-flex align-center'>
            <ul className='flex items-center list list-inline w100'>
              <li className='flex items-center list-inline-item'>
                {getCategory?.data?.map((item) => (
                  <Link to={`/cat/${item.id}`} key={item.id}>
                    <Button className={isActive(`/cat/${item.id}`) ? 'activeGT' : ''}>
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </li>

              <li className='list-inline-item'>
                <Link to='contact-dalatfashion'>
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
