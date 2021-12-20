import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components

import Header from './Components/header';
import ProductDescription from './Components/product_description';
import ProductList from './Components/product_list';

const App = () => {
  return(
    <div>
      <Router>
      <Header/>

        <Routes>
          <Route path="/" element={<ProductList/>} />
          <Route path="/product_description" element={<ProductDescription/>} />
        </Routes>
      </Router>
      
      
    </div>
  )
}

ReactDOM.render(<App/>, document.querySelector('#root'));