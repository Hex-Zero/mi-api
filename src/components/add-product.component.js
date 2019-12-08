import React, { Component } from "react";
import axios from "axios";
import Ingredients from "./ingredients";

export default class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.onChangeLocal = this.onChangeLocal.bind(this);
    this.onChangeSku = this.onChangeSku.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeBrand = this.onChangeBrand.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeIngredients = this.onChangeIngredients.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onChangeIsnew = this.onChangeIsnew.bind(this);
    this.onChangeSale = this.onChangeSale.bind(this);
    this.onChangeInventory = this.onChangeInventory.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      local: "",
      sku: "",
      title: "",
      brand: "",
      description: "",
      ingredients: [],
      size: "",
      isnew: true,
      sale: true,
      inventory: 1,
      category: ""
    };
  }

  onChangeLocal(e) {
    this.setState({
      local: e.target.value
    });
  }

  onChangeSku(e) {
    this.setState({
      sku: e.target.value
    });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeBrand(e) {
    this.setState({
      brand: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }
  onChangeIngredients(e) {
    this.setState({
      ingredients: e.target.value
    });
  }

  onChangeSize(e) {
    this.setState({
      size: e.target.value
    });
  }

  onChangeIsnew() {
    this.setState({
      isnew: !this.state.isnew
    });
  }

  onChangeSale() {
    this.setState({
      sale: !this.state.sale
    });
  }

  onChangeInventory(e) {
    this.setState({
      inventory: e.target.value
    });
  }

  onChangeCategory(e) {
    this.setState({
      category: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const product = {
      local: this.state.local,
      sku: this.state.sku,
      title: this.state.title,
      brand: this.state.brand,
      description: this.state.description,
      ingredients: this.state.ingredients,
      size: this.state.size,
      isnew: this.state.isnew,
      sale: this.state.sale,
      inventory: this.state.inventory,
      category: this.state.category
    };

    axios
      .post("http://localhost:5000/products/add", product)
      .then(res => console.log(res.data));

    this.setState({
      local: "",
      sku: "",
      title: "",
      brand: "",
      description: "",
      ingredients: "",
      size: "",
      isnew: true,
      sale: true,
      inventory: 1,
      category: ""
    });
  }

  render() {
    return (
      <div>
        <h3>Add Product</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Local: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.local}
              onChange={this.onChangeLocal}
            />
          </div>
          <div className="form-group">
            <label>Sku: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.sku}
              onChange={this.onChangeSku}
            />
          </div>
          <div className="form-group">
            <label>Title: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group">
            <label>Brand: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.brand}
              onChange={this.onChangeBrand}
            />
          </div>
          <div className="form-group">
            <label>Size: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.size}
              onChange={this.onChangeSize}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <Ingredients
            onChangeIngredients={this.onChangeIngredients}
            value={this.state.ingredients}
          />
          <div className="form-group">
            <label>Isnew: </label>
            <input
              type="checkbox"
              className="form-control"
              checked={this.state.isnew}
              onChange={this.onChangeIsnew}
            />
          </div>
          <div className="form-group">
            <label>Sale: </label>
            <input
              type="checkbox"
              className="form-control"
              checked={this.state.sale}
              onChange={this.onChangeSale}
            />
          </div>
          <div className="form-group">
            <label>Inventory: </label>
            <input
              type="number"
              required
              className="form-control"
              value={this.state.inventory}
              onChange={this.onChangeInventory}
            />
          </div>
          <div className="form-group">
            <label>Category: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.category}
              onChange={this.onChangeCategory}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="ADD" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
