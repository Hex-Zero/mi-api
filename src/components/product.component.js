import React, { Component } from "react";
import axios from "axios";

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.onChangeLocal = this.onChangeLocal.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      local: "",
      description: ""
    };
  }

  onChangeLocal(e) {
    this.setState({
      local: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const product = {
      local: this.state.local,
      description: this.state.description
    };

    console.log(product);

    axios
      .post("http://localhost:5000/products/add", product)
      .then(res => console.log(res.data));

    this.setState({
      local: "",
      description: ""
    });
  }

  render() {
    return (
      <div>
        <h3>Add Product</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Product Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.local}
              onChange={this.onChangeLocal}
            />
          </div>
          <div className="form-group">
            <label>Product Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
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
