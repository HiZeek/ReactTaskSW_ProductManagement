import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components

// import Header from './Components/Header';
// import ProductDescription from './Components/product_description';
// import ProductList from './Components/Product_list';

// import { Products } from './Components/arrayofitems'
import App from './App'

// const App = () => {

//   let items = Products()
    
//     console.log(items)
//   return(
//     <div>
//       <Router>
//       <Header/>

//         <Routes>
//           <Route path="/" element={<ProductList items={items}/>} />
//           <Route path="/product_description" element={<ProductDescription/>} />
//         </Routes>
//       </Router>
      
      
//     </div>
//   )
// }

ReactDOM.render(<App/>, document.querySelector('#root'));