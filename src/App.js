import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import ProductsList from "./components/list-products.component";
import Product from "./components/product.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ProductsList} />
        <Route path="/edit/:id" component={Product} />
        <Route path="/product" component={() => <Product addProp={true} />} />
      </div>
    </Router>
  );
}

export default App;
