import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaCheckSquare } from "react-icons/fa";

const Product = props => {
  const [inventory, setInventory] = React.useState(props.product.inventory);
  return (
    <tr>
      <td>{props.product.title}</td>
      <td>{props.product.sku}</td>
      <td className="action">
        <Link className="edit" to={"/edit/" + props.product._id}>
          Edit
        </Link>
        <form
          onSubmit={e =>
            props.updateProductInventory(e, props.product._id, {
              ...props.product,
              inventory: inventory
            })
          }
        >
          <input
            type="number"
            value={inventory}
            onChange={e => setInventory(e.target.value)}
          ></input>
          <button>
            <FaCheckSquare className="setInventoryCheckBox" />
          </button>
        </form>
      </td>
    </tr>
  );
};

export default class ProductsList extends Component {
  constructor(props) {
    super(props);

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

  updateProductInventory(e, id, productInfo) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/products/update/" + id, productInfo)
      .then(r => console.log(r))
      .catch(error => {
        console.log(error);
      });
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
