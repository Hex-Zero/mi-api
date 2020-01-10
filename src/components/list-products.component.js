import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Product = props => (
  <tr>
    <td>{props.product.title}</td>
    <td>{props.product.sku}</td>
    <td className="action">
      <Link className="edit" to={"/edit/" + props.product._id}>
        Edit
      </Link>
      <form>
        <input type="number" value={props.product.inventory}></input>
      </form>
      <button
        onClick={event => {
          props.updateProductInventory(event, props.product._id, {
            ...props.product,
            inventory: props.product.inventory + 1
          });
        }}
      >
        +
      </button>
      {/* 
      <div
        className="delete"
        onClick={() => {
          props.deleteProduct(props.product._id);
        }}
      >
        Delete
      </div> */}
    </td>
  </tr>
);

export default class ProductsList extends Component {
  constructor(props) {
    super(props);

    this.deleteProduct = this.deleteProduct.bind(this);
    this.updateProductInventory = this.updateProductInventory.bind(this);

    this.state = { products: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/products/")
      .then(response => {
        this.setState({ products: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteProduct(id) {
    axios.delete("http://localhost:5000/products/" + id).then(response => {
      // console.log(response.data);
    });

    this.setState({
      products: this.state.products.filter(el => el._id !== id)
    });
  }
  updateProductInventory(e, id, productInfo) {
    axios
      .post("http://localhost:5000/products/update/" + id, productInfo)
      .then(r => console.log(r))
      .catch(error => {
        console.log(error);
      });
    window.location = "/";
  }
  productList() {
    return this.state.products.map(currentproduct => {
      return (
        <Product
          product={currentproduct}
          deleteProduct={this.deleteProduct}
          key={currentproduct._id}
          updateProductInventory={this.updateProductInventory}
        />
      );
    });
  }

  render() {
    return (
      <>
        <div className="list-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Sku</th> <th></th>
              </tr>
            </thead>
            <tbody>{this.productList()}</tbody>
          </table>
        </div>
        <Link to="/product" id="add-button-list">
          Add
        </Link>
      </>
    );
  }
}
