import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Header} from './Header';
import './App.css';
import { Home } from './Home';
import { Products } from './Products';
import { ProductDetails } from './ProductDetails';
import { NotFound } from './NotFound';
import { ProductIndex } from './ProductIndex';
function App() {
    return (
      <div>
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="products" element={<Products />}>
              <Route path="/" element={<ProductIndex />}></Route>
              <Route path=":/productID" element={<ProductDetails />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;