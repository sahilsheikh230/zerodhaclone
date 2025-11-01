import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Navbar from './UIs/navbar';
import { BrowserRouter } from 'react-router-dom';

import { Route,Routes } from 'react-router-dom';
import Order from "./UIs/Order";
import Holding from "./UIs/Holding";
import Position from "./UIs/Position"
import Fund from "./UIs/Fund"
import App from "./UIs/App"
import TopBar from './UIs/TopBar';
import Dashboard from "./UIs/Dashboard";
import { GeneralContextProvider } from './UIs/GeneralContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GeneralContextProvider>
        <TopBar />
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/holdings" element={<Holding />} />
          <Route path="/positions" element={<Position />} />
          <Route path="/funds" element={<Fund />} />
          <Route path="/apps" element={<App />} />
        </Routes>
      </GeneralContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

