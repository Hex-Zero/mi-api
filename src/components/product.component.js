import React, { Component } from "react";
import axios from "axios";
import uuidv1 from "uuid/v1";
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
    this.handleAddIngredients = this.handleAddIngredients.bind(this);
    this.handleRemoveIngredients = this.handleRemoveIngredients.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);

    this.state = {
      local: "",
      sku: "",
      title: "",
      brand: "",
      description: "",
      ingredients: [""],
      size: "",
      isnew: true,
      sale: true,
      inventory: 1,
      category: ""
    };
  }
  componentDidMount() {
    if (!this.props.addProp) {
      axios
        .get("http://localhost:5000/products/" + this.props.match.params.id)
        .then(response => {
          this.setState({
            local: response.data.local,
            sku: response.data.sku,
            title: response.data.title,
            brand: response.data.brand,
            description: response.data.description,
            ingredients: response.data.ingredients,
            size: response.data.size,
            isnew: response.data.isnew,
            sale: response.data.sale,
            inventory: response.data.inventory,
            category: response.data.category
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
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
    console.log(
      this.state.title
        .replace(/-/g, "")
        .replace(/\s/g, "-")
        .toLowerCase()
    );

    this.setState({
      title: e.target.value,
      local: e.target.value
        .replace(/-/g, "")
        .replace(/\s/g, "-")
        .toLowerCase()
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
  onChangeIngredients(e, index) {
    this.setState({
      ingredients: this.state.ingredients.map((ing, i) => {
        if (i === index) {
          return e.target.value;
        }
        return ing;
      })
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
      category: e.target.value.replace(/\s/g, "-").toLowerCase()
    });
  }
  handleAddIngredients() {
    this.setState({
      ingredients: [...this.state.ingredients, ""]
    });
  }

  handleRemoveIngredients() {
    this.setState({
      ingredients: this.state.ingredients.filter((item, index) => {
        if (this.state.ingredients.length === 1) {
          return item || "";
        }
        if (index + 1 !== this.state.ingredients.length) {
          return item || "";
        }
        return "";
      })
    });
  }

  deleteProduct(id) {
    axios.delete("http://localhost:5000/products/" + id).then(response => {});

    // this.setState({
    //   products: this.state.products.filter(el => el._id !== id)
    // });
    window.location = "/";
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

    if (this.props.addProp) {
      axios
        .post("http://localhost:5000/products/add", product)
        .then(res => console.log(res.data));
      this.setState({
        local: "",
        sku: "",
        title: "",
        brand: "",
        description: "",
        ingredients: [""],
        size: "",
        isnew: true,
        sale: true,
        inventory: 1,
        category: ""
      });
    } else {
      axios
        .post(
          "http://localhost:5000/products/update/" + this.props.match.params.id,
          product
        )
        .then(res => console.log(res.data));

      window.location = "/";
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="frist-group">
            <div className="form-group">
              <label htmlFor="title">Name: </label>
              <input
                id="title"
                type="text"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
              />
            </div>
            <div className="form-group">
              <label htmlFor="local">Local: </label>
              <input
                placeholder="Enter Name To Fill"
                id="local"
                type="text"
                required
                value={this.state.local}
              />
            </div>
            <div className="form-group">
              <label htmlFor="sku">Sku: </label>
              <input
                placeholder="Obtain From Stripe"
                id="sku"
                type="text"
                required
                value={this.state.sku}
                onChange={this.onChangeSku}
              />
            </div>

            <div className="form-group">
              <label htmlFor="brand">Brand: </label>
              <input
                id="brand"
                type="text"
                required
                value={this.state.brand}
                onChange={this.onChangeBrand}
              />
            </div>
            <div className="form-group">
              <label htmlFor="size">Size: </label>
              <input
                id="size"
                type="text"
                required
                value={this.state.size}
                onChange={this.onChangeSize}
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category: </label>
              <input
                id="category"
                type="text"
                required
                value={this.state.category}
                onChange={this.onChangeCategory}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description: </label>
            <textarea
              id="description"
              type="text"
              required
              value={this.state.description}
              onChange={this.onChangeDescription}
              rows="18"
              cols="60"
            />
          </div>
          <div className="form-group">
            <div className="add-remove">
              <div className="buttons add" onClick={this.handleAddIngredients}>
                +
              </div>
              <div
                className="buttons remove"
                onClick={this.handleRemoveIngredients}
              >
                -
              </div>
            </div>
            {this.state.ingredients.map((item, index) => {
              return (
                <div className="form-group" key={uuidv1()}>
                  <textarea
                    rows="4"
                    cols="140"
                    type="text"
                    required
                    value={this.state.ingredients[index]}
                    onChange={e => this.onChangeIngredients(e, index)}
                    placeholder={`Ingredient ${index + 1}:`}
                  />
                </div>
              );
            })}
          </div>
          <div className="form-group">
            <div>
              <label htmlFor="isnew">Isnew: </label>
              <input
                id="isnew"
                type="checkbox"
                className="checkbox"
                checked={this.state.isnew}
                onChange={this.onChangeIsnew}
              />
            </div>
          </div>
          <div className="form-group">
            <div>
              <label htmlFor="sale">Sale: </label>
              <input
                id="sale"
                type="checkbox"
                className="checkbox"
                checked={this.state.sale}
                onChange={this.onChangeSale}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inventory">Inventory: </label>
            <input
              id="inventory"
              type="number"
              required
              value={this.state.inventory}
              onChange={this.onChangeInventory}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="DONE" className="btn btn-primary" />
          </div>
        </form>
        <button
          className="delete"
          onClick={() => this.deleteProduct(this.props.match.params.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}
