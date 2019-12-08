import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/product" className="nav-link">
              ADD
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              LIST
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
