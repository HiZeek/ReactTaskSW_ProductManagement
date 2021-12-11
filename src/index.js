import React from 'react';
import ReactDOM from 'react-dom';

// Components

import Header from './Components/header';
import ProductList from './Components/product_list';

const App = () => {
  return(
    <Header/>
  )
}

ReactDOM.render(<App/>, document.querySelector('#root'));