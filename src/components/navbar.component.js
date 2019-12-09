import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="">
        <ul className="">
          <li className="navbar-item">
            <Link to="/product" className="nav-link">
              Add
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              List
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
