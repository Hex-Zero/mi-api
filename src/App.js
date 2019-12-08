import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import ProductsList from "./components/list-products.component";
import EditProduct from "./components/edit-product.component";
import AddProduct from "./components/add-product.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ProductsList} />
        <Route path="/edit/:id" component={EditProduct} />
        <Route path="/product" component={AddProduct} />
      </div>
    </Router>
  );
}

export default App;
