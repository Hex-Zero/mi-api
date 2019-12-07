import React, { Component } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

export default class EditProduct extends Component {
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

  componentDidMount() {
    axios
      .get("http://localhost:5000/products/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          local: response.data.local,
          description: response.data.description
        });
      })
      .catch(function(error) {
        console.log(error);
      });

    // axios
    //   .get("http://localhost:5000/users/")
    //   .then(response => {
    //     if (response.data.length > 0) {
    //       this.setState({
    //         users: response.data.map(user => user.local)
    //       });
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
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

    const exercise = {
      local: this.state.local,
      description: this.state.description
    };

    console.log(exercise);

    axios
      .post(
        "http://localhost:5000/products/update/" + this.props.match.params.id,
        exercise
      )
      .then(res => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Edit products </h3>
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
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Edit Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
