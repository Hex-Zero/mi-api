import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import Product from "./components/product.component";
import ProductsList from "./components/list-products.component";
import EditProduct from "./components/edit-product.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ProductsList} />
        <Route path="/edit/:id" component={EditProduct} />
        <Route path="/product" component={Product} />
      </div>
    </Router>
  );
}

export default App;
