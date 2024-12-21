import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ProducModal from './Components/ProductModal';
import Home from './Pages/Home';
import Listing from './Pages/Listing';

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setselectedCountry] = useState('');
  const [isOpenProductModal, setisOpenProductModal] = useState(false);
  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    getCountry('https://countriesnow.space/api/v0.1/countries/');
  }, []);
  const getCountry = async (url) => {
    const responsive = await axios.get(url).then((res) => {
      setCountryList(res.data.data);
      console.log(res.data.data);
    });
  };

  const values = {
    countryList,
    selectedCountry,
    setselectedCountry,
    isOpenProductModal,
    setisOpenProductModal,
    isHeaderFooterShow,
    setIsHeaderFooterShow,
    isLogin,
    setIsLogin,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {isHeaderFooterShow === true && <Header />}

        <Routes>
          <Route path='/' exact={true} element={<Home />} />
          <Route path='/cat' exact={true} element={<Listing />} />
          <Route path='/contact-dalatfashion' exact={true} element={<Contact />} />
        </Routes>
        {isHeaderFooterShow === true && <Footer />}

        {isOpenProductModal === true && <ProducModal closeProductModal />}
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { MyContext };

// Đã xem xong part 7