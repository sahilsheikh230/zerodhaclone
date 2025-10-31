import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landingpage/home/HomePage';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from "./landingpage/signup/Signup";
import PricingPage from './landingpage/pricing/PricingPage';
import ProductPage from "./landingpage/products/ProductPage"
import SupporPage from "./landingpage/support/SupportPage";
import AboutPage from "./landingpage/about/AboutPage";
import Navbar from "./landingpage/Navbar";
import Footer from "./landingpage/Footer";
import NotFound from "./landingpage/NotFound";
import Login from "./landingpage/signup/Login"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar></Navbar>
<Routes>
  <Route path="/" element={<HomePage></HomePage>}></Route>
   <Route path="/signup" element={<Signup></Signup>}></Route>
   <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/pricing" element={<PricingPage></PricingPage>}></Route>
     <Route path="/products" element={<ProductPage></ProductPage>}></Route>
      <Route path="/support" element={<SupporPage></SupporPage>}></Route>
       <Route path="/about" element={<AboutPage></AboutPage>}></Route>
       <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes> 
      <Footer></Footer>
  </BrowserRouter>
);


